# 💍 Undangan Digital Pernikahan

Aplikasi undangan pernikahan digital berbasis web yang sangat ringan di semua tipe HP, dibangun menggunakan **Svelte + Vite**.

## ✨ Fitur

- 🌸 **Cover / Hero Interaktif**: Mendukung nama tamu undangan dinamis via URL parameter (`?to=Nama+Tamu`).
- 🎵 **Musik Latar**: Otomatis memutar audio saat tombol "Buka Undangan" diklik + kontrol floating button.
- 📖 **Ayat Suci**: Kutipan QS. Ar-Rum: 21 & salam pembuka.
- 👫 **Profil Mempelai**: Foto, nama lengkap, nama orang tua, dan tautan media sosial.
- ⏳ **Countdown Timer**: Hitung mundur hari-H + tombol "Simpan ke Kalender" (Google Calendar).
- 📜 **Kisah Cinta / Timeline**: Riwayat perjalanan cinta dari awal bertemu hingga pelaminan.
- 📍 **Peta Lokasi**: Integrasi Google Maps embed & tombol navigasi langsung.
- 🖼️ **Galeri Foto**: Grid foto responsif dengan lightbox modal (support swipe/panah keyboard).
- 💌 **Buku Tamu & RSVP**: Form konfirmasi kehadiran & ucapan doa restu yang tersimpan otomatis di browser (localStorage).
- 🎨 **Tema**: Sage Green & Gold elegan.

## 🚀 Menjalankan Project

```bash
# Install dependencies
npm install

# Jalankan server lokal
npm run dev

# Build untuk produksi
npm run build
```

## 📝 Mengubah Data Mempelai & Acara

Cukup ubah data pada file:
👉 `src/lib/data/invitation.js`

Semua data (nama mempelai, tanggal acara, lokasi, galeri foto, lagu) terpusat di file tersebut.

## 🔗 Format Tautan Tamu

Bagikan link dengan parameter `to`:
```
https://zaq-ly.github.io/Undangan-Digital/?to=Bapak+Budi+Sekeluarga
```
