<script lang="ts">
    import { fly, fade } from 'svelte/transition';
    import { dataWilayah, daftarBerita } from '$lib/data/mock';

    const latestNews = daftarBerita.slice(0, 3);
</script>

<!-- Hero Section -->
<section class="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-surface-dark py-20">
    <!-- Abstract Background Pattern -->
    <div class="absolute inset-0 opacity-10 pointer-events-none">
        <svg class="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="none" stroke="currentColor" stroke-width="0.5" />
            <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" stroke-width="0.5" />
            <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" stroke-width="0.5" />
            <line x1="0" y1="50" x2="100" y2="50" stroke="currentColor" stroke-width="0.5" />
            <line x1="50" y1="0" x2="50" y2="100" stroke="currentColor" stroke-width="0.5" />
        </svg>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            
            <div class="max-w-2xl" in:fly={{y: 50, duration: 1000, delay: 100}}>
                <div class="inline-flex items-center gap-2 px-3 py-1 rounded-pill bg-canvas/10 text-on-dark border border-on-dark/20 text-sm font-medium mb-6 backdrop-blur-sm">
                    <span class="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                    Portal Informasi Resmi
                </div>
                
                <h1 class="text-5xl sm:text-6xl lg:text-7xl font-display text-on-dark leading-[1.05] tracking-tight mb-6">
                    Pemerintahan Desa <br/>
                    <span class="text-primary-disabled">Pajawanlor</span>
                </h1>
                
                <p class="text-lg sm:text-xl text-on-dark-soft font-body leading-relaxed mb-8 max-w-lg">
                    Menyajikan transparansi, sejarah budaya, dan pelayanan publik secara digital untuk kesejahteraan warga dan kemajuan bersama.
                </p>
                
                <div class="flex flex-wrap items-center gap-4">
                    <a href="/profil-desa" class="inline-flex items-center justify-center px-6 py-3 rounded-md bg-primary text-on-primary font-medium transition-colors hover:bg-primary-active focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:outline-none">
                        Jelajahi Sejarah Desa
                    </a>
                    <a href="/data-desa" class="inline-flex items-center justify-center px-6 py-3 rounded-md bg-transparent text-on-dark border border-on-dark/20 font-medium transition-colors hover:bg-on-dark/10 focus:ring-2 focus:ring-offset-2 focus:ring-on-dark focus:outline-none">
                        Lihat Data Penduduk
                    </a>
                </div>
            </div>

            <div class="relative rounded-xl overflow-hidden shadow-2xl aspect-[4/3] lg:aspect-square bg-surface-card" in:fade={{duration: 1200, delay: 300}}>
                <img 
                    src="/assets/desa-pajawanlor.png" 
                    alt="Suasana Desa Pajawanlor" 
                    class="object-cover w-full h-full hover:scale-105 transition-transform duration-700" 
                    onerror={(e) => { e.currentTarget.src='https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?w=800&q=80'; e.currentTarget.onerror=null; }}
                />
                <div class="absolute inset-0 bg-gradient-to-t from-surface-dark/80 to-transparent pointer-events-none"></div>
                
                <!-- Quick Stats Badge over Image -->
                <div class="absolute bottom-6 left-6 right-6 p-6 rounded-lg bg-surface-dark/40 backdrop-blur-md border border-on-dark/10">
                    <div class="grid grid-cols-2 gap-4">
                        <div>
                            <p class="text-on-dark-soft text-sm font-medium mb-1">Populasi Penduduk</p>
                            <p class="text-3xl font-display text-on-dark tracking-tight">{dataWilayah.penduduk.jiwa}</p>
                        </div>
                        <div>
                            <p class="text-on-dark-soft text-sm font-medium mb-1">Luas Wilayah</p>
                            <p class="text-3xl font-display text-on-dark tracking-tight">{dataWilayah.luas.split(' ')[0]}</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</section>

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
