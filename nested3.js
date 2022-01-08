/**
 Hapus Karakter Terlarang (Implementasi nested loop)
-------------------------
Diberikan sebuah kata. 
Tugas Anda adalah memfilter agar kata tidak mengandung karakter terlarang, yaitu karakter s,r,a,9,8.
contoh:
input: 'hayo andi'
output: 'hyo ndi'
input: '17 agustus 1945'
output: '17 gutu 145'
RULES:
- DILARANG MENGGUNAKAN built in function apapun.
*/
var input = 'hayo andi'
var hurufTerlarang = 'sra98'//a
var output = ''

for (let i = 0; i < input.length; i++) {
    let flag = false
    for (let j = 0; j < hurufTerlarang.length; j++) {
        if (input[i] === hurufTerlarang[j]){
            output += ""
            flag = true
            break
        }
    }
    if (!flag) {
        output += input[i]
    }
}
console.log(output)