<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Pemerintahan Desa Pajawanlor</title>
</svelte:head>

<div class="min-h-screen flex flex-col bg-canvas font-body text-body selection:bg-primary/20 selection:text-ink">
    <Navbar />
    <main class="flex-grow">
        {@render children()}
    </main>
    <Footer />
</div>
