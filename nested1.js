/**
 * ================
 * Treasure Hunter
 * ================
 * [INSTRUCTIONS]
 * Di program ini, kamu diminta untuk mencari harta karun sebanyak-banyaknya.
 * Harta karun ditandai dengan simbol (ada 9 simbol):
 * '!', '@', '#', '$', '%', '^', '&', '*', '(', ')'
 * 
 * Jika kalian berhasil menemukan harta karun tersebut, kalian akan tukarkan seharga 500.
 * Misal kamu mendapatkan 3, maka 1500, jika 5: 2500.
 * 
 * Jika mendapatkan 5, maka:
 * 'Selamat, kamu mendapatkan 2500 hari ini!'
 * 
 * Jika tidak ada simbol pada string tersebut, program akan memberikan info:
 * 'Kamu tidak beruntung hari ini!'
 * 
 * [RULE]
 * - Hanya boleh menggunakan sintaks iterasi (for/while/do..while), kondisional (if-else/switch-case), serta operasi string untuk pemecahan masalah.
 * - Dilarang menggunakan built-in function, regex .match dan lainnya!
 * 
 * [EXAMPLE]
 * data = 'alskdj*lakjsd761^%'
 * output = 'Selamat, kamu mendapatkan 1500 hari ini!'
 * 
 * data = 'hacktiv8'
 * output = 'Kamu tidak beruntung hari ini!'
 */

 var data = 'alskdj*lakj12%$%sd761^%' // Silahkan ubah isi variabel sesuai keperluan.
 //'!', '@', '#', '$', '%', '^', '&', '*', '(', ')'
 const hartaKarun = "!@#$%^&*()"
 let ketemu = 0

 for (let i = 0; i < hartaKarun.length; i++) {
    for (let j = 0; j < data.length; j++) {
        if(hartaKarun[i] === data[j]) {
            ketemu += 1
        }
    }
 }
 console.log(`Kamu menemukan harta karun sebanyak ${ketemu}, dan bisa ditukarkan dengan harga ${ketemu*500}`)