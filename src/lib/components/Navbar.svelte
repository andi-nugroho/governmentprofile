<script lang="ts">
    import { page } from '$app/stores';
    import { fly, fade } from 'svelte/transition';
    
    let isMenuOpen = $state(false);

    const navItems = [
        { name: 'Beranda', path: '/' },
        { name: 'Profil Desa', path: '/profil-desa' },
        { name: 'Data Desa', path: '/data-desa' },
        { name: 'Berita Desa', path: '/berita-desa' },
        { name: 'BUMDes', path: '/bumdes' },
    ];

    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
    }
</script>

<nav class="sticky top-0 z-50 w-full bg-canvas/90 backdrop-blur-md border-b border-hairline transition-colors duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16 items-center">
            <!-- Logo & Brand -->
            <a href="/" class="flex items-center gap-3 shrink-0">
                <img src="/assets/logo-pajawanlor.png" alt="Logo Pajawanlor" class="h-10 w-10 object-contain" />
                <span class="font-display font-medium text-lg text-ink">Desa Pajawanlor</span>
            </a>

            <!-- Desktop Menu -->
            <div class="hidden md:flex space-x-8">
                {#each navItems as item}
                    <a 
                        href={item.path} 
                        class="text-sm font-medium transition-colors hover:text-primary 
                        {$page.url.pathname === item.path ? 'text-primary border-b-2 border-primary py-5' : 'text-body'}"
                    >
                        {item.name}
                    </a>
                {/each}
            </div>

            <!-- Mobile menu button -->
            <div class="flex items-center md:hidden">
                <button 
                    onclick={toggleMenu} 
                    class="p-2 rounded-md text-ink hover:bg-surface-soft focus:outline-none focus:ring-2 focus:ring-primary"
                    aria-label="Toggle menu"
                >
                    {#if isMenuOpen}
                        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    {:else}
                        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    {/if}
                </button>
            </div>
        </div>
    </div>

    <!-- Mobile Menu Overlay -->
    {#if isMenuOpen}
        <div class="md:hidden absolute top-16 left-0 w-full bg-canvas border-b border-hairline shadow-lg" transition:fly={{y: -20, duration: 200}}>
            <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {#each navItems as item}
                    <a 
                        href={item.path} 
                        onclick={() => isMenuOpen = false}
                        class="block px-3 py-2 rounded-md text-base font-medium transition-colors
                        {$page.url.pathname === item.path ? 'text-primary bg-surface-soft' : 'text-body hover:text-primary hover:bg-surface-soft'}"
                    >
                        {item.name}
                    </a>
                {/each}
            </div>
        </div>
    {/if}
</nav>
