<?php
$data_pengguna = [
    [
        'user_id' => 1,
        'nama' => 'Roni',
        'umur' => 20,
        'jenis' => 'laki-laki',
        'alamat' => 'Jawa Tengah'
    ],
    [
        'user_id' => 2,
        'nama' => 'Steve',
        'umur' => 23,
        'jenis' => 'laki-laki',
        'alamat' => 'Jakarta'
    ],
    [
        'user_id' => 3,
        'nama' => 'Nelza',
        'umur' => 21,
        'jenis' => 'laki-laki',
        'alamat' => 'Surakarta'
    ],
];

$data_pengguna_nama = array_column($data_pengguna, 'nama');
echo "<pre>";
print_r($data_pengguna_nama);
