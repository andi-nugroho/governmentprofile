<script lang="ts">
    import { daftarBerita } from '$lib/data/mock';
    import { fly, fade } from 'svelte/transition';

    let activeFilter = $state('Semua');
    const categories = ['Semua', 'Pemerintahan', 'Ekonomi', 'Sosial'];

    let filteredBerita = $derived(
        activeFilter === 'Semua' 
            ? daftarBerita 
            : daftarBerita.filter(b => b.category === activeFilter)
    );
</script>

<svelte:head>
    <title>Berita Desa - Pajawanlor</title>
</svelte:head>

<!-- Header -->
<header class="bg-surface-soft py-24 border-b border-hairline">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" in:fly={{y: 30, duration: 800}}>
        <h1 class="text-5xl md:text-6xl font-display text-ink tracking-tight mb-6">Berita Desa</h1>
        <p class="text-lg text-body max-w-2xl mx-auto leading-relaxed">
            Kumpulan kabar terbaru mengenai program pemerintah, kegiatan sosial warga, dan perkembangan ekonomi lokal di Pajawanlor.
        </p>
    </div>
</header>

<main class="bg-canvas py-section min-h-screen">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Filter Tabs -->
        <div class="flex flex-wrap justify-center gap-3 mb-16" in:fly={{y: 20, duration: 800, delay: 100}}>
            {#each categories as category}
                <button 
                    onclick={() => activeFilter = category}
                    class="px-5 py-2 rounded-full text-sm font-medium transition-colors border focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-canvas
                    {activeFilter === category 
                        ? 'bg-ink text-canvas border-ink' 
                        : 'bg-transparent text-muted border-hairline hover:border-primary/50 hover:text-ink'}"
                >
                    {category}
                </button>
            {/each}
        </div>

        <!-- News Grid -->
        {#key activeFilter}
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" in:fade={{duration: 400}}>
                {#each filteredBerita as berita, i (berita.id)}
                    <a href="#" class="group block h-full" in:fly={{y: 20, duration: 600, delay: i * 100}}>
                        <article class="bg-surface-card rounded-xl overflow-hidden h-full flex flex-col transition-all duration-300 group-hover:-translate-y-1 shadow-sm hover:shadow-md border border-hairline group-hover:border-primary/30">
                            <div class="aspect-[16/9] overflow-hidden bg-surface-soft relative">
                                <img src={berita.image} alt={berita.title} class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                <div class="absolute top-4 left-4 bg-primary text-on-primary text-xs font-medium px-3 py-1 rounded-pill uppercase tracking-wider shadow-sm">
                                    {berita.category}
                                </div>
                            </div>
                            <div class="p-8 flex flex-col flex-grow">
                                <time class="text-sm font-medium text-muted-soft mb-3">{berita.date}</time>
                                <h3 class="text-xl font-display text-ink mb-3 group-hover:text-primary transition-colors line-clamp-2 leading-snug">{berita.title}</h3>
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
                {:else}
                    <div class="col-span-full py-20 text-center" in:fade={{duration: 400}}>
                        <p class="text-lg text-muted">Belum ada berita dalam kategori <span class="font-medium text-ink">{activeFilter}</span>.</p>
                    </div>
                {/each}
            </div>
        {/key}
        
    </div>
</main>
