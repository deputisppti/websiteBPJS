# websiteBPJS - Portal Layanan Digital BPJS Kesehatan (SPA Prototype)

Prototype portal web BPJS Kesehatan dengan arsitektur **Single Page Application (SPA)** yang interaktif, bersih, modern, dan mudah dipahami. 

## 🌟 Fitur Utama
1. **Dashboard Utama:** Dilengkapi tampilan kartu kepesertaan digital KIS (Kartu Indonesia Sehat) yang responsif dan interaktif.
2. **Cek Status Kepesertaan:** Fitur validasi keaktifan kartu BPJS Kesehatan berbasis NIK secara in-line pada halaman web.
3. **Kalkulator Iuran Mandiri & Swasta (PPU):** Simulasi perhitungan tarif iuran BPJS bulanan live sesuai regulasi kelas perawatan dan batas upah PPU se-Indonesia.
4. **Informasi Kamar Rawat Inap RS:** Cek ketersediaan tempat tidur kosong rumah sakit rujukan live per wilayah (DKI Jakarta, Surabaya, Bandung) dan kelas perawatan.
5. **Program BPJS & Simulator REHAB:** Simulator Rencana Pembayaran Bertahap (REHAB) untuk mencicil iuran tunggakan dengan opsi tenor cicilan (3, 6, dan 12 bulan).
6. **Portal JKN (Simulasi SSO & Dash):** Halaman simulasi log masuk portal layanan dengan Captcha verifikator dan personal dashboard peserta JKN.
7. **Virtual Assistant (Chika Chatbot):** Bot asisten virtual BPJS Kesehatan yang interaktif dan responsif di pojok kanan bawah.

## 🛠️ Teknologi yang Digunakan
- **HTML5:** Struktur layout semantik.
- **Vanilla CSS:** CSS custom variables, flexbox/grid layouting, glassmorphism, dan transisi SPA view panel.
- **Vanilla JavaScript:** SPA Routing, simulasi logic database status & faskes, kalkulator iuran, simulator REHAB, chatbot logic, dan toggle panel.
- **Google Fonts & Material Icons:** Font Outfit & Inter serta Material Icons Round untuk estetika premium.

---

## 📊 PRESENTASI WEBSITE BPJS (BARU!)

Repository ini sudah dilengkapi dengan **presentasi profesional** tentang website BPJS Kesehatan!

### 📁 File-File Presentasi

#### 1️⃣ **PRESENTASI_WEBSITE_BPJS.html** ⭐ (Recommended)
**Format Presentasi Interaktif** - Buka langsung di browser!

```bash
# Opsi 1: Buka file langsung
Klik PRESENTASI_WEBSITE_BPJS.html → Buka dengan browser

# Opsi 2: Download & buka lokal
Download file → Double-click → Terbuka di browser default

# Opsi 3: Push ke GitHub Pages (share online)
npx http-server -p 8080
Akses: http://localhost:8080/PRESENTASI_WEBSITE_BPJS.html
```

**✨ Fitur Presentasi:**
- 🎯 **14 Slide Lengkap** - Dari cover hingga closing
- ⌨️ **Keyboard Navigation** - Tekan arrow keys (← →) untuk navigasi
- 📱 **Responsive Design** - Berfungsi di desktop, tablet, mobile
- 🎨 **Design Profesional** - Warna BPJS resmi (#003DA5)
- 📊 **Progress Bar** - Real-time tracking slide progress
- 🚀 **No Dependencies** - Pure HTML/CSS/JavaScript

**📋 Isi 14 Slide:**
1. Cover - Judul & branding
2. Gambaran Umum - Apa & manfaat website
3. Dashboard KIS Digital - Kartu kesehatan digital
4. Cek Status Kepesertaan - Validasi NIK real-time
5. Kalkulator Iuran PPU - Simulasi tarif iuran
6. Cek Kamar RS - Ketersediaan tempat tidur
7. Simulator REHAB - Cicilan tunggakan iuran
8. Portal JKN & Login - Keamanan & dashboard
9. Virtual Assistant Chika - Chatbot 24/7
10. Teknologi & Keamanan - Stack & security features
11. Cara Akses Website - 4 langkah step-by-step
12. Keunggulan Website - Tabel perbandingan
13. Kesimpulan - Summary & call-to-action
14. Terima Kasih - Closing & contact info

---

#### 2️⃣ **PRESENTASI_WEBSITE_BPJS.md** 📝
**Format Dokumentasi Markdown** - Untuk editing manual

**Gunakan untuk:**
- Copy-paste ke PowerPoint
- Import ke Google Slides
- Edit di Canva
- Custom branding

```bash
# Copy konten markdown ke tool presentasi favorit Anda
1. Buka PRESENTASI_WEBSITE_BPJS.md
2. Copy semua konten
3. Paste ke PowerPoint/Google Slides/Canva
4. Tambahkan screenshot website BPJS
5. Sesuaikan design sesuai kebutuhan
```

---

#### 3️⃣ **PANDUAN_PRESENTASI.md** 🎓
**Panduan Lengkap Penggunaan** - Tips & trik presentasi

**Berisi:**
- 📖 Cara membuka presentasi
- ⌨️ Navigasi & shortcut
- 🎨 Design & styling details
- 💾 Export ke PDF/PowerPoint
- 📸 Screenshot recommendations
- 🎯 Tips presentasi yang baik
- ❓ FAQ lengkap

---

## 🎬 Cara Menggunakan Presentasi

### **Metode 1: Buka HTML di Browser (Termudah)**
```bash
# Clone repository
git clone https://github.com/deputisppti/websiteBPJS.git
cd websiteBPJS

# Buka presentasi langsung
Klik 2x pada: PRESENTASI_WEBSITE_BPJS.html
# Atau buka browser → drag-drop file ke browser

# Navigasi
← → Arrow keys untuk slide sebelum/sesudah
Atau klik tombol Sebelumnya/Selanjutnya
```

### **Metode 2: Jalankan dengan Server Lokal**
```bash
# Menggunakan Node.js
npx http-server -p 8080

# Atau Python 3
python -m http.server 8080

# Buka di browser
http://localhost:8080/PRESENTASI_WEBSITE_BPJS.html
```

### **Metode 3: Export ke PDF**
```bash
# Buka presentasi di browser
PRESENTASI_WEBSITE_BPJS.html

# Tekan: Ctrl+P (Windows) atau Cmd+P (Mac)
# Pilih: Save as PDF
# Selesai! File PDF siap untuk print/share
```

### **Metode 4: Convert ke PowerPoint**
```bash
# Opsi A: Dari HTML ke PDF
Ctrl+P → Save as PDF → Import ke PowerPoint

# Opsi B: Copy-paste dari Markdown
1. Buka PRESENTASI_WEBSITE_BPJS.md
2. Copy konten
3. Paste ke PowerPoint
4. Format & customize

# Opsi C: Gunakan Canva
1. Buat presentasi di Canva.com
2. Copy isi slide dari markdown
3. Download sebagai PowerPoint/PDF
```

---

## 🚀 Menjalankan Website BPJS Kesehatan

Untuk demo/test website BPJS asli:

```bash
# Clone repository (jika belum)
git clone https://github.com/deputisppti/websiteBPJS.git
cd websiteBPJS

# Opsi 1: Buka langsung di browser
# Double-click file: index.html
# Atau drag-drop ke browser favorit Anda

# Opsi 2: Jalankan dengan HTTP server
# Menggunakan Node.js
npx http-server -p 8080

# Atau menggunakan Python
# Python 3
python -m http.server 8080

# Atau menggunakan npm (jika sudah install)
npm install -g http-server
http-server -p 8080
```

Buka di browser: **http://localhost:8080**

---

## 📱 Fitur Website BPJS

### Dashboard & KIS Digital
- Tampilan Kartu Indonesia Sehat responsif
- Status kepesertaan real-time
- Akses cepat ke semua layanan

### Layanan Self-Service
- ✅ Cek Status Kepesertaan (via NIK)
- ✅ Simulasi Kalkulator Iuran
- ✅ Cek Ketersediaan Kamar RS
- ✅ Simulator REHAB (Cicilan)
- ✅ Portal JKN & Login
- ✅ Virtual Assistant Chika

### Keamanan & User Experience
- Captcha verifikator
- Personal dashboard
- Glassmorphism design
- SPA routing (cepat & smooth)
- Mobile-responsive

---

## 🎯 Quick Start

### Untuk Demo Presentasi:
```bash
# Terminal
npx http-server -p 8080

# Browser
http://localhost:8080/PRESENTASI_WEBSITE_BPJS.html
```

### Untuk Demo Website:
```bash
# Terminal  
npx http-server -p 8080

# Browser
http://localhost:8080
```

---

## 📂 Struktur Repository

```
websiteBPJS/
├── 📄 index.html                      # Website BPJS utama
├── 🎨 style.css                       # CSS styling
├── ⚙️ app.js                          # JavaScript logic
│
├── 📊 PRESENTASI_WEBSITE_BPJS.html   # ⭐ Presentasi Interaktif
├── 📝 PRESENTASI_WEBSITE_BPJS.md     # Dokumentasi Slide
├── 🎓 PANDUAN_PRESENTASI.md          # Panduan Lengkap
│
├── 📖 README.md                       # File ini
└── .gitignore
```

---

## 🎨 Design & Branding

### Warna BPJS Resmi
- 🔵 Primary Blue: `#003DA5`
- 🟢 Success Green: `#00A86B`
- 🟠 Accent Orange: `#FF6B35`
- 🔷 Light Blue: `#E8F1FF`

### Font
- **Heading:** Outfit (Bold & Premium)
- **Body:** Inter (Clean & Modern)
- **Icons:** Google Material Icons Round

---

## ⌨️ Keyboard Shortcuts

| Shortcut | Fungsi |
|----------|--------|
| `← Arrow Left` | Slide sebelumnya |
| `→ Arrow Right` | Slide berikutnya |
| `Ctrl/Cmd + P` | Print/Save as PDF |
| `F11` | Fullscreen mode |

---

## 📊 Keunggulan Presentasi HTML

✅ **Tidak perlu software mahal** - Gratis & buka di browser apa saja
✅ **Portable** - Bisa dibuka offline, bisa di-share online
✅ **Interaktif** - Navigasi smooth, progress tracking
✅ **Responsive** - Berfungsi di mobile, tablet, desktop
✅ **Professional** - Design premium dengan branding BPJS
✅ **Easy to Update** - Edit konten langsung di HTML/MD
✅ **Export Friendly** - Bisa convert ke PDF/PowerPoint/Canva

---

## 💡 Tips Presentasi

### Persiapan
- ✅ Test presentasi sebelum acara
- ✅ Download backup offline
- ✅ Siapkan website asli di tab terpisah
- ✅ Screenshot penting untuk reference

### Saat Presentasi
- ✅ Gunakan fullscreen mode (F11)
- ✅ Gunakan arrow keys untuk navigasi smooth
- ✅ Tunjukkan website live untuk demo
- ✅ Siap jawab pertanyaan peserta
- ✅ Invite peserta mencoba langsung

### Durasi
- **14 Slide = 15-20 menit**
- **Tiap slide = 1-2 menit**
- **Q&A = 5-10 menit**

---

## 🔗 Links Penting

- 📊 **Presentasi HTML:** [PRESENTASI_WEBSITE_BPJS.html](PRESENTASI_WEBSITE_BPJS.html)
- 📝 **Markdown Slides:** [PRESENTASI_WEBSITE_BPJS.md](PRESENTASI_WEBSITE_BPJS.md)
- 🎓 **Panduan Lengkap:** [PANDUAN_PRESENTASI.md](PANDUAN_PRESENTASI.md)
- 🌐 **Website BPJS:** [index.html](index.html)

---

## 📞 Support & Contact

Untuk pertanyaan/feedback:
- 📧 Email: deputi.sppti@bpjs-kesehatan.go.id
- ☎️ Telepon BPJS: 165 (24 Jam)
- 📱 WhatsApp PANDAWA: 0811-8165-165
- 💬 Chika Chatbot: Available 24/7 di website

---

## 📄 License

Semua file di repository ini adalah milik BPJS Kesehatan dan dilindungi oleh hukum. Penggunaan hanya untuk keperluan internal BPJS Kesehatan.

---

## ✨ Fitur Bonus

### 🎯 Call-to-Action Slide
- Slide kesimpulan dengan motivasi aksi
- Ajakan untuk mencoba website langsung
- Contact info untuk support

### 🎨 Customizable
- Edit HTML langsung untuk customize
- Change warna, font, icon sesuai kebutuhan
- Add/remove slide sesuai keperluan

### 📱 Mobile-Friendly
- Presentasi responsive di semua ukuran layar
- Tetap professional di mobile
- Zoom friendly di tablet

---

**Dibuat dengan ❤️ untuk Portal Layanan Digital BPJS Kesehatan**

*Presentasi + Website | 2026 | BPJS Kesehatan Digital Innovation*
