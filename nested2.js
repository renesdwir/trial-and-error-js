/*
=============================
Menerjemahkan angka ke simbol
=============================
Kamu diberikan input yang berisikan angka-angka, tugasmu adalah menerjemahkan angka-angka tersebut ke barisan simbol.
Jumlah baris yang muncul sesuai dengan panjang input dan jumlah simbol yang ditampilkan di tiap baris sesuai dengan angka-angka di dalam input. Simbol yang ditampilkan di baris ganjil adalah '$' dan simbol yang ditampilkan di baris genap adalah '|'.
Contoh 1
--------
let input = '123'
output:
$
||
$$$
penjelasan:
$   -> $ ditampilkan 1 kali
||  -> | ditampilkan 2 kali
$$$ -> $ ditampilkan 3 kali 
Contoh 2
--------
let input = '4212'
output:
$$$$
||
$
||
penjelasan:
$$$$    -> $ ditampilkan 4 kali
||      -> | ditampilkan 2 kali
$       -> $ ditampilkan 1 kali
||      -> | ditampilkan 2 kali
*/

let input = '4212'
input = input.toString()
let row = ""
for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[i]; j++){
        if (i % 2===0) {
            row += "$"
        }else {
            row += "|" 
        }
    }
    row += "\n"
}
console.log(row)