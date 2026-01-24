import { error } from '@sveltejs/kit';

export async function load({ params }) {
	// 1. Ambil list semua file .md di folder posts
	const posts = import.meta.glob('/src/lib/posts/*.md');

	// 2. Tentukan path file yang dicari berdasarkan slug di URL
	const postPath = `/src/lib/posts/${params.slug}.md`;

	// 3. Cek apakah file tersebut ada di dalam daftar glob
	const importFn = posts[postPath];

	if (!importFn) {
		// Jika file 2026-01-24.md tidak ada di src/lib/posts/
		throw error(404, {
			message: `Article '${params.slug}' was not found in our transmissions.`
		});
	}

	// 4. Import file secara dinamis
	const post = (await importFn()) as any;

	return {
		content: post.default,
		metadata: post.metadata
	};
}
