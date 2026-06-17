# 🚀 Panduan Deployment - Website BPJS Kesehatan

## 📋 Opsi Deployment

### 1️⃣ **Deployment Lokal (Development)**

#### Metode A: Buka Langsung di Browser
```bash
# Clone repository
git clone https://github.com/deputisppti/websiteBPJS.git
cd websiteBPJS

# Buka file index.html
# Windows: Double-click index.html
# Mac: Right-click → Open with → Browser
# Linux: xdg-open index.html
```

#### Metode B: HTTP Server (Recommended untuk Development)
```bash
# Menggunakan Node.js (http-server)
npx http-server -p 8080

# Atau menggunakan Python
# Python 3
python -m http.server 8080

# Akses di browser
http://localhost:8080
```

---

### 2️⃣ **Deployment ke GitHub Pages (Free & Public)**

#### Step 1: Pastikan Repository di GitHub
```bash
# Repository sudah ada: deputisppti/websiteBPJS
# Klik Settings → Pages
```

#### Step 2: Konfigurasi GitHub Pages
1. Pergi ke: **Settings** → **Pages**
2. Pilih **Source**: Branch `main`, folder `/ (root)`
3. Klik **Save**

#### Step 3: Tunggu Build Selesai
- GitHub akan otomatis build
- Akses: `https://deputisppti.github.io/websiteBPJS/`
- Presentasi: `https://deputisppti.github.io/websiteBPJS/PROJECT_PRESENTATION.html`

---

### 3️⃣ **Deployment ke Vercel (Super Fast)**

#### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

#### Step 2: Login ke Vercel
```bash
vercel login
```

#### Step 3: Deploy
```bash
cd websiteBPJS
vercel
```

#### Step 4: Akses Website
- URL akan diberikan oleh Vercel (misal: `https://website-bpjs.vercel.app`)
- Presentasi: `https://website-bpjs.vercel.app/PROJECT_PRESENTATION.html`

---

### 4️⃣ **Deployment ke Netlify (Alternative)**

#### Step 1: Push ke GitHub
```bash
git add .
git commit -m "Prepare for Netlify deployment"
git push origin main
```

#### Step 2: Hubungkan ke Netlify
1. Kunjungi: [app.netlify.com](https://app.netlify.com)
2. Login dengan GitHub
3. Klik **New site from Git**
4. Pilih repository `websiteBPJS`
5. Build settings: Leave default (tidak perlu build script untuk static site)
6. Klik **Deploy**

#### Step 3: Akses Website
- URL: `https://your-site-name.netlify.app`
- Presentasi: `https://your-site-name.netlify.app/PROJECT_PRESENTATION.html`

---

### 5️⃣ **Deployment ke Hosting Komersial**

#### Option A: Menggunakan cPanel (Shared Hosting)
```bash
# 1. Hubungi provider hosting, minta FTP/SFTP credentials
# 2. Download FileZilla atau WinSCP
# 3. Connect ke server dengan credentials
# 4. Upload semua file ke folder public_html/
# 5. Akses: https://yourdomain.com
```

#### Option B: Menggunakan Cloud (AWS, Google Cloud, Azure)
```bash
# AWS S3 + CloudFront
# 1. Upload files ke S3 bucket
# 2. Configure bucket sebagai static website
# 3. Setup CloudFront distribution
# 4. Akses via CloudFront URL

# Google Cloud Storage
# 1. Create bucket
# 2. Upload files
# 3. Make public
# 4. Enable static website hosting
```

---

## 📊 Comparison Deployment Options

| Platform | Cost | Setup | Speed | Analytics | HTTPS |
|----------|------|-------|-------|-----------|-------|
| **Local** | Free | 1 min | Fast | ❌ | ❌ |
| **GitHub Pages** | Free | 5 min | Fast | Limited | ✅ |
| **Vercel** | Free tier | 3 min | ⚡⚡⚡ Fastest | ✅ | ✅ |
| **Netlify** | Free tier | 5 min | ⚡⚡ Fast | ✅ | ✅ |
| **Shared Hosting** | $5-15/mo | 30 min | Moderate | Depends | ✅ |
| **AWS/GCP/Azure** | Pay-as-go | 15+ min | Fast | ✅ | ✅ |

---

## 🎯 Recommended Deployment Strategy

### For Development/Testing:
```bash
npx http-server -p 8080
# Akses: http://localhost:8080
```

### For Quick Public Demo:
```bash
# Option 1: GitHub Pages (Instant & Free)
# Just push ke main branch, GitHub Pages otomatis deploy

# Option 2: Vercel (Fastest Performance)
vercel
```

### For Production (Scalable):
```bash
# AWS S3 + CloudFront
# atau
# Google Cloud Storage
# atau
# Azure Static Web Apps
```

---

## ✅ Pre-Deployment Checklist

- [ ] Semua file HTML, CSS, JS ada di repository
- [ ] `index.html` ada di root folder
- [ ] `PROJECT_PRESENTATION.html` tersedia
- [ ] Links relatif digunakan (bukan absolute paths)
- [ ] Semua images/assets terupload
- [ ] Test semua fitur locally dulu
- [ ] Check console untuk errors (F12 → Console)

---

## 🔍 Testing & Quality Assurance

### Local Testing
```bash
# 1. Run local server
npx http-server -p 8080

# 2. Test di berbagai browser
# Chrome, Firefox, Safari, Edge

# 3. Test responsive design
# Desktop (1920x1080), Tablet (768x1024), Mobile (375x667)

# 4. Check console untuk errors
# Press F12 → Console tab
```

### Online Testing
```bash
# Setelah deploy ke production
# Test dengan tools:
# - Google PageSpeed Insights
# - GTmetrix
# - WebPageTest
```

---

## 📈 Post-Deployment

### Setup Analytics
```bash
# Tambahkan Google Analytics (opsional)
# Edit index.html, tambahkan sebelum </head>:
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

### Monitor Performance
- Vercel: Built-in analytics
- Netlify: Built-in analytics
- GitHub Pages: Use Google Analytics
- Custom hosting: Use CloudFlare

---

## 🆘 Troubleshooting

### Issue: "Cannot find module" error
**Solusi:** Pastikan path relatif benar
```bash
# ❌ Salah: /assets/style.css
# ✅ Benar: ./assets/style.css atau assets/style.css
```

### Issue: Website blank/tidak muncul
**Solusi:**
1. Check console (F12)
2. Verify semua file terupload
3. Clear browser cache (Ctrl+Shift+Del)
4. Retry deploy

### Issue: Presentasi tidak bisa di-akses
**Solusi:**
- Pastikan `PROJECT_PRESENTATION.html` di root folder
- Akses: `https://domain.com/PROJECT_PRESENTATION.html`

---

## 📚 Referensi

- [GitHub Pages Docs](https://docs.github.com/en/pages)
- [Vercel Deployment](https://vercel.com/docs)
- [Netlify Deploy](https://docs.netlify.com/)
- [AWS S3 Static Website](https://docs.aws.amazon.com/AmazonS3/latest/userguide/WebsiteHosting.html)

---

**Deployment Successful! 🎉**

*Next step: Share link ke stakeholders & gather feedback*
