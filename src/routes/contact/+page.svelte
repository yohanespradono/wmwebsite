<script lang="ts">
	/* eslint-disable svelte/no-navigation-without-resolve */
	// Tambahkan logika form handling di sini jika perlu
	let submitted = false;

	async function handleSubmit(event: Event) {
		event.preventDefault();
		// Simulasi pengiriman
		submitted = true;
	}
</script>

<div class="min-h-screen bg-[#0D1117] text-white pt-32 pb-20 px-6">
	<div class="max-w-7xl mx-auto">

		<div class="grid lg:grid-cols-2 gap-20 items-start">

			<div class="space-y-12">
				<div>
					<div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-mono mb-8 uppercase tracking-[0.2em]">
            <span class="relative flex h-2 w-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
						System Online
					</div>
					<h1 class="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9]">
						GET IN <br/> <span class="text-gray-600">TOUCH.</span>
					</h1>
					<p class="text-gray-400 text-lg max-w-md leading-relaxed">
						Whether you're scaling to 10,000 nodes or just starting with one, our team is ready to help you optimize your observability.
					</p>
				</div>

				<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
					<div class="p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center gap-4">
						<div class="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
							<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
						</div>
						<div>
							<p class="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Email Us</p>
							<p class="text-white font-bold">hello@wemonitor.net</p>
						</div>
					</div>

					<div class="p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center gap-4">
						<div class="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400">
							<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path></svg>
						</div>
						<div>
							<p class="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Community</p>
							<p class="text-white font-bold">Discord Server</p>
						</div>
					</div>
				</div>
			</div>

			<div class="relative group">
				<div class="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>

				<div class="relative bg-[#05070a] rounded-[2rem] p-8 md:p-12 border border-white/10 shadow-2xl">
					{#if !submitted}
						<form on:submit={handleSubmit} class="space-y-8">
							<div class="space-y-2">
								<label for="name" class="text-xs font-mono text-gray-500 uppercase tracking-widest">Full Name</label>
								<input type="text" id="name" required placeholder="Project Manager"
											 class="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder:text-gray-700" />
							</div>

							<div class="space-y-2">
								<label for="email" class="text-xs font-mono text-gray-500 uppercase tracking-widest">Work Email</label>
								<input type="email" id="email" required placeholder="name@company.com"
											 class="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder:text-gray-700" />
							</div>

							<div class="space-y-2">
								<label for="message" class="text-xs font-mono text-gray-500 uppercase tracking-widest">Message</label>
								<textarea id="message" required rows="4" placeholder="How can we help?"
													class="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder:text-gray-700 resize-none"></textarea>
							</div>

							<button type="submit"
											class="w-full group/btn relative flex items-center justify-center gap-3 py-5 bg-white text-black font-black rounded-xl hover:bg-cyan-400 transition-all uppercase tracking-tighter overflow-hidden">
								<span class="relative z-10">Initialize Transmission</span>
								<span class="relative z-10 group-hover/btn:translate-x-2 transition-transform">→</span>
							</button>
						</form>
					{:else}
						<div class="py-20 text-center space-y-6 animate-in fade-in zoom-in duration-500">
							<div class="w-20 h-20 bg-cyan-500/20 text-cyan-400 rounded-full flex items-center justify-center mx-auto mb-8">
								<svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
							</div>
							<h3 class="text-3xl font-bold italic">Message Received.</h3>
							<p class="text-gray-500">Our agents will respond within 24 hours.</p>
							<button on:click={() => submitted = false} class="text-cyan-500 text-xs font-mono hover:underline uppercase tracking-widest">Send another</button>
						</div>
					{/if}
				</div>
			</div>

		</div>
	</div>
</div>