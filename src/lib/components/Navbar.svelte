<script lang="ts">
    import { page } from '$app/stores';
    import { slide } from 'svelte/transition';
    import { cubicOut } from 'svelte/easing';
    
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
    
    function closeMenu() {
        isMenuOpen = false;
    }
</script>

<nav class="sticky top-0 z-50 w-full bg-canvas/95 backdrop-blur-md border-b border-hairline transition-colors duration-300">
    <!-- Navbar taller: h-20 -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-20 items-center">
            
            <!-- Logo Only, Bigger -->
            <a href="/" class="flex items-center shrink-0">
                <img src="/assets/logo-pajawanlor.png" alt="Logo Pajawanlor" class="h-14 w-auto object-contain" />
            </a>

            <!-- Desktop Menu -->
            <div class="hidden md:flex space-x-8 items-center h-full">
                {#each navItems as item}
                    <a 
                        href={item.path} 
                        class="text-sm font-medium transition-colors hover:text-primary relative py-2
                        {$page.url.pathname === item.path ? 'text-primary' : 'text-body'}"
                    >
                        {item.name}
                        {#if $page.url.pathname === item.path}
                            <div class="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full"></div>
                        {/if}
                    </a>
                {/each}
            </div>

            <!-- Mobile menu button (Hamburger / X) -->
            <div class="flex items-center md:hidden">
                <button 
                    onclick={toggleMenu} 
                    class="p-2 rounded-md text-ink hover:bg-surface-soft focus:outline-none focus:ring-2 focus:ring-primary z-50 relative"
                    aria-label="Toggle menu"
                >
                    {#if isMenuOpen}
                        <!-- X Icon -->
                        <svg class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    {:else}
                        <!-- Hamburger Icon (3 lines) -->
                        <svg class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    {/if}
                </button>
            </div>
        </div>
    </div>

    <!-- Mobile Menu Overlay (Full Height) -->
    {#if isMenuOpen}
        <div 
            class="md:hidden fixed top-20 left-0 w-full h-[calc(100vh-5rem)] bg-canvas flex flex-col items-center pt-8 pb-12 space-y-2 overflow-y-auto border-t border-hairline shadow-2xl" 
            transition:slide={{duration: 400, easing: cubicOut}}
        >
            {#each navItems as item}
                <a 
                    href={item.path} 
                    onclick={closeMenu}
                    class="block w-full text-center px-6 py-4 text-xl font-medium transition-colors
                    {$page.url.pathname === item.path ? 'text-primary bg-surface-soft' : 'text-body hover:text-primary hover:bg-surface-soft'}"
                >
                    {item.name}
                </a>
            {/each}

            <div class="mt-8 mb-4">
                <a href="https://www.instagram.com/desapajawanlor/" target="_blank" rel="noopener noreferrer" onclick={closeMenu} class="flex items-center gap-3 px-6 py-3 rounded-full border border-primary/20 hover:bg-surface-soft transition-colors">
                    <img src="https://img.icons8.com/?size=100&id=BrU2BBoRXiWq&format=png&color=1B4D3E" alt="Instagram" class="h-6 w-6" />
                    <span class="font-medium text-ink">@desapajawanlor</span>
                </a>
            </div>
            
            <div class="mt-auto pt-8">
                <img src="/assets/logo-pajawanlor.png" alt="Logo Pajawanlor" class="h-16 w-auto opacity-50" />
            </div>
        </div>
    {/if}
</nav>
