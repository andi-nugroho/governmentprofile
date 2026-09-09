<script lang="ts">
    import { dataWilayah } from '$lib/data/mock';
    import { fly } from 'svelte/transition';
</script>

<svelte:head>
    <title>Data Desa - Pajawanlor</title>
</svelte:head>

<!-- Header -->
<header class="bg-surface-dark py-24 border-b border-surface-dark-elevated">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8" in:fly={{y: 30, duration: 800}}>
        <h1 class="text-5xl md:text-6xl font-display text-on-dark tracking-tight mb-6">Data Wilayah</h1>
        <p class="text-lg text-on-dark-soft max-w-2xl leading-relaxed">
            Informasi demografi, batas geografis, dan pembagian wilayah administratif Pemerintahan Desa Pajawanlor.
        </p>
    </div>
</header>

<main class="bg-canvas py-section">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        <!-- Peta Wilayah -->
        <section in:fly={{y: 20, duration: 800, delay: 100}}>
            <h2 class="text-3xl font-display text-ink mb-8">Peta Desa Pajawanlor</h2>
            <div class="bg-surface-card rounded-xl p-4 md:p-8 border border-hairline shadow-sm">
                <img 
                    src="/assets/peta-pajawanlor.png" 
                    alt="Peta Wilayah Desa Pajawanlor" 
                    class="w-full h-auto rounded-lg shadow-sm"
                    onerror={(e) => { e.currentTarget.src='https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200&q=80'; e.currentTarget.onerror=null; }}
                />
            </div>
        </section>

        <!-- Statistik Grid -->
        <section in:fly={{y: 20, duration: 800, delay: 200}}>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <!-- Info Penduduk -->
                <div class="bg-surface-soft p-8 rounded-xl border border-hairline text-center">
                    <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-surface-card border border-hairline mb-6">
                        <svg class="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                    </div>
                    <h3 class="text-4xl font-display text-ink mb-2">{dataWilayah.penduduk.jiwa}</h3>
                    <p class="text-sm font-medium text-muted uppercase tracking-wider mb-2">Total Penduduk (Jiwa)</p>
                    <p class="text-sm text-body">{dataWilayah.penduduk.kk} Kepala Keluarga</p>
                </div>

                <!-- Luas Wilayah -->
                <div class="bg-surface-soft p-8 rounded-xl border border-hairline text-center">
                    <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-surface-card border border-hairline mb-6">
                        <svg class="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                        </svg>
                    </div>
                    <h3 class="text-4xl font-display text-ink mb-2">{dataWilayah.luas.split(' ')[0]}</h3>
                    <p class="text-sm font-medium text-muted uppercase tracking-wider mb-2">Hektar Luas Wilayah</p>
                    <p class="text-sm text-body">Topografi {dataWilayah.topografi}</p>
                </div>

                <!-- Pembagian Administratif -->
                <div class="bg-surface-soft p-8 rounded-xl border border-hairline text-center">
                    <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-surface-card border border-hairline mb-6">
                        <svg class="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                    </div>
                    <h3 class="text-4xl font-display text-ink mb-2">{dataWilayah.administrasi.dusun}</h3>
                    <p class="text-sm font-medium text-muted uppercase tracking-wider mb-2">Total Dusun</p>
                    <p class="text-sm text-body">{dataWilayah.administrasi.rw} RW / {dataWilayah.administrasi.rt} RT</p>
                </div>
            </div>
        </section>

        <!-- Batas Wilayah -->
        <section in:fly={{y: 20, duration: 800, delay: 300}}>
            <h2 class="text-3xl font-display text-ink mb-8">Batas Geografis</h2>
            <div class="bg-surface-card rounded-xl border border-hairline overflow-hidden">
                <table class="w-full text-left border-collapse">
                    <thead>
                        <tr class="bg-surface-soft border-b border-hairline">
                            <th class="py-4 px-6 text-sm font-medium text-muted uppercase tracking-wider">Arah</th>
                            <th class="py-4 px-6 text-sm font-medium text-muted uppercase tracking-wider">Desa / Kelurahan</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-hairline">
                        <tr class="hover:bg-canvas transition-colors">
                            <td class="py-4 px-6 font-medium text-ink">Sebelah Utara</td>
                            <td class="py-4 px-6 text-body">{dataWilayah.batas.utara}</td>
                        </tr>
                        <tr class="hover:bg-canvas transition-colors">
                            <td class="py-4 px-6 font-medium text-ink">Sebelah Selatan</td>
                            <td class="py-4 px-6 text-body">{dataWilayah.batas.selatan}</td>
                        </tr>
                        <tr class="hover:bg-canvas transition-colors">
                            <td class="py-4 px-6 font-medium text-ink">Sebelah Timur</td>
                            <td class="py-4 px-6 text-body">{dataWilayah.batas.timur}</td>
                        </tr>
                        <tr class="hover:bg-canvas transition-colors">
                            <td class="py-4 px-6 font-medium text-ink">Sebelah Barat</td>
                            <td class="py-4 px-6 text-body">{dataWilayah.batas.barat}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>

    </div>
</main>
