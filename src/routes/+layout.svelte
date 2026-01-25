<script>
	import "../app.css";
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	let mobileMenuOpen = false;
	let navElement;

	onMount(() => {
		const handleClickOutside = (event) => {
			if (mobileMenuOpen && navElement && !navElement.contains(event.target)) {
				mobileMenuOpen = false;
			}
		};

		document.addEventListener('click', handleClickOutside);

		return () => {
			document.removeEventListener('click', handleClickOutside);
		};
	});
</script>

<svelte:head>
	<title>WeMonitor | Lightweight Server Monitoring</title>
	<meta name="description" content="Monitoring CPU, RAM, Docker & Database cuma pake 1 file binary Rust. Irit RAM, gak ribet!" />

	<meta property="og:title" content="WeMonitor - Monitoring Kenceng ala Rust" />
	<meta property="og:description" content="Monitor server VPS lu pake agen Rust yang irit RAM." />
	<meta property="og:image" content="/og-image.png" />
</svelte:head>

<div class="min-h-screen bg-[#0D1117] text-[#E6EDF3] font-sans selection:bg-cyan-500/30">
	<nav bind:this={navElement} class="sticky top-0 z-50 border-b border-white/10 bg-[#0D1117]/80 backdrop-blur-md">
		<div class="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
			<a href="/" class="text-2xl font-bold tracking-tighter text-white flex items-center gap-2">
				<span class="w-8 h-8 bg-cyan-500 rounded-lg flex items-center justify-center text-black">W</span>
				WeMonitor<span class="text-cyan-400">.net</span>
			</a>

			<!-- Desktop Menu -->
			<div class="hidden md:flex gap-8 text-sm font-medium">
				<a href="/" class="hover:text-cyan-400 transition {$page.url.pathname === '/' ? 'text-cyan-400' : ''}">Home</a>
				<a href="https://demo.wemonitor.net" class="hover:text-cyan-400 transition {$page.url.pathname.includes('/news') ? 'text-cyan-400' : ''}">Demo</a>
				<a href="/news" class="hover:text-cyan-400 transition {$page.url.pathname.includes('/news') ? 'text-cyan-400' : ''}">News</a>
				<a href="/about" class="hover:text-cyan-400 transition {$page.url.pathname === '/about' ? 'text-cyan-400' : ''}">About</a>
				<a href="/contact" class="hover:text-cyan-400 transition {$page.url.pathname === '/contact' ? 'text-cyan-400' : ''}">Contact</a>
			</div>

			<div class="flex items-center gap-4">
				<button class="hidden md:block bg-cyan-600 hover:bg-cyan-500 text-white px-5 py-2 rounded-full text-sm font-semibold transition shadow-[0_0_15px_rgba(6,182,212,0.3)]">
					Sign Up
				</button>

				<!-- Hamburger Button -->
				<button
					on:click={() => mobileMenuOpen = !mobileMenuOpen}
					class="md:hidden text-white p-2"
					aria-label="Toggle menu"
				>
					{#if mobileMenuOpen}
						<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
						</svg>
					{:else}
						<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
						</svg>
					{/if}
				</button>
			</div>
		</div>

		<!-- Mobile Menu -->
		{#if mobileMenuOpen}
			<div class="md:hidden border-t border-white/10 bg-[#0D1117]">
				<div class="flex flex-col px-6 py-4 gap-4">
					<a
						href="/"
						on:click={() => mobileMenuOpen = false}
						class="hover:text-cyan-400 transition py-2 {$page.url.pathname === '/' ? 'text-cyan-400' : ''}"
					>
						Home
					</a>
					<a
						href="https://demo.wemonitor.net"
						on:click={() => mobileMenuOpen = false}
						class="hover:text-cyan-400 transition py-2 {$page.url.pathname.includes('/news') ? 'text-cyan-400' : ''}"
					>
						Demo
					</a>
					<a
						href="/news"
						on:click={() => mobileMenuOpen = false}
						class="hover:text-cyan-400 transition py-2 {$page.url.pathname.includes('/news') ? 'text-cyan-400' : ''}"
					>
						News
					</a>
					<a
						href="/about"
						on:click={() => mobileMenuOpen = false}
						class="hover:text-cyan-400 transition py-2 {$page.url.pathname === '/about' ? 'text-cyan-400' : ''}"
					>
						About
					</a>
					<a
						href="/contact"
						on:click={() => mobileMenuOpen = false}
						class="hover:text-cyan-400 transition py-2 {$page.url.pathname === '/contact' ? 'text-cyan-400' : ''}"
					>
						Contact
					</a>
					<button class="bg-cyan-600 hover:bg-cyan-500 text-white px-5 py-2 rounded-full text-sm font-semibold transition shadow-[0_0_15px_rgba(6,182,212,0.3)] w-full">
						Sign Up
					</button>
				</div>
			</div>
		{/if}
	</nav>

	<main>
		<slot />
	</main>
</div>