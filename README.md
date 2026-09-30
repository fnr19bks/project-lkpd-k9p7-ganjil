# 🎮 SPENLAS DIGITAL JOURNALIST

**LKPD Digital Interaktif — Informatika Kelas 9**
Topik: **CMS/Blog dan Etika Publikasi** · SMP Negeri 19 Kota Bekasi

Game edukasi berbasis web (HTML + CSS + Vanilla JavaScript) tanpa framework, tanpa CDN, dan bisa dijalankan **offline**. Siswa berperan sebagai "Jurnalis Muda" yang harus menyelesaikan 4 level untuk menerbitkan artikel blog sekolah secara etis.

---

## 📚 Isi Materi

| Level | Nama | Mekanik | Topik |
|---|---|---|---|
| 1 | Kenali CMS-mu! | Drag & Drop Matching | Fungsi CMS & jenis-jenisnya |
| 2 | Label & Metadata Challenge | Sorting / Klasifikasi | Metadata, Label, Kategori |
| 3 | Etika atau Pelanggaran? | Swipe Decision | Hak Cipta, Plagiarisme, Etika Publikasi |
| 4 | Jurnalis Sejati (BONUS) | Simulasi Menulis Blog | Gabungan semua materi |

Skor maksimal: **400 poin** (100 per level).

---

## 📂 Struktur File

```
spenlas-digital-journalist/
├── index.html      ← Struktur halaman & semua screen
├── style.css       ← Styling, animasi, responsif, dark mode
├── script.js       ← Logika game, data soal, skor, local storage
├── README.md       ← Dokumentasi ini
├── favicon.svg     ← Ikon tab browser
└── logo.png        ← Logo sekolah (silakan ganti dengan logo asli)
```

---

## ▶️ Cara Menjalankan Secara Lokal

1. Unduh / salin semua file ke satu folder.
2. Klik dua kali file **`index.html`** — game langsung terbuka di browser.
3. Tidak perlu internet, tidak perlu instalasi apa pun.

> **Catatan:** Jika `logo.png` belum ada, game otomatis menampilkan logo cadangan (SVG bawaan). Game tetap berjalan normal.

---

## 🖼️ Cara Mengganti `logo.png` dengan Logo Sekolah Asli

1. Siapkan file logo SMP Negeri 19 Kota Bekasi dalam format **PNG**.
2. Ukuran disarankan **200 × 200 piksel** (persegi, latar transparan lebih baik).
3. Beri nama file persis: **`logo.png`** (huruf kecil semua).
4. Timpa file `logo.png` lama di folder proyek dengan file baru.
5. Buka `index.html` → refresh browser. Logo baru langsung muncul di header, layar pembuka, dan sertifikat.

> 💡 Belum punya file PNG? Buka gambar logo di Paint / Canva → **Save as PNG** → beri nama `logo.png`.

---

## ⚙️ Cara Mengubah Soal / Pengaturan Game

Semua data soal dan pengaturan ada di **`script.js`**:

- **`const CONFIG = { ... }`** → letak di paling atas file. Ubah di sini:
  - `ENABLE_TIMER` (`true`/`false`) — aktifkan timer per level
  - `TIMER_SECONDS` — durasi timer (detik)
  - `ENABLE_SOUND` — efek suara
  - `ENABLE_CONFETTI` — konfeti saat skor tinggi
  - `MEDAL_GOLD` / `MEDAL_SILVER` / `MEDAL_BRONZE` — ambang batas medali
  - `ENABLE_LEADERBOARD` — papan skor kelas
  - `ENABLE_EXIT_TICKET` — form refleksi
  - `ENABLE_CERTIFICATE` — tombol cetak sertifikat
  - `SCHOOL_NAME` / `TEACHER_NAME` — nama sekolah & guru di sertifikat

- **`const GAME_DATA = { ... }`** → berisi seluruh soal Level 1–4.
- **`const GLOSSARY = [ ... ]`** → isi Kamus Mini.
- **`const I18N = { id: {...}, en: {...} }`** → teks antarmuka dwibahasa.

> Jangan mengubah `FOOTER_TEXT` — sudah sesuai ketentuan LKPD.

---

## 🚀 Cara Deploy ke GitHub Pages (GRATIS) — Panduan Pemula

### 📝 Persiapan
1. Buat akun GitHub gratis di <https://github.com/signup> (cukup pakai email).
2. Buka email → klik tautan verifikasi.

### 📁 Langkah 1 — Buat Repository Baru
1. Login ke GitHub.
2. Klik tombol **`+`** di kanan atas → pilih **New repository**.
3. Isi **Repository name**: `spenlas-digital-journalist`.
4. Pilih **Public** (WAJIB public agar GitHub Pages gratis).
5. Centang **Add a README file**.
6. Klik **Create repository**.

### 📤 Langkah 2 — Upload File
1. Di halaman repository, klik **Add file** → **Upload files**.
2. Seret (drag) file berikut ke area upload:
   - `index.html`
   - `style.css`
   - `script.js`
   - `favicon.svg`
   - `logo.png` (ganti dengan logo asli SMPN 19)
3. Di kotak **Commit changes**, tulis: `Upload game files`.
4. Klik **Commit changes**.

### ⚙️ Langkah 3 — Aktifkan GitHub Pages
1. Di halaman repository, klik tab **Settings** (ikon gerigi).
2. Di menu kiri, scroll ke bawah → klik **Pages**.
3. Di bagian **Source**, pilih **Deploy from a branch**.
4. Di **Branch**, pilih **`main`** dan folder **`/ (root)`**.
5. Klik **Save**.
6. Tunggu 1–3 menit, lalu refresh halaman.
7. Akan muncul tautan:
   `https://[username-anda].github.io/spenlas-digital-journalist/`
8. Klik tautan tersebut — game sudah **ONLINE**! 🎉

### 🔗 Langkah 4 — Bagikan ke Murid
1. Copy tautan GitHub Pages.
2. Bagikan via Google Classroom, grup WhatsApp kelas, atau QR Code.
3. Buat QR Code gratis di <https://qr-code-generator.com> → tempel tautan → unduh QR → cetak & tempel di lab komputer.

### 🔄 Langkah 5 — Update Soal di Kemudian Hari
1. Buka file `script.js` di repository GitHub.
2. Klik ikon pensil ✏️ untuk mengedit.
3. Ubah bagian `GAME_DATA` atau `CONFIG`.
4. Scroll ke bawah → **Commit changes**.
5. Tunggu ±1 menit → refresh halaman game → perubahan muncul.

### 💡 Tips Tambahan
- Ingin domain sendiri (mis. `game.smpn19bekasi.sch.id`)? Beli domain murah → Settings → Pages → **Custom domain**.
- Simpan tautan di bookmark guru.
- Cetak QR Code dan tempel di setiap komputer lab agar siswa mudah mengakses.

---

## ♿ Aksesibilitas
- Semua tombol memiliki `aria-label`.
- Navigasi keyboard: **Tab** + **Enter**. Pada Level 3, gunakan **← / →** pada kartu skenario.
- Setiap gambar memiliki `alt` text.

---

## 🧰 Spesifikasi Teknis
- **Ukuran total:** < 1 MB (tanpa aset gambar berat)
- **Tanpa CDN eksternal** — semua aset lokal/inline
- **Tanpa backend / database / API** — murni front-end statis
- **Kompatibel:** Chrome, Firefox, Edge (versi terbaru)
- **Responsif:** HP (≤480px), tablet (768px), desktop (960px+)
- **Penyimpanan:** `localStorage` (nama, skor, badge, refleksi, leaderboard)

---

## 📄 Lisensi & Kredit

Dikembangkan untuk keperluan pembelajaran internal **SMP Negeri 19 Kota Bekasi**.
Materi bersumber dari Modul Ajar **K9P7 Ganjil — CMS/Blog dan Etika Publikasi**.

Bebas digunakan, dimodifikasi, dan dibagikan untuk keperluan pendidikan dengan mencantumkan sumber.

**Footer wajib:**
`LKPD Informatika Kelas 9 · CMS/Blog dan Etika Publikasi · © 2026 SMP Negeri 19 Kota Bekasi`