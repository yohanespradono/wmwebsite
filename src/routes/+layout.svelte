<script>
	import "../app.css";
	import { page } from '$app/stores';
</script>

<div class="min-h-screen bg-[#0D1117] text-[#E6EDF3] font-sans selection:bg-cyan-500/30">
	<nav class="sticky top-0 z-50 border-b border-white/10 bg-[#0D1117]/80 backdrop-blur-md">
		<div class="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
			<a href="/" class="text-2xl font-bold tracking-tighter text-white flex items-center gap-2">
				<span class="w-8 h-8 bg-cyan-500 rounded-lg flex items-center justify-center text-black">W</span>
				WeMonitor<span class="text-cyan-400">.net</span>
			</a>

			<div class="hidden md:flex gap-8 text-sm font-medium">
				<a href="/" class="hover:text-cyan-400 transition {$page.url.pathname === '/' ? 'text-cyan-400' : ''}">Home</a>
				<a href="/news" class="hover:text-cyan-400 transition {$page.url.pathname.includes('/news') ? 'text-cyan-400' : ''}">News</a>
				<a href="/about" class="hover:text-cyan-400 transition {$page.url.pathname === '/about' ? 'text-cyan-400' : ''}">About</a>
				<a href="/contact" class="hover:text-cyan-400 transition {$page.url.pathname === '/contact' ? 'text-cyan-400' : ''}">Contact</a>
			</div>

			<button class="bg-cyan-600 hover:bg-cyan-500 text-white px-5 py-2 rounded-full text-sm font-semibold transition shadow-[0_0_15px_rgba(6,182,212,0.3)]">
				Sign Up
			</button>
		</div>
	</nav>

	<main>
		<slot />
	</main>
</div>