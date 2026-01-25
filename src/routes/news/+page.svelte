<script>
	export let data;
</script>

<div class="min-h-screen bg-[#0D1117] pt-8 md:pt-16 pb-20 px-6">
	<div class="max-w-7xl mx-auto">

		<div class="max-w-2xl mb-16">
			<div class="inline-block px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-mono mb-6 uppercase tracking-widest">
				Intelligence & Updates
			</div>
			<h1 class="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter">
				LATEST <span class="text-gray-600">NEWS.</span>
			</h1>
			<p class="text-gray-400 text-lg">
				Deep dives into infrastructure, smart monitoring tutorials, and WeMonitor.net engineering updates.
			</p>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			{#each data.posts as post (post.id)}
				<a href="/news/{post.slug}"
					 class="group relative flex flex-col p-8 rounded-[1rem] bg-white/[0.02] border border-white/5 hover:border-cyan-500/30 transition-all duration-500 overflow-hidden">

					<div class="absolute -bottom-10 -right-10 w-32 h-32 bg-cyan-500/5 blur-3xl rounded-full group-hover:bg-cyan-500/10 transition-colors"></div>

					<time class="text-[10px] font-mono text-cyan-500/60 mb-4 uppercase tracking-widest">
						{post.date}
					</time>

					<h3 class="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors leading-tight">
						{post.title}
					</h3>

					<p class="text-gray-500 text-sm leading-relaxed mb-8 flex-grow">
						{post.excerpt || "Click to read the full article..."}
					</p>

					<div class="flex items-center gap-2 text-xs font-bold text-white uppercase tracking-tighter">
						Read Article
						<span class="text-cyan-500 transform group-hover:translate-x-2 transition-transform duration-300">→</span>
					</div>
				</a>
			{/each}
		</div>

		{#if data.posts.length === 0}
			<div class="text-center py-20 border border-dashed border-white/10 rounded-[2rem]">
				<p class="text-gray-500 font-mono text-sm">No transmissions found in /posts/</p>
			</div>
		{/if}
	</div>
</div>