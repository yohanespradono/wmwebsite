<script lang="ts">
	/* eslint-disable svelte/no-navigation-without-resolve */
	export let data;

	// Ambil konten komponen dan metadata dari data yang dikirim +page.ts
	const { content, metadata } = data;
</script>

<div class="min-h-screen bg-[#0D1117] pt-32 pb-20 px-6">
	<article class="max-w-3xl mx-auto">

		<div class="mb-12">
			<a href="/news" class="group flex items-center gap-2 text-cyan-500 text-xs font-mono uppercase tracking-widest hover:text-white transition-colors">
				<span class="transform group-hover:-translate-x-1 transition-transform">←</span>
				Back to News
			</a>
		</div>

		<header class="mb-16">
			<time class="text-xs font-mono text-gray-500 block mb-4 italic">
				Published: {metadata.date || 'January 24, 2026'}
			</time>
			<h1 class="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter leading-none">
				{metadata.title}
			</h1>
			{#if metadata.excerpt}
				<p class="text-xl text-gray-400 leading-relaxed italic border-l-2 border-white/10 pl-6">
					{metadata.excerpt}
				</p>
			{/if}
		</header>

		<div class="prose prose-invert prose-cyan max-w-none
                prose-headings:tracking-tighter prose-headings:font-bold
                prose-p:text-gray-400 prose-p:leading-relaxed
                prose-pre:bg-black/50 prose-pre:border prose-pre:border-white/5">

			<svelte:component this={content} />

		</div>

	</article>
</div>