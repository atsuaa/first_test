<?php
header('Content-type: text/plain; charset= UTF-8');

$row = $_GET['row'];
$col = $_GET['col'];
$flag = $_GET['flag'];


$path = './tile.json';
$source = file_get_contents($path);
$json = json_decode($source);

if ($flag === 'true') {
  $json[$row][$col]++;
} else {
  $json[$row][$col]--;
}

$enjson = json_encode($json);

file_put_contents($path, $enjson, LOCK_EX);

$data = $json[$row][$col];

echo $data;
