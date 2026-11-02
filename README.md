# Express MySQL Lab

Aplikasi web pengelolaan inventaris produk berbasis Node.js, Express.js, MySQL, dan EJS. Proyek ini dibuat untuk mempelajari implementasi operasi CRUD (Create, Read, Update, Delete), arsitektur MVC, serta pengujian keamanan terhadap SQL Injection.

## 📋 Deskripsi Proyek

Express MySQL Lab merupakan aplikasi web sederhana untuk mengelola data inventaris produk yang tersimpan di database MySQL.

Aplikasi ini memungkinkan pengguna untuk melihat daftar produk, menambahkan produk baru, mengubah informasi produk, dan menghapus produk. Selain itu, proyek ini menyediakan endpoint pengujian keamanan untuk mempelajari perbedaan antara query SQL yang menggunakan parameter dan query yang menggabungkan input pengguna secara langsung.

Proyek ini menggunakan pola pemisahan Model, View, dan Controller (MVC) agar kode lebih terstruktur dan mudah dikembangkan.

## ✨ Fitur

- **Read:** Menampilkan daftar produk dari database.
- **Create:** Menambahkan produk baru.
- **Update:** Mengubah informasi produk yang sudah tersimpan.
- **Delete:** Menghapus produk berdasarkan ID.
- **Database Integration:** Menghubungkan aplikasi dengan MySQL menggunakan `mysql2`.
- **MVC Architecture:** Memisahkan logika data, tampilan, dan pengendalian aplikasi.
- **SQL Injection Experiment:** Menguji keamanan query berdasarkan cara input pengguna diproses.
- **Input Validation:** Memeriksa input pada proses pengelolaan produk dan endpoint pengujian keamanan.

## 🛠️ Teknologi yang Digunakan

| Teknologi | Fungsi |
|---|---|
| Node.js | Menjalankan JavaScript pada sisi server |
| Express.js | Menangani routing dan request HTTP |
| MySQL | Menyimpan data inventaris produk |
| mysql2 | Menghubungkan aplikasi dengan database MySQL |
| EJS | Membuat tampilan halaman web secara dinamis |
| dotenv | Mengelola konfigurasi melalui environment variables |
| HTML | Menyusun struktur halaman web |
| CSS | Mengatur tampilan dan tata letak halaman |

## 📁 Struktur Proyek

```text
express-mysql-lab/
├── config/
│   └── database.js
├── controllers/
│   └── produk.controller.js
├── models/
│   └── produk.model.js
├── routes/
│   └── produk.routes.js
├── views/
│   ├── pages/
│   │   ├── produk-list.ejs
│   │   ├── produk-form-tambah.ejs
│   │   └── produk-form-edit.ejs
│   └── partials/
│       ├── header.ejs
│       └── footer.ejs
├── public/
│   └── css/
│       └── style.css
├── .env
├── .gitignore
├── app.js
├── package.json
├── package-lock.json
└── README.md
```

**Keterangan folder dan file:**

- `config/database.js`: Mengatur koneksi aplikasi ke MySQL.
- `controllers/produk.controller.js`: Menangani logika aplikasi untuk operasi CRUD dan pengujian keamanan.
- `models/produk.model.js`: Menjalankan query SQL untuk mengambil, menambahkan, mengubah, dan menghapus data produk.
- `routes/produk.routes.js`: Mendefinisikan endpoint aplikasi.
- `views/pages/`: Menyimpan halaman daftar produk dan formulir tambah serta edit produk.
- `views/partials/`: Menyimpan komponen tampilan yang dapat digunakan kembali.
- `public/css/style.css`: Menyimpan stylesheet aplikasi.
- `app.js`: Menginisialisasi Express, middleware, konfigurasi EJS, koneksi database, dan server.
- `.env`: Menyimpan konfigurasi lingkungan, termasuk kredensial database.
- `.gitignore`: Menentukan file dan folder yang tidak perlu dimasukkan ke repositori Git.

*Catatan: Struktur di atas mengikuti file proyek yang telah dibahas. Sesuaikan jika terdapat file tambahan atau perbedaan pada struktur proyek aktual.*

## ⚙️ Persyaratan Sistem

Pastikan perangkat sudah memiliki:

- Node.js
- npm
- MySQL Server
- Editor kode, seperti Visual Studio Code

## 🚀 Instalasi dan Menjalankan Aplikasi

### 1. Clone atau buka proyek

Jika proyek sudah tersedia di komputer, buka folder proyek melalui terminal Visual Studio Code.

Jika proyek berada di repositori Git, jalankan:

```bash
git clone <URL_REPOSITORY>
cd express-mysql-lab
```

Ganti `<URL_REPOSITORY>` dengan URL repositori milikmu.

### 2. Instal dependensi

Jalankan perintah berikut pada terminal:

```bash
npm install
```

Perintah tersebut memasang dependensi yang tercantum dalam `package.json`.

### 3. Buat database MySQL

Buka MySQL client atau phpMyAdmin, kemudian jalankan SQL berikut:

```sql
CREATE DATABASE IF NOT EXISTS db_lab_web;

USE db_lab_web;

CREATE TABLE IF NOT EXISTS produk (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nama_produk VARCHAR(255) NOT NULL,
    kategori VARCHAR(100) NOT NULL,
    harga DECIMAL(12, 2) NOT NULL,
    stok INT NOT NULL DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

Perintah ini membuat database `db_lab_web` dan tabel `produk` jika keduanya belum tersedia.

Jika database atau tabel sudah ada, periksa strukturnya terlebih dahulu sebelum menjalankan perubahan skema.

### 4. Konfigurasi environment variables

Buat atau sesuaikan file `.env` di folder utama proyek:

```env
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=db_lab_web
```

Sesuaikan `DB_USER` dan `DB_PASSWORD` dengan konfigurasi MySQL pada perangkatmu.

Contoh tersebut mengasumsikan MySQL menggunakan pengguna `root` tanpa password. Jika konfigurasi MySQL milikmu berbeda, gunakan kredensial yang sesuai.

**Penting:** Jangan membagikan file `.env` yang berisi kredensial asli ke repositori publik.

### 5. Jalankan aplikasi

Jika `package.json` memiliki script `dev`, jalankan:

```bash
npm run dev
```

Jika tidak, jalankan aplikasi dengan:

```bash
node app.js
```

Apabila koneksi database berhasil, terminal akan menampilkan pesan serupa dengan:

```text
[DATABASE] Terhubung ke MySQL Pool secara aman.
[SERVER] Aktif di http://localhost:3000
```

### 6. Buka aplikasi

Akses halaman berikut melalui browser:

| Halaman | URL |
|---|---|
| Daftar produk | http://localhost:3000/produk |
| Form tambah produk | http://localhost:3000/produk/tambah |
| Endpoint pengujian keamanan | http://localhost:3000/uji-keamanan?kategori=Periferal |

Halaman edit produk diakses melalui tombol atau tautan edit pada daftar produk.

## 🗄️ Struktur Database

Database yang digunakan adalah `db_lab_web`, dengan tabel utama bernama `produk`.

| Kolom | Tipe Data | Keterangan |
|---|---|---|
| `id` | INT | Primary key dan bertambah otomatis |
| `nama_produk` | VARCHAR(255) | Nama produk |
| `kategori` | VARCHAR(100) | Kategori produk |
| `harga` | DECIMAL(12,2) | Harga produk |
| `stok` | INT | Jumlah stok produk |
| `created_at` | TIMESTAMP | Waktu pencatatan data |

## 🔗 Endpoint Aplikasi

| Method | Endpoint | Fungsi |
|---|---|---|
| GET | `/produk` | Menampilkan daftar produk |
| GET | `/produk/tambah` | Menampilkan formulir tambah produk |
| POST | `/produk/tambah` | Menyimpan produk baru |
| GET | `/produk/edit/:id` | Menampilkan formulir edit produk |
| POST | `/produk/edit/:id` | Memperbarui data produk |
| POST | `/produk/hapus/:id` | Menghapus produk |
| GET | `/uji-keamanan?kategori=Periferal` | Menguji pencarian produk berdasarkan kategori |

` :id ` merupakan parameter dinamis yang diganti dengan ID produk.

## 🔐 Experience 6: SQL Injection Experiment

Bagian ini digunakan untuk mempelajari risiko SQL Injection dan membandingkan query yang rentan dengan pendekatan yang lebih aman.

### 1. Mode aman: Parameterized Query

Implementasi aman pada model menggunakan parameter query:

```javascript
getByKategori: async (kategori) => {
    const sql = 'SELECT * FROM produk WHERE kategori = ?';
    const [rows] = await db.query(sql, [kategori]);
    return rows;
}
```

Input kategori dikirim sebagai parameter, bukan digabungkan langsung ke dalam struktur SQL.

### 2. Mode rentan: String Concatenation

Untuk demonstrasi lokal, query rentan dapat disimulasikan dengan menggabungkan input langsung ke dalam query:

```javascript
getByKategori: async (kategori) => {
    const sql = `SELECT * FROM produk WHERE kategori = '${kategori}'`;
    const [rows] = await db.query(sql);
    return rows;
}
```

Pendekatan ini berisiko karena input pengguna dapat mengubah struktur query SQL.

**Peringatan:** Implementasi rentan hanya boleh digunakan pada lingkungan pengujian lokal dengan data yang tidak sensitif. Jangan menerapkannya pada aplikasi produksi atau server publik. Setelah eksperimen selesai, kembalikan implementasi ke versi aman.

### 3. Cara melakukan pengujian

1. Pastikan server berjalan pada komputer lokal.
2. Buka endpoint pengujian menggunakan kategori yang tersedia di database.
3. Catat jumlah hasil dan data yang dikembalikan.
4. Pada lingkungan lokal yang terisolasi, bandingkan hasil menggunakan implementasi rentan dan implementasi aman.
5. Catat perbedaan hasil untuk dokumentasi eksperimen.
6. Kembalikan model ke implementasi aman setelah pengujian.

Contoh endpoint:

```text
http://localhost:3000/uji-keamanan?kategori=Periferal
```

Untuk pengujian input khusus, gunakan lingkungan lokal dengan data uji dan jangan arahkan pengujian ke sistem yang tidak kamu miliki atau tidak memiliki izin untuk diuji.

### 4. Hasil yang diharapkan

- **String concatenation:** Input tidak tepercaya dapat mengubah struktur query dan menimbulkan risiko SQL Injection.
- **Parameterized query:** Input diperlakukan sebagai nilai parameter sehingga tidak dapat begitu saja mengubah struktur query.

Hasil aktual bergantung pada implementasi yang sedang aktif, versi driver database, dan isi database.

## 🛡️ Catatan Keamanan

- Gunakan parameter query untuk memproses input pengguna.
- Validasi data sebelum menjalankan operasi database.
- Jangan menampilkan detail error database kepada pengguna aplikasi.
- Simpan kredensial database di `.env`.
- Jangan mengunggah `.env` ke repositori publik.
- Jangan gunakan implementasi SQL Injection yang rentan di lingkungan produksi.
- Batasi pengujian keamanan pada sistem yang kamu miliki atau yang penggunaannya telah mendapat izin.

## 🎯 Tujuan Pembelajaran

Melalui proyek ini, mahasiswa dapat mempelajari:

1. Pembuatan aplikasi web menggunakan Node.js dan Express.js.
2. Integrasi aplikasi dengan database MySQL.
3. Implementasi operasi CRUD.
4. Pemisahan kode menggunakan pola MVC.
5. Penggunaan EJS untuk menampilkan data dinamis.
6. Penggunaan parameter query untuk mengurangi risiko SQL Injection.
7. Perbandingan antara query yang rentan dan query yang menggunakan parameter.

## 📄 Lisensi

Proyek ini dibuat untuk keperluan pembelajaran dan praktikum pemrograman web. Lisensi dapat ditentukan sesuai kebutuhan pemilik proyek.
