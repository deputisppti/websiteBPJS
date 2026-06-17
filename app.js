// BPJS Kesehatan Portal - app.js (SPA Expanded Logic)

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initMobileDrawer();
    initAccordions();
    initChatbot();
    
    // Default simulator calculations on load
    runPageCalculation();
    runRehabSimulation();
    queryKamarInap();
});

// 1. SPA Navigation Router
function navigateTo(viewId) {
    const panels = document.querySelectorAll('.view-panel');
    panels.forEach(panel => {
        panel.classList.remove('active');
    });

    const targetPanel = document.getElementById(`view-${viewId}`);
    if (targetPanel) {
        targetPanel.classList.add('active');
        window.scrollTo(0, 0);
    }

    // Desktop navbar active state
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        if (item.getAttribute('data-view') === viewId) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });

    // Mobile drawer active state
    const drawerItems = document.querySelectorAll('.drawer-item');
    drawerItems.forEach(item => {
        if (item.getAttribute('data-view') === viewId) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });

    // Set URL Hash
    history.pushState(null, null, `#${viewId}`);
}

function initNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const viewId = item.getAttribute('data-view');
            navigateTo(viewId);
        });
    });

    const currentHash = window.location.hash.substring(1);
    const validViews = ['beranda', 'status', 'kalkulator', 'kamar', 'program', 'portal'];
    if (validViews.includes(currentHash)) {
        navigateTo(currentHash);
    } else {
        navigateTo('beranda');
    }

    window.addEventListener('hashchange', () => {
        const hash = window.location.hash.substring(1);
        if (validViews.includes(hash)) {
            navigateTo(hash);
        }
    });
}

// 2. Mobile Drawer
function initMobileDrawer() {
    const toggleBtn = document.getElementById('menu-toggle');
    const drawer = document.getElementById('drawer');
    const overlay = document.getElementById('drawer-overlay');
    const closeBtn = document.getElementById('drawer-close');
    const drawerLinks = document.querySelectorAll('.drawer-item');

    function openDrawer() {
        drawer.classList.add('active');
        overlay.classList.add('active');
    }

    function closeDrawer() {
        drawer.classList.remove('active');
        overlay.classList.remove('active');
    }

    if (toggleBtn) toggleBtn.addEventListener('click', openDrawer);
    if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
    if (overlay) overlay.addEventListener('click', closeDrawer);

    drawerLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const viewId = link.getAttribute('data-view');
            closeDrawer();
            navigateTo(viewId);
        });
    });
}

// 3. Info Accordions
function initAccordions() {
    const accordionTitles = document.querySelectorAll('.info-accordion-title');
    accordionTitles.forEach(title => {
        title.addEventListener('click', () => {
            const item = title.parentElement;
            const isActive = item.classList.contains('active');
            if (isActive) {
                item.classList.remove('active');
            } else {
                item.classList.add('active');
            }
        });
    });
}

// 4. Hero Search Routing
function handleHeroSearch() {
    const query = document.getElementById('hero-search').value.trim().toLowerCase();
    if (!query) return;

    if (query.includes('iuran') || query.includes('hitung') || query.includes('tagihan') || query.includes('tarif')) {
        navigateTo('kalkulator');
    } else if (query.includes('aktif') || query.includes('status') || query.includes('nik') || query.includes('cek')) {
        navigateTo('status');
    } else if (query.includes('kamar') || query.includes('inap') || query.includes('bed') || query.includes('tidur')) {
        navigateTo('kamar');
    } else if (query.includes('rehab') || query.includes('cicil') || query.includes('tunggak') || query.includes('angsur')) {
        navigateTo('program');
    } else {
        navigateTo('informasi');
    }
}

// 5. Cek Status Kepesertaan
function handleStatusSearch(event) {
    event.preventDefault();
    const nik = document.getElementById('status-nik').value.trim();
    const resultContainer = document.getElementById('status-page-result');
    const submitBtn = event.target.querySelector('button[type="submit"]');

    if (nik.length < 10) {
        alert('Mohon masukkan NIK atau No. BPJS yang valid (minimal 10 digit).');
        return;
    }

    submitBtn.disabled = true;
    submitBtn.innerText = 'Menghubungkan Server...';
    resultContainer.classList.add('hidden');

    setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerText = 'Periksa Kepesertaan';

        let name = "Siti Aminah";
        let status = "Aktif";
        let type = "Pekerja Bukan Penerima Upah (Mandiri)";
        let careClass = "Kelas 2 (Dua)";
        let faskes = "Puskesmas Rawasari";
        let arrears = "Rp0,- (Lunas)";

        const lastDigit = parseInt(nik.charAt(nik.length - 1)) || 0;

        if (lastDigit % 3 === 0) {
            name = "Ahmad Hidayat";
            type = "Pekerja Penerima Upah (PPU - Swasta)";
            careClass = "Kelas 1 (Satu)";
            faskes = "Klinik Pratama Cempaka Sehat";
        } else if (lastDigit % 3 === 1) {
            name = "Rahmat Hermansyah";
            status = "Non-Aktif (Menunggak)";
            careClass = "Kelas 3 (Tiga)";
            faskes = "Klinik Pratama Medika";
            arrears = "Rp140.000,- (Tunggakan 4 Bulan)";
        }

        document.getElementById('p-res-name').innerText = name;
        document.getElementById('p-res-id').innerText = `NIK / No. Kartu KIS: ${nik}`;
        
        const badge = document.getElementById('p-res-badge');
        badge.innerText = status;
        
        if (status.includes('Non-Aktif')) {
            badge.className = 'badge-status danger';
            document.getElementById('p-res-arrears').className = 'text-red';
        } else {
            badge.className = 'badge-status success';
            document.getElementById('p-res-arrears').className = 'text-green';
        }

        document.getElementById('p-res-type').innerText = type;
        document.getElementById('p-res-class').innerText = careClass;
        document.getElementById('p-res-faskes').innerText = faskes;
        document.getElementById('p-res-arrears').innerText = arrears;

        resultContainer.classList.remove('hidden');
    }, 500);
}

// 6. Kalkulator Iuran
function toggleCalculatorMode() {
    const mode = document.querySelector('input[name="calc-mode"]:checked').value;
    const mandiriInputs = document.getElementById('section-mandiri-inputs');
    const ppuInputs = document.getElementById('section-ppu-inputs');
    
    const rowClass = document.getElementById('sum-row-class');
    const rowMembers = document.getElementById('sum-row-members');
    const rowEmployer = document.getElementById('sum-row-employer');
    const rowEmployee = document.getElementById('sum-row-employee');

    if (mode === 'mandiri') {
        mandiriInputs.classList.remove('hidden');
        ppuInputs.classList.add('hidden');
        rowClass.classList.remove('hidden');
        rowMembers.classList.remove('hidden');
        rowEmployer.classList.add('hidden');
        rowEmployee.classList.add('hidden');
    } else {
        mandiriInputs.classList.add('hidden');
        ppuInputs.classList.remove('hidden');
        rowClass.classList.add('hidden');
        rowMembers.classList.add('hidden');
        rowEmployer.classList.remove('hidden');
        rowEmployee.classList.remove('hidden');
    }
    runPageCalculation();
}

function runPageCalculation() {
    const mode = document.querySelector('input[name="calc-mode"]:checked').value;
    const formatRp = (value) => 'Rp ' + Math.round(value).toLocaleString('id-ID');

    if (mode === 'mandiri') {
        const careClass = parseInt(document.getElementById('page-calc-class').value);
        const members = parseInt(document.getElementById('page-calc-members').value) || 1;
        
        let rate = 0;
        let classLabel = "Kelas 1";
        
        if (careClass === 1) rate = 150000;
        else if (careClass === 2) rate = 100000;
        else {
            rate = 35000;
            classLabel = "Kelas 3 (Subsidi)";
        }
        
        const total = rate * members;
        
        document.getElementById('page-calc-total').innerText = formatRp(total);
        document.getElementById('calc-tag-label').innerText = 'ESTIMASI TOTAL BULANAN';
        document.getElementById('sum-type').innerText = 'Mandiri (PBPU)';
        document.getElementById('sum-class').innerText = classLabel;
        document.getElementById('sum-members').innerText = `${members} Orang`;
    } else {
        const salary = parseFloat(document.getElementById('page-calc-salary').value) || 0;
        let baseSalary = Math.min(Math.max(salary, 2000000), 12000000);
        
        const employerPortion = baseSalary * 0.04;
        const employeePortion = baseSalary * 0.01;

        document.getElementById('page-calc-total').innerText = formatRp(employeePortion);
        document.getElementById('calc-tag-label').innerText = 'DIPOTONG DARI GAJI ANDA (1%)';
        
        document.getElementById('sum-type').innerText = 'Karyawan Swasta/BUMN (PPU)';
        document.getElementById('sum-employer').innerText = formatRp(employerPortion);
        document.getElementById('sum-employee').innerText = formatRp(employeePortion);
    }
}

// 7. Kamar Inap (Inpatient Bed Availability)
function queryKamarInap() {
    const city = document.getElementById('kamar-city-select').value;
    const filterClass = document.getElementById('kamar-class-select').value;
    const container = document.getElementById('hospital-beds-list');
    
    container.innerHTML = '<div style="text-align:center; padding: 24px;">Memperbarui ketersediaan kamar...</div>';

    // Mock Hospital Data
    const hospitals = {
        jakarta: [
            { name: "RS Islam Jakarta Cempaka Putih", address: "Jl. Letjen Suprapto, Cempaka Putih, Jakarta Pusat", update: "10 menit lalu", beds: { vip: [3, 10], 1: [8, 25], 2: [14, 40], 3: [36, 100], icu: [0, 5] } },
            { name: "RSUD Cempaka Putih", address: "Jl. Rawasari Selatan No. 1, Jakarta Pusat", update: "5 menit lalu", beds: { vip: [1, 5], 1: [3, 15], 2: [8, 30], 3: [24, 60], icu: [1, 4] } },
            { name: "RS Saint Carolus Salemba", address: "Jl. Salemba Raya No. 41, Jakarta Pusat", update: "15 menit lalu", beds: { vip: [6, 12], 1: [18, 45], 2: [22, 50], 3: [12, 40], icu: [3, 8] } }
        ],
        surabaya: [
            { name: "RSUD Dr. Soetomo", address: "Jl. Mayjen Prof. Dr. Moestopo No. 6-8, Surabaya", update: "2 menit lalu", beds: { vip: [2, 20], 1: [12, 60], 2: [30, 120], 3: [85, 250], icu: [4, 15] } },
            { name: "RS Universitas Airlangga", address: "Kampus C UNAIR, Mulyorejo, Surabaya", update: "8 menit lalu", beds: { vip: [5, 10], 1: [14, 30], 2: [18, 40], 3: [20, 50], icu: [0, 6] } }
        ],
        bandung: [
            { name: "RSUP Dr. Hasan Sadikin", address: "Jl. Pasteur No. 38, Kota Bandung", update: "1 menit lalu", beds: { vip: [4, 25], 1: [16, 50], 2: [25, 80], 3: [64, 180], icu: [2, 10] } },
            { name: "RS Santo Borromeus", address: "Jl. Ir. H. Juanda No. 100, Bandung", update: "12 menit lalu", beds: { vip: [8, 15], 1: [20, 40], 2: [14, 50], 3: [8, 30], icu: [1, 5] } }
        ]
    };

    setTimeout(() => {
        const list = hospitals[city] || [];
        let html = '';

        if (list.length === 0) {
            container.innerHTML = '<div class="empty-state-notice"><p>Data wilayah tidak ditemukan.</p></div>';
            return;
        }

        list.forEach(hosp => {
            let bedsHtml = '';
            
            // Render specific classes
            const classesToRender = filterClass === 'all' ? ['vip', '1', '2', '3', 'icu'] : [filterClass];
            
            classesToRender.forEach(cls => {
                const [avail, total] = hosp.beds[cls] || [0, 0];
                const pct = total > 0 ? (avail / total) * 100 : 0;
                
                let label = cls.toUpperCase();
                if (cls === '1') label = 'Kelas I';
                if (cls === '2') label = 'Kelas II';
                if (cls === '3') label = 'Kelas III';
                
                let textClass = 'status-available';
                let fillClass = 'bg-available';
                
                if (avail === 0) {
                    textClass = 'status-full';
                    fillClass = 'bg-full';
                } else if (pct < 25) {
                    textClass = 'status-warning';
                    fillClass = 'bg-warning';
                }

                bedsHtml += `
                    <div class="bed-class-box">
                        <h5>${label}</h5>
                        <div class="bed-progress-track">
                            <div class="bed-progress-fill ${fillClass}" style="width: ${pct}%"></div>
                        </div>
                        <div class="bed-count-status ${textClass}">
                            ${avail === 0 ? 'Penuh' : avail + ' Bed'}
                        </div>
                        <span class="bed-fraction">Total: ${total}</span>
                    </div>
                `;
            });

            html += `
                <div class="hospital-bed-card">
                    <div class="hosp-header">
                        <div class="hosp-name-block">
                            <h4>${hosp.name}</h4>
                            <p><i class="material-icons-round">place</i> ${hosp.address}</p>
                        </div>
                        <span class="hosp-update-badge">${hosp.update}</span>
                    </div>
                    <div class="beds-grid">
                        ${bedsHtml}
                    </div>
                </div>
            `;
        });

        container.innerHTML = html;
    }, 400);
}

// 8. Program JKN & REHAB Calculator
function runRehabSimulation() {
    const arrears = parseFloat(document.getElementById('rehab-arrears').value) || 0;
    const period = parseInt(document.querySelector('input[name="rehab-period"]:checked').value);
    
    const formatRp = (value) => 'Rp ' + Math.round(value).toLocaleString('id-ID');

    if (arrears < 100000) {
        document.getElementById('rehab-monthly-val').innerText = 'Rp -';
        document.getElementById('rehab-total-val').innerText = formatRp(arrears);
        return;
    }

    const monthlyInstallment = arrears / period;

    document.getElementById('rehab-monthly-val').innerText = formatRp(monthlyInstallment);
    document.getElementById('rehab-total-val').innerText = formatRp(arrears);
}

function registerRehab() {
    const arrears = parseFloat(document.getElementById('rehab-arrears').value) || 0;
    const period = parseInt(document.querySelector('input[name="rehab-period"]:checked').value);
    const monthly = arrears / period;
    
    const formatRp = (value) => 'Rp ' + Math.round(value).toLocaleString('id-ID');

    if (arrears < 100000) {
        alert('Minimal tunggakan iuran untuk mendaftar Program REHAB adalah Rp100.000.');
        return;
    }

    alert(`Pendaftaran Program REHAB Berhasil!\n\nEstimasi cicilan Anda: ${formatRp(monthly)} / bulan selama ${period} bulan.\nStatus JKN Anda akan otomatis aktif kembali setelah seluruh cicilan lunas terbayarkan.`);
}

// 9. Portal SSO Login & Dashboard Simulator
function handlePortalLogin(event) {
    event.preventDefault();
    
    const input = document.getElementById('login-username').value.trim();
    const captcha = document.getElementById('login-captcha').value.trim().toUpperCase();

    if (captcha !== '8B9R') {
        alert('Kode verifikasi captcha salah. Harap ketik ulang kode verifikasi yang tertera.');
        return;
    }

    const loginCard = document.getElementById('portal-login-card');
    const dashboardCard = document.getElementById('portal-dashboard');

    // Simulate login transitions
    loginCard.classList.add('hidden');
    dashboardCard.classList.remove('hidden');

    // Update names on dashboard based on card details
    if (input.includes('3201') || input.includes('Siti')) {
        document.getElementById('dash-username').innerText = 'Siti Aminah';
        document.getElementById('dash-card-no').innerText = '0002983748291';
    } else {
        document.getElementById('dash-username').innerText = 'Budi Santoso';
        document.getElementById('dash-card-no').innerText = '0001234567890';
    }
}

function handlePortalLogout() {
    const loginCard = document.getElementById('portal-login-card');
    const dashboardCard = document.getElementById('portal-dashboard');

    dashboardCard.classList.add('hidden');
    loginCard.classList.remove('hidden');
    document.getElementById('login-captcha').value = '';
}

// 10. Chika Chatbot Logic
function toggleChikaChat() {
    const chatBox = document.getElementById('chika-chat-box');
    chatBox.classList.toggle('hidden');
}

function handleChikaKeyDown(event) {
    if (event.key === 'Enter') {
        sendChikaMessage();
    }
}

function sendChikaMessage() {
    const input = document.getElementById('chika-msg-input');
    const text = input.value.trim();
    if (!text) return;

    appendChikaMessage(text, 'bubble-user');
    input.value = '';

    setTimeout(() => {
        const response = generateChikaReply(text);
        appendChikaMessage(response, 'bubble-bot');
    }, 600);
}

function triggerQuickReply(topic) {
    let query = "";
    let reply = "";

    if (topic === 'iuran') {
        query = "Berapa iuran BPJS terbaru?";
        reply = `Iuran JKN Mandiri bulanan saat ini adalah:
        - **Kelas 1**: Rp150.000 / orang
        - **Kelas 2**: Rp100.000 / orang
        - **Kelas 3**: Rp35.000 / orang.
        \nAnda juga dapat mensimulasikan tunggakan dengan program cicilan cicil iuran **REHAB** di menu **Program BPJS**.`;
    } else if (topic === 'faskes') {
        query = "Bagaimana mencari faskes terdekat?";
        reply = `Untuk mencari Rumah Sakit terdaftar, silakan buka menu **Kamar Inap** untuk melihat status ketersediaan bed, atau gunakan menu **Cari Faskes** pada dashboard utama.`;
    } else if (topic === 'ktp') {
        query = "Apakah benar bisa berobat pakai KTP?";
        reply = `Benar sekali! Cukup tunjukkan KTP asli Anda pada petugas administrasi faskes tingkat I maupun Rumah Sakit rujukan. NIK Anda berfungsi sebagai identitas kepesertaan yang sah.`;
    }

    appendChikaMessage(query, 'bubble-user');
    
    setTimeout(() => {
        appendChikaMessage(reply, 'bubble-bot');
    }, 600);
}

function appendChikaMessage(text, className) {
    const history = document.getElementById('chika-chat-history');
    const opts = document.getElementById('chika-quick-opts');
    if (opts) opts.remove();

    const bubble = document.createElement('div');
    bubble.className = `msg ${className}`;
    bubble.innerHTML = text.replace(/\n/g, '<br>');
    history.appendChild(bubble);

    const newOpts = document.createElement('div');
    newOpts.className = 'chat-quick-opts';
    newOpts.id = 'chika-quick-opts';
    newOpts.innerHTML = `
        <button onclick="triggerQuickReply('iuran')">Info Tarif Iuran</button>
        <button onclick="triggerQuickReply('faskes')">Cari Faskes</button>
        <button onclick="triggerQuickReply('ktp')">Berobat Pakai KTP</button>
    `;
    history.appendChild(newOpts);
    history.scrollTop = history.scrollHeight;
}

function generateChikaReply(text) {
    const raw = text.toLowerCase();

    if (raw.includes('halo') || raw.includes('hai') || raw.includes('selamat')) {
        return "Halo! Ada yang bisa saya bantu terkait program jaminan kesehatan BPJS Kesehatan Anda hari ini?";
    }

    if (raw.includes('iuran') || raw.includes('tarif') || raw.includes('bayar') || raw.includes('tagihan')) {
        return "Iuran bulanan: Kelas 1 (150rb), Kelas 2 (100rb), Kelas 3 (35rb). Jika menunggak iuran, Anda bisa mendaftar program angsuran **REHAB** di portal ini.";
    }

    if (raw.includes('rehab') || raw.includes('cicil') || raw.includes('tunggak')) {
        return "Program REHAB (Rencana Pembayaran Bertahap) ditujukan bagi peserta PBPU/Mandiri dengan tunggakan 4-24 bulan. Anda dapat mensimulasikan cicilan pada menu **Program BPJS**.";
    }

    if (raw.includes('kamar') || raw.includes('inap') || raw.includes('ranjang') || raw.includes('bed')) {
        return "Untuk melihat ketersediaan kamar inap rumah sakit terdekat, silakan langsung kunjungi halaman **Kamar Inap** di menu navigasi atas.";
    }

    if (raw.includes('ktp') || raw.includes('nik') || raw.includes('kartu')) {
        return "Kini berobat cukup menggunakan KTP/NIK di semua faskes kerja sama BPJS, tanpa perlu berkas cetak fisik.";
    }

    if (raw.includes('terima kasih') || raw.includes('makasih') || raw.includes('suwun')) {
        return "Sama-sama! Semoga informasi ini bermanfaat. Jaga kesehatan selalu sekeluarga ya!";
    }

    return "Maaf, saya belum mengenali pertanyaan itu. Silakan gunakan kata kunci pencarian seperti 'iuran', 'rehab', 'kamar inap', atau 'ktp'.";
}
