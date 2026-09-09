export interface Kuwu {
    id: number;
    name: string;
    period: string;
}

export interface Berita {
    id: number;
    title: string;
    date: string;
    category: 'Pemerintahan' | 'Ekonomi' | 'Sosial';
    excerpt: string;
    content: string;
    image: string;
}

export const sejarahDesa = `
Sebelum menjadi desa, Kampung Pajawanlor tadinya adalah suatu wilayah bagian atau dengan kata lain dalam bahasa sunda adalah cantilan di bawah wilayah pemerintahan desa Ciputat, yang mana pada waktu itu dipimpin oleh seorang Lebe dan setiap tahunnya harus menyerahkan upeti pancen kepada Kuwu Ciputat yang mana pada waktu itu sangat membebankan masyarakat kampung Pajawanlor.

Ki Lebe memberanikan diri bicara kepada Kuwu Ciputat untuk meminta pemekaran desa tetapi tidak diijinkan. Ki Lebe tidak putus asa berkali-kali memohon untuk pemekaran, dan akhirnya Kuwu Ciputat mengabulkan permohonan tersebut dengan syarat harus melakukan adu munding (kerbau), jika kerbau Ciputat kalah maka Pajawanlor boleh memisahkan diri dari desa Ciputat, dan sebaliknya jika kerbau Pajawanlor yang kalah maka tidak boleh memisahkan diri dari desa Ciputat.

Syarat itu akhirnya disanggupi oleh Ki Lebe, terjadilah pertarungan adu kerbau antara Ciputat dan pajawanlor, menurut cerita sesepuh desa konon adu kerbau berlangsung selama 4 hari dan sangat meriah, kerbau keduanya sama kuat dan ditonton oleh masyarakat Ciputat dan Pajawanlor bahkan tak luput dari tontonan warga sekitarnya. Singkat cerita kerbau Ciputat kalah dan akhirnya Pajawanlor direstui untuk mekar menjadi sebuah desa yang kejadian tersebut diperkirakan tahun 1906.
`;

export const daftarKuwu: Kuwu[] = [
    { id: 1, name: 'Bewu', period: '1906 - 1908' },
    { id: 2, name: 'Periot', period: '1908 - 1909' },
    { id: 3, name: 'H. Abdul Gani', period: '1909 - 1924' },
    { id: 4, name: 'H. Moehamad Amin', period: '1924 - 1944' },
    { id: 5, name: 'Sudjana Disastra', period: '1944 - 1950' },
    { id: 6, name: 'H. Nur Achmad Amin', period: '1950 - 1970' },
    { id: 7, name: 'Tohar Arifin', period: '1970 - 1979' },
    { id: 8, name: 'E. Umar', period: '1979 - 1980' },
    { id: 9, name: 'Ikin Sodikin', period: '1980 - 1988' },
    { id: 10, name: 'Bambang Adela Padang', period: '1988 - 1989' },
    { id: 11, name: 'Lukmanul Hakim', period: '1989 - 1998' },
    { id: 12, name: 'Hilmansyah', period: '1998 - 2000' },
    { id: 13, name: 'Eti Suhaeti', period: '2000 - 2008' },
    { id: 14, name: 'Nana Dulhana', period: '2008 - 2014' },
    { id: 15, name: 'Jajuli', period: '2014 - 2014' },
    { id: 16, name: 'Ade Bunyamin, SE. Msi', period: '2014 - 2015' },
    { id: 17, name: 'Yaser Munawar, S.Ag', period: '2015 - 2021' },
    { id: 18, name: 'Maman Suratman', period: '2022 - 2029' }
];

export const daftarBerita: Berita[] = [
    {
        id: 1,
        title: 'Penyaluran BLT Dana Desa Tahap 2 Berjalan Lancar',
        date: '05 September 2026',
        category: 'Pemerintahan',
        excerpt: 'Pemerintah Desa Pajawanlor telah sukses menyalurkan BLT Dana Desa kepada masyarakat yang berhak.',
        content: 'Pemerintah Desa Pajawanlor sukses melaksanakan program BLT. Bantuan ini diharapkan mampu menggerakkan roda ekonomi...',
        image: 'https://images.unsplash.com/photo-1593113565294-b1f496735eeb?w=500&q=80'
    },
    {
        id: 2,
        title: 'Kerja Bakti Warga Membersihkan Saluran Air',
        date: '01 September 2026',
        category: 'Sosial',
        excerpt: 'Menjelang musim penghujan, warga Desa Pajawanlor bergotong-royong membersihkan lingkungan.',
        content: 'Dalam rangka mencegah banjir...',
        image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=500&q=80'
    },
    {
        id: 3,
        title: 'BUMDes Maju Bersama Siapkan Produk Unggulan Baru',
        date: '28 Agustus 2026',
        category: 'Ekonomi',
        excerpt: 'BUMDes Desa Pajawanlor berencana meluncurkan produk kerajinan tangan hasil karya warga setempat.',
        content: 'Produk unggulan ini diharapkan mampu meningkatkan pendapatan desa...',
        image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=500&q=80'
    }
];

export const dataWilayah = {
    luas: '35.519 Hektar',
    topografi: 'Dataran Rendah',
    batas: {
        utara: 'Ciputat, Kec. Ciawigebang',
        selatan: 'Sindang, Kec. Lebakwangi',
        timur: 'Lebaksiuh, Kec. Ciawigebang',
        barat: 'Sidaraja, Kec. Ciawigebang'
    },
    administrasi: {
        dusun: 4,
        rw: 4,
        rt: 10
    },
    penduduk: {
        jiwa: 3420,
        kk: 1150
    }
};
