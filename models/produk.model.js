const db = require('../config/database');

const ProdukModel = {
// READ: Menampilkan seluruh produk
getAll: async () => {
const sql = 'SELECT * FROM produk ORDER BY id DESC';
const [rows] = await db.query(sql);
return rows;
},

// CREATE: Menambahkan produk
create: async (data) => {
    const sql = `
        INSERT INTO produk (nama_produk, kategori, harga, stok)
        VALUES (?, ?, ?, ?)
    `;

    const [result] = await db.query(sql, [
        data.nama_produk,
        data.kategori,
        data.harga,
        data.stok
    ]);

    return result;
},

// READ: Mengambil produk berdasarkan ID
getById: async (id) => {
    const sql = 'SELECT * FROM produk WHERE id = ?';
    const [rows] = await db.query(sql, [id]);
    return rows[0];
},

// UPDATE: Mengubah data produk
update: async (id, data) => {
    const sql = `
        UPDATE produk
        SET nama_produk = ?, kategori = ?, harga = ?, stok = ?
        WHERE id = ?
    `;

    const [result] = await db.query(sql, [
        data.nama_produk,
        data.kategori,
        data.harga,
        data.stok,
        id
    ]);

    return result;
},

// DELETE: Menghapus produk
delete: async (id) => {
    const sql = 'DELETE FROM produk WHERE id = ?';
    const [result] = await db.query(sql, [id]);
    return result;
},

// EXPERIENCE 6: Pengujian SQL Injection
// MODE AMAN: Prepared Statement
getByKategori: async (kategori) => {
    const sql = 'SELECT * FROM produk WHERE kategori = ?';

    console.log('[SQL QUERY - AMAN]:', sql);
    console.log('[SQL PARAMETER]:', kategori);

    const [rows] = await db.query(sql, [kategori]);
    return rows;
}

};

module.exports = ProdukModel;