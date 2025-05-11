//_____TEMPLATE STRING_____//
// let namaAwal = "Ahadi";
// let namaAkhir = "Hadi";
// function sapa(nama){
//     return `adalah ${nama}`;
// }
// console.log(`Hallo, nama lengkap saya ${sapa("Ahadi")}, dan nama panggilan saya adalah ${namaAkhir}`);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////



//_____TERNARY OPERATOR _____//
// const user = "Admin";
// let result = (user == "Admin") ? "Selamat datang admin" : "User tidak ditemukan";
// console.log(result);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////



//_____CLASS DAN OBJECT_____//
//_____OBJECT DENGAN CLASS
// class Buku {
//   constructor(judul, penulis) {
//     this.judul = judul;
//     this.penulis = penulis;
//   }
//   deskripsi() {
//     return `Buku "${this.judul}" ditulis oleh ${this.penulis}`;
//   }
// }
// let bukuSastra = new Buku("Laskar Pelangi", "Andrea Hirata");
// console.log(bukuSastra.deskripsi());

//_____OBJECT TANPA CLASS
// let mobil = {
//     merk : "Toyota",
//     tipe : "Avanza",
//     nyalakanMesin(){
//         return `Mesin ${this.merk} ${this.tipe} menyala abangku`;
//     }
// };
// console.log(mobil.nyalakanMesin());

//_____ARROW FUNCTION DALAM METHOD
// let sepeda = {
//     merk : "polygon",
//     tipe : "mountain bike",
//     deskripsi: 
//     function() { return `Sepeda ${this.merk} dengan tipe ${this.tipe}.`}
// };
// console.log(sepeda.deskripsi());
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////



//_____ SPREAD OPERATOR UNTUK ARRAY_____//
//_____MENGGABUNGKAN 2 ARRAY
// let kotak1 = ["moboil", "kereta"];
// let kotak2 = ["robot", "pesawat"];
// let kotakGabungan = [...kotak1, ...kotak2];
// console.log(kotakGabungan);

//_____MENAMBAHKAN NILAI
// let kotak1 = ["mobil", "kereta"];
// kotak1= [...kotak1, "boneka"];
// console.log(kotak1);

//_____MEMBUAT DUPLIKAT
// let kotak1 = ["mobil", "kereta"];
// let kotakDuplikat = [...kotak1];
// console.log(kotakDuplikat);

//_____SPREAD OPERATOR UNTUK OBJECT
// let tas1 = {
//     buku : "matematika",
//     pensil : "merah"
// };
// let tas2 = {penghapus: "putih", penggaris: "biru"};

// let tasGabungan = {...tas1,...tas2};
// console.log(tasGabungan);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////



//_____ REST PARAMETER_____//
//_____REST PARAMETER DALAM FUNGSI
//     function hitungTotal(...hargaBarang) {
//         let total = 0;
//         for (let harga of hargaBarang){
//             total += harga;
//         }
//         return total;
//     }
// console.log(hitungTotal(1000, 3000));
// console.log(hitungTotal(2500, 2500, 5000));

//_____REST PARAMETER DENGAN ARROW FUNCTION
// const hitungTotal = (...hargaBarang) => {
//         let total = 0;
//         for (let harga of hargaBarang){
//             total += harga;
//         }
//         return total;
// }
// console.log(hitungTotal(13000,2000));

//_____REST PARAMETER DALAM DESTRUCTURING
//_____ARRAY DESTRUCTURING
// const warna = ["merah", "hijau", "biru", "kuning"];
// const [pertama, ...lainnya] = warna;
// console.log(pertama);
// console.log(lainnya);

//_____OBJECT DESTRUCTURING
// const user = {
//   nama: "Hadiiii",
//   umur: 25,
//   domisili: "Tangerang"
// };

// // Tanpa destructuring
// const name = user.nama;
// const umure = user.umur;

// Dengan destructuring:
// const { nama, ...sisanya } = user;
// console.log(nama); // "Hadi"
// console.log(sisanya);




//_____ARRAY DI REACT: SEPERTI RAK BARANG_____//
//_____forEach() : SI TUKANG PERIKSA
// let angka = [1,2,3,4,5];
// angka.forEach((angka, index) => {
//     console.log(`Angka ke-${index+1} : ${angka}`);
// });

//_____map() : SI MESIN PENGUBAH
// let angka = [1,2,3,4,5];
// let angkaKuadrat = angka.map(angka => angka*angka);
// console.log(angkaKuadrat);



//_____ASYNCHRONOUS JAVASCRIPT (PROMISE / ASYNC-AWAIT)
//_____JAVASCRIPT SYNCHRONOUS: ANTRIAN DI KASIR
//_____JAVASCRIPT ASYNCHRONOUS: PESAN MAKAKAN DI RESTORAN
//_____PROMISE: "JANJI" UNTUK MENYAMPAIKAN HASIL
const pesanMakanan = (makananSiap) => {
    return new Promise((resolve, reject) => {
        if(makananSiap){
            resolve("Makanan Siap!");
        } else {
            reject("Maaf, makanan habis");
        }
    });
};

//_____.then() dan .catch() MENUNGGU DAN MENANGANI HASIL
// .then(pesan => console.log(pesan) )
// .catch(error => console.log(error));

//_____async / await : MEMBUAT KODE ASYNCHRONOUS LEBIH MUDAH
const makan = async () => {
    try {
        let pesan = await pesanMakanan(true);
        console.log(pesan);
    } catch(error){
        console.log(error);        
    }
};
makan();