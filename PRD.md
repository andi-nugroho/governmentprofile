# PRD — Project Requirements Document (Frontend-Only / SvelteKit)

## 1. Overview

Desa Pajawanlor adalah salah satu desa yang terletak di Kecamatan Ciawigebang, Kabupaten Kuningan, Provinsi Jawa Barat. Saat ini, informasi mengenai profil desa, sejarah terbentuknya desa, struktur pemerintahan (daftar kuwu/kepala desa dari masa ke masa), data wilayah, layanan administrasi, potensi BUMDes, hingga berita terbaru masih belum terintegrasi dengan optimal secara digital bagi warga maupun masyarakat luas.

Aplikasi web ini dibuat sebagai media branding digital, situs portal informasi resmi, dan pusat pelayanan Pemerintahan Desa Pajawanlor berbasis frontend murni (*frontend-only*). Tujuan utamanya adalah:

- Memberikan pengenalan identitas, sejarah, dan nilai kultural Desa Pajawanlor yang menarik dan spesifik secara visual.
- Menyajikan informasi lengkap mengenai profil wilayah, data kependudukan, struktur pemerintahan, dan layanan publik secara cepat dan mudah dipahami, khususnya melalui perangkat mobile.
- Meningkatkan transparansi dan kepercayaan masyarakat melalui galeri foto, peta wilayah, direktori BUMDes, serta kabar berita terbaru.
- Membangun kesan pertama yang kuat dengan estetika desain modern bernuansa hijau dan cream (mengadopsi design system getdesign gaya Claude) yang selaras dengan identitas visual desa.

## 2. Requirements

- **Frontend-Only**: Berbasis antarmuka statis/klien interaktif murni tanpa backend database atau sistem autentikasi server. Seluruh data (berita, statistik, daftar kuwu, galeri) dikelola dalam bentuk *mock data* atau *static state*.
- **Tech Stack**: Dibangun menggunakan **SvelteKit** untuk routing dan struktur komponen, **Tailwind CSS** untuk perancangan gaya/styling, serta **Framer Motion / Svelte Transitions** untuk animasi transisi halaman dan elemen antarmuka yang halus.
- **Mobile-first & Responsif**: Tampilan website diutamakan untuk layar HP, namun tetap sangat nyaman, estetis, dan adaptif saat dibuka di laptop/desktop.
- **Performa Cepat & Ringan**: Halaman dimuat dengan instan tanpa ketergantungan pada *database query* eksternal.
- **Navigasi Sederhana**: Pengunjung bisa mencapai informasi penting dalam 1–2 tap atau klik, dengan struktur menu: **Beranda**, **Profil Desa**, **Data Desa**, **Berita Desa**, dan **BUMDes**.

## 3. Core Features & Navigation Structure

### 1. Beranda
- **Sapaan Pembuka & Hero Section** — Menampilkan nama desa, logo resmi, foto kantor/suasana desa, dan pesan sambutan selamat datang dengan transisi animasi elegan.
- **Statistik & Infografis Cepat** — Ringkasan data penting seperti jumlah penduduk (3.420 jiwa), kepala keluarga (1.150 KK), 4 Dusun, dan status kemandirian desa.
- **Ringkasan Berita & Potensi** — Cuplikan berita terbaru dan akses cepat ke profil desa.

### 2. Profil Desa
- **Sejarah Terbentuknya Desa** — Narasi sejarah pemekaran wilayah dari Desa Ciputat (kisah Ki Lebe dan adu kerbau yang melegenda pada tahun 1906).
- **Arsip Daftar Kuwu (Kepala Desa)** — Daftar kronologis pemimpin Desa Pajawanlor dari masa ke masa (mulai dari Kuwu Bewu tahun 1906 hingga Maman Suratman).
- **Letak Geografis & Batas Wilayah** — Informasi dataran rendah, luas wilayah 35,519 hektar, serta rincian batas wilayah utara, selatan, timur, dan barat.

### 3. Data Desa
- **Pembagian Dusun & RT/RW** — Rincian administratif wilayah yang mencakup 4 Dusun, 4 RW, dan 10 RT.
- **Peta Wilayah & Infografis Wilayah** — Visualisasi tata letak wilayah administratif desa.

### 4. Berita Desa
- **Daftar Berita & Filter Kategori** — Menampilkan kabar kegiatan warga, program BLT, atau kerja bakti dengan sistem filter interaktif (Semua, Pemerintahan, Ekonomi, Sosial) menggunakan state reaktif Svelte.
- **Detail Artikel Berita** — Halaman baca berita interaktif secara penuh.

### 5. BUMDes (Badan Usaha Milik Desa)
- **Direktori Unit Usaha** — Menampilkan informasi program ekonomi, unit usaha lokal, dan produk unggulan warga untuk menggerakkan perekonomian desa.

## 4. User Flow

1. **Pengunjung membuka website** melalui HP atau browser desktop, lalu langsung mendarat di halaman **Beranda** dengan animasi sambutan yang halus.
2. Pengunjung melihat **sapaan pembuka**, logo desa, dan statistik cepat penduduk.
3. Pengunjung mengeklik menu **Profil Desa** di navigasi atas untuk menyelami sejarah terbentuknya desa tahun 1906 serta membaca daftar riwayat kepemimpinan Kuwu.
4. Pengunjung beralih ke menu **Data Desa** untuk memeriksa informasi geografis, batas wilayah, serta pembagian dusun.
5. Pengunjung membuka menu **Berita Desa** untuk membaca informasi kegiatan terbaru, dengan opsi menyaring topik berdasarkan kategori.
6. Pengunjung mengeklik menu **BUMDes** untuk melihat informasi unit usaha ekonomi dan potensi lokal desa.
7. Pengunjung menutup website dengan pengalaman visual yang berkesan, cepat, dan informatif mengenai Pemerintahan Desa Pajawanlor.

## 5. Architecture & Tech Stack Details

- **Framework**: SvelteKit (Static Site Generation / SPA mode)
- **Styling**: Tailwind CSS (Utility-first CSS framework dengan palet warna kustom hijau tua `#1B4D3E`, hijau segar `#4E9F3D`, dan background cream `#FDFBF7`)
- **Animasi & Interaksi**: Framer Motion (atau Svelte Transition / Motion primitives) untuk efek *fade-in*, *slide*, dan transisi halus ala design system Claude.
- **Manajemen Data**: *Mock data arrays* lokal dalam Svelte stores / TypeScript files untuk menyuplai komponen berita, riwayat kuwu, dan statistik desa secara instan.
- **Deployment**: Vercel / Netlify (Deployment statis murni yang sangat cepat dan tanpa biaya server backend).