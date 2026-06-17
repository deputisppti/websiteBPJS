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

## 🚀 Menjalankan Project Secara Lokal
Anda dapat langsung membuka file `index.html` pada browser Anda, atau menjalankannya menggunakan server HTTP lokal (misal: Python atau Node.js):

**Menggunakan Node.js:**
```bash
npx http-server -p 8080
```
Buka alamat **[http://localhost:8080](http://localhost:8080)** di browser Anda.
