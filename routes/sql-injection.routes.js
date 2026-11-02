const express = require('express');
const router = express.Router();
const db = require('../config/database');

// EKSPERIMEN A: Query rentan menggunakan konkatenasi string
router.get('/rentan', async (req, res) => {
try {
const namaProduk = req.query.nama || '';

    // HANYA UNTUK EKSPERIMEN LOKAL
    const sql =
        "SELECT * FROM produk WHERE nama_produk = '" +
        namaProduk +
        "'";

    const [rows] = await db.query(sql);

    res.json({
        eksperimen: 'Konkatenasi String (Rentan)',
        jumlahHasil: rows.length,
        data: rows
    });
} catch (error) {
    console.error('[EKSPERIMEN RENTAN]:', error.message);
    res.status(500).json({
        pesan: 'Query gagal dijalankan.'
    });
}

});

// EKSPERIMEN B: Query aman menggunakan Prepared Statement
router.get('/aman', async (req, res) => {
try {
const namaProduk = req.query.nama || '';

    const sql = 'SELECT * FROM produk WHERE nama_produk = ?';

    const [rows] = await db.query(sql, [namaProduk]);

    res.json({
        eksperimen: 'Prepared Statement (Aman)',
        jumlahHasil: rows.length,
        data: rows
    });
} catch (error) {
    console.error('[EKSPERIMEN AMAN]:', error.message);
    res.status(500).json({
        pesan: 'Query gagal dijalankan.'
    });
}

});

module.exports = router;