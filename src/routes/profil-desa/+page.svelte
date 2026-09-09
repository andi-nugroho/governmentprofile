<script lang="ts">
    import { sejarahDesa, daftarKuwu } from '$lib/data/mock';
    import { fly } from 'svelte/transition';
</script>

<svelte:head>
    <title>Profil Desa - Pajawanlor</title>
</svelte:head>

<!-- Header Section -->
<header class="bg-surface-soft py-24 border-b border-hairline">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center" in:fly={{y: 30, duration: 800}}>
        <h1 class="text-5xl md:text-6xl font-display text-ink tracking-tight mb-6">Profil Desa</h1>
        <p class="text-lg text-body max-w-2xl mx-auto leading-relaxed">
            Menelusuri jejak sejarah pemekaran, letak geografis, serta daftar pemimpin Desa Pajawanlor dari masa ke masa.
        </p>
    </div>
</header>

<main class="bg-canvas py-section">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
        
        <!-- Sejarah Section -->
        <section in:fly={{y: 20, duration: 800, delay: 200}}>
            <div class="flex items-center gap-4 mb-8">
                <div class="w-12 h-px bg-primary"></div>
                <h2 class="text-3xl font-display text-ink">Sejarah Terbentuknya Desa</h2>
            </div>
            
            <div class="bg-surface-card rounded-xl p-8 md:p-12 shadow-sm border border-hairline relative">
                <!-- Decorative quote mark -->
                <div class="absolute top-6 left-6 text-6xl text-primary/10 font-display leading-none pointer-events-none">"</div>
                <div class="prose prose-lg prose-ink max-w-none relative z-10 text-body leading-relaxed space-y-6">
                    {#each sejarahDesa.trim().split('\n\n') as paragraph}
                        <p>{paragraph}</p>
                    {/each}
                </div>
            </div>
        </section>

        <!-- Daftar Kuwu Section -->
        <section in:fly={{y: 20, duration: 800, delay: 300}}>
            <div class="flex items-center gap-4 mb-12">
                <div class="w-12 h-px bg-primary"></div>
                <h2 class="text-3xl font-display text-ink">Riwayat Kepala Desa (Kuwu)</h2>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {#each daftarKuwu as kuwu, index}
                    <div class="bg-surface-card rounded-lg p-6 border border-hairline hover:border-primary/30 transition-colors flex gap-4 items-start">
                        <div class="shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-surface-soft text-muted font-medium text-sm border border-hairline">
                            {kuwu.id}
                        </div>
                        <div>
                            <h3 class="font-medium text-ink text-lg mb-1">{kuwu.name}</h3>
                            <p class="text-sm font-medium text-primary tracking-wide">{kuwu.period}</p>
                        </div>
                    </div>
                {/each}
            </div>
        </section>

    </div>
</main>
