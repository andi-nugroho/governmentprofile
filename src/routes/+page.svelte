<script lang="ts">
    import { fly, fade } from 'svelte/transition';
    import { dataWilayah, daftarBerita } from '$lib/data/mock';
    import { onMount } from 'svelte';
    import { tweened } from 'svelte/motion';
    import { cubicOut } from 'svelte/easing';

    const latestNews = daftarBerita.slice(0, 3);
    
    let hariIni = $state('Memuat...');

    const countPenduduk = tweened(0, { duration: 2500, easing: cubicOut });
    const countLuas = tweened(0, { duration: 2500, easing: cubicOut });
    const countDusun = tweened(0, { duration: 2500, easing: cubicOut });

    onMount(() => {
        hariIni = new Date().toLocaleDateString('id-ID', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: '2-digit'
        });
    });

    function viewport(element: HTMLElement) {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                countPenduduk.set(3420);
                countLuas.set(35.519);
                countDusun.set(4);
            } else {
                countPenduduk.set(0, {duration: 0});
                countLuas.set(0, {duration: 0});
                countDusun.set(0, {duration: 0});
            }
        }, { threshold: 0.1 });
        
        observer.observe(element);
        return {
            destroy() {
                observer.disconnect();
            }
        };
    }
</script>

<!-- Hero Section -->
<section class="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden">
    <!-- Full Background Image -->
    <div class="absolute inset-0 z-0">
        <img 
            src="/assets/desa-pajawanlor.png" 
            alt="Suasana Desa Pajawanlor" 
            class="w-full h-full object-cover"
            onerror={(e) => { e.currentTarget.src='https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?w=1600&q=80'; e.currentTarget.onerror=null; }}
        />
        <!-- Dark Overlay for Readability -->
        <div class="absolute inset-0 bg-surface-dark/75 backdrop-blur-[2px]"></div>
    </div>

    <!-- Content -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-20 pb-64 md:pb-40">
        <div class="max-w-4xl text-center mx-auto" in:fly={{y: 50, duration: 1000, delay: 100}}>
            <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-pill bg-canvas/10 text-on-dark border border-on-dark/20 text-xs md:text-sm font-medium mb-6 md:mb-8 backdrop-blur-md mx-auto">
                <span class="w-2.5 h-2.5 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(78,159,61,0.8)]"></span>
                Portal Informasi Resmi
            </div>
            
            <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display text-on-dark leading-[1.1] tracking-tight mb-3 md:mb-4">
                Selamat Datang di Website Resmi Desa <span class="text-primary-disabled">Pajawanlor</span>
            </h1>
            
            <p class="text-lg sm:text-2xl text-primary font-medium font-body mb-6 md:mb-8">
                Kecamatan Ciawigebang, Kabupaten Kuningan
            </p>
            
            <p class="text-base sm:text-xl md:text-2xl text-on-dark-soft font-body leading-relaxed mb-8 md:mb-12 mx-auto max-w-2xl px-2">
                Menyajikan transparansi, sejarah budaya, dan pelayanan publik secara digital untuk kesejahteraan warga dan kemajuan bersama.
            </p>
            
            <div class="flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-[280px] sm:max-w-none mx-auto">
                <a href="/profil-desa" class="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-md bg-primary text-on-primary font-medium text-base md:text-lg transition-all hover:bg-primary-active hover:scale-105 focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:outline-none shadow-lg">
                    Jelajahi Sejarah
                </a>
                <a href="/data-desa" class="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-md bg-transparent text-on-dark border border-on-dark/30 font-medium text-base md:text-lg transition-all hover:bg-on-dark/20 hover:border-on-dark/50 focus:ring-2 focus:ring-offset-2 focus:ring-on-dark focus:outline-none backdrop-blur-sm">
                    Data Penduduk
                </a>
            </div>
        </div>
    </div>

    <!-- Quick Stats Bar at Bottom -->
    <div use:viewport class="absolute bottom-0 left-0 w-full z-10 bg-gradient-to-t from-surface-dark via-surface-dark/80 to-transparent pt-32 pb-8 pointer-events-none">
        <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pointer-events-auto">
            <div class="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-12 border-t border-on-dark/20 pt-8" in:fade={{duration: 1200, delay: 500}}>
                <div class="text-center">
                    <p class="text-on-dark-soft text-sm font-medium mb-1 uppercase tracking-widest">Penduduk</p>
                    <p class="text-3xl md:text-4xl font-display text-on-dark tracking-tight">{Math.floor($countPenduduk).toLocaleString('id-ID')}</p>
                </div>
                <div class="text-center">
                    <p class="text-on-dark-soft text-sm font-medium mb-1 uppercase tracking-widest">Luas Wilayah</p>
                    <p class="text-3xl md:text-4xl font-display text-on-dark tracking-tight">{$countLuas.toFixed(3)}</p>
                </div>
                <div class="text-center col-span-2 md:col-span-1 border-t md:border-t-0 md:border-l border-on-dark/20 pt-6 md:pt-0 md:pl-12">
                    <p class="text-on-dark-soft text-sm font-medium mb-1 uppercase tracking-widest">Dusun</p>
                    <p class="text-3xl md:text-4xl font-display text-on-dark tracking-tight">{Math.floor($countDusun)}</p>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Running Text / Marquee -->
<div class="w-full flex items-stretch h-12 md:h-14 bg-surface-dark border-b border-primary/20 overflow-hidden">
    <!-- Date section (Darker background) -->
    <div class="bg-ink text-canvas font-medium px-4 md:px-8 flex items-center shrink-0 z-10 relative">
        <span class="text-sm md:text-base whitespace-nowrap">{hariIni}</span>
        <!-- Decorative slants -->
        <div class="absolute -right-4 top-0 h-full flex">
            <div class="w-3 h-full bg-[#FDE047] -skew-x-12 ml-1"></div>
            <div class="w-1.5 h-full bg-primary -skew-x-12 ml-1"></div>
        </div>
    </div>
    
    <!-- Marquee section (Green background) -->
    <div class="flex-grow bg-primary flex items-center relative pl-8">
        <div class="whitespace-nowrap inline-block animate-marquee text-on-primary font-medium text-sm md:text-base tracking-wide flex-shrink-0 w-full">
            Selamat Datang di Website Resmi Desa Pajawanlor Kecamatan Ciawigebang Kabupaten Kuningan. Melayani masyarakat dengan sepenuh hati demi mewujudkan desa yang mandiri, inovatif, dan sejahtera.
        </div>
    </div>
</div>

<!-- Berita Terkini Section -->
<section class="py-section bg-canvas">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row justify-between items-end mb-12 gap-6" in:fly={{y: 20, duration: 800, delay: 100}}>
            <div class="max-w-2xl">
                <h2 class="text-4xl md:text-5xl font-display text-ink tracking-tight mb-4">Kabar Pajawanlor</h2>
                <p class="text-lg text-body">Ikuti perkembangan terbaru, program pemerintah, dan kegiatan kemasyarakatan di Desa Pajawanlor.</p>
            </div>
            <a href="/berita-desa" class="inline-flex items-center text-primary font-medium hover:text-primary-active transition-colors shrink-0">
                Lihat Semua Berita 
                <svg class="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
            </a>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {#each latestNews as berita, i}
                <a href="/berita-desa" class="group block h-full" in:fly={{y: 20, duration: 600, delay: 200 + (i * 100)}}>
                    <article class="bg-surface-card rounded-lg overflow-hidden h-full flex flex-col transition-transform duration-300 group-hover:-translate-y-1 shadow-sm hover:shadow-md">
                        <div class="aspect-[16/9] overflow-hidden bg-surface-soft relative">
                            <img src={berita.image} alt={berita.title} class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                            <div class="absolute top-4 left-4 bg-primary text-on-primary text-xs font-medium px-3 py-1 rounded-pill uppercase tracking-wider">
                                {berita.category}
                            </div>
                        </div>
                        <div class="p-8 flex flex-col flex-grow">
                            <time class="text-sm font-medium text-muted-soft mb-3">{berita.date}</time>
                            <h3 class="text-xl font-medium text-ink mb-3 group-hover:text-primary transition-colors line-clamp-2 leading-snug">{berita.title}</h3>
                            <p class="text-body text-base line-clamp-3 mb-6 flex-grow">{berita.excerpt}</p>
                            <span class="inline-flex items-center text-sm font-medium text-ink group-hover:text-primary transition-colors">
                                Baca selengkapnya
                                <svg class="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                                </svg>
                            </span>
                        </div>
                    </article>
                </a>
            {/each}
        </div>
    </div>
</section>

<!-- Call to Action Band -->
<section class="py-20 px-4 sm:px-6 lg:px-8 bg-canvas">
    <div class="max-w-7xl mx-auto bg-primary rounded-xl overflow-hidden p-10 md:p-16 lg:p-20 relative">
        <!-- Decorative spike -->
        <div class="absolute top-0 right-0 -mt-16 -mr-16 opacity-10 pointer-events-none">
            <svg width="300" height="300" viewBox="0 0 100 100" fill="none">
                <path d="M50 0 C50 25 75 50 100 50 C75 50 50 75 50 100 C50 75 25 50 0 50 C25 50 50 25 50 0 Z" fill="currentColor"/>
            </svg>
        </div>
        
        <div class="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div class="lg:col-span-8">
                <h2 class="text-4xl md:text-5xl lg:text-6xl font-display text-on-primary tracking-tight leading-tight mb-6">
                    Dukung perekonomian desa melalui BUMDes.
                </h2>
                <p class="text-lg text-primary-disabled max-w-2xl">
                    Berbagai unit usaha dan produk unggulan warga Desa Pajawanlor siap mendukung perputaran ekonomi lokal menuju desa mandiri.
                </p>
            </div>
            <div class="lg:col-span-4 flex lg:justify-end">
                <a href="/bumdes" class="inline-flex items-center justify-center px-8 py-4 rounded-md bg-canvas text-ink font-medium text-lg transition-colors hover:bg-surface-soft focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary focus:ring-canvas w-full sm:w-auto">
                    Lihat Direktori BUMDes
                </a>
            </div>
        </div>
    </div>
</section>
