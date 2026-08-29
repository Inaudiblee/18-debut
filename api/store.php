<?php
/* ============================================================
   store.php
   A tiny flat-file key/value store so RSVPs, Memories and
   Messages are actually SAVED once this site is uploaded to a
   real web host (e.g. InfinityFree), instead of only working
   inside the Claude preview.

   Works the same shape as the site's built-in window.storage:
     GET  api/store.php?action=get&key=messages   -> returns the stored JSON (or null)
     POST api/store.php  {action:"set", key:"messages", value:[...]}  -> saves it
     POST api/store.php  {action:"append", key:"memories", value:{...}} -> pushes
       one item onto the array stored at that key (creating it as []
       first if needed). Used by the QR guest-submission page
       (guest.html) so that many guests submitting a memory within
       the same second, from different phones, at the same event,
       can never overwrite each other the way a read-modify-write
       "set" of the whole array could. The push happens inside the
       same exclusive file lock as everything else below, so it is
       atomic per-request regardless of how many requests land at
       once.

   Everything is written to plain .json files inside /api/data/,
   which is blocked from public browsing by the .htaccess file in
   that folder. No database setup needed.
   ============================================================ */

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');

$dataDir = __DIR__ . '/data';
if (!is_dir($dataDir)) {
  @mkdir($dataDir, 0755, true);
}

function safe_key($key) {
  /* letters, numbers, dash, underscore, colon only — everything else stripped */
  return preg_replace('/[^A-Za-z0-9_\-:]/', '_', (string) $key);
}

function fail($code, $msg) {
  http_response_code($code);
  echo json_encode(['error' => $msg]);
  exit;
}

$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'GET') {
  $action = isset($_GET['action']) ? $_GET['action'] : '';
  $key = isset($_GET['key']) ? $_GET['key'] : '';
} else {
  $raw = file_get_contents('php://input');
  $input = json_decode($raw, true);
  if (!is_array($input)) $input = [];
  $action = isset($input['action']) ? $input['action'] : '';
  $key = isset($input['key']) ? $input['key'] : '';
}

if ($key === '') {
  fail(400, 'missing key');
}
if (!is_dir($dataDir) || !is_writable($dataDir)) {
  fail(500, 'data folder is not writable — check /api/data permissions on your host');
}

$file = $dataDir . '/' . safe_key($key) . '.json';

if ($action === 'get') {
  if (!file_exists($file)) {
    echo 'null';
    exit;
  }
  $contents = @file_get_contents($file);
  echo ($contents === false || $contents === '') ? 'null' : $contents;
  exit;
}

if ($action === 'set') {
  if ($method !== 'POST') {
    fail(405, 'set requires POST');
  }
  $value = array_key_exists('value', $input) ? $input['value'] : null;
  $encoded = json_encode($value);
  if ($encoded === false) {
    fail(400, 'value could not be encoded as JSON');
  }
  $fp = @fopen($file, 'c+');
  if (!$fp) {
    fail(500, 'could not open storage file');
  }
  if (flock($fp, LOCK_EX)) {
    ftruncate($fp, 0);
    rewind($fp);
    fwrite($fp, $encoded);
    fflush($fp);
    flock($fp, LOCK_UN);
  }
  fclose($fp);
  echo json_encode(['ok' => true]);
  exit;
}

if ($action === 'append') {
  if ($method !== 'POST') {
    fail(405, 'append requires POST');
  }
  if (!array_key_exists('value', $input)) {
    fail(400, 'missing value to append');
  }
  $item = $input['value'];
  $fp = @fopen($file, 'c+');
  if (!$fp) {
    fail(500, 'could not open storage file');
  }
  $count = null;
  if (flock($fp, LOCK_EX)) {
    /* Read-modify-write happens entirely inside the exclusive lock,
       so a second request has to wait its turn instead of reading
       stale data and stomping this one's write. */
    $existingRaw = stream_get_contents($fp);
    $existing = ($existingRaw === false || trim($existingRaw) === '') ? null : json_decode($existingRaw, true);
    $arr = is_array($existing) ? $existing : [];
    $arr[] = $item;
    /* Safety cap so one runaway script (or a very large event) can't
       grow the file without bound — keeps the most recent entries. */
    if (count($arr) > 1000) {
      $arr = array_slice($arr, -1000);
    }
    $count = count($arr);
    $encoded = json_encode($arr);
    ftruncate($fp, 0);
    rewind($fp);
    fwrite($fp, $encoded);
    fflush($fp);
    flock($fp, LOCK_UN);
  }
  fclose($fp);
  if ($count === null) {
    fail(500, 'could not acquire storage lock');
  }
  echo json_encode(['ok' => true, 'total' => $count]);
  exit;
}

fail(400, 'action must be "get", "set", or "append"');
