<?php
// this is totorial about how to find item of array multidimensi by value

$data = [
  [
    'nama' => 'ucup',
    'umur' => 18,
    'no_ind' => 12310
  ],
  [
    'nama' => 'memet',
    'umur' => 19,
    'no_ind' => 12312
  ],
  [
    'nama' => 'aldo',
    'umur' => 20,
    'no_ind' => 34233
  ],
  [
    'nama' => 'memet',
    'umur' => 19,
    'no_ind' => 12321
  ],
  [
    'nama' => 'aldo',
    'umur' => 12,
    'no_ind' => 19282
  ],
  [
    'nama' => 'zila',
    'umur' => 20,
    'no_ind' => 33233
  ],
];
$keys = array_keys(array_column($data, 'nama'), 'memet');

foreach ($keys as $key => $val) {
 $result[] = $data[$val];
}

echo "<pre>";print_r($result);
