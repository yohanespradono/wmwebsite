// src/routes/news/+page.ts
import type { Post } from '$lib/types';

export const prerender = true; // Paksa halaman ini jadi statis

export async function load() {
	// import.meta.glob tetap bekerja di +page.ts karena dihandle oleh Vite
	const postFiles = import.meta.glob('/src/lib/posts/*.md', { eager: true }) as Record<
		string,
		{ metadata: Post['metadata'] }
	>;

	const posts = Object.entries(postFiles).map(([path, post]) => {
		const fileName = path.split('/').pop()?.replace('.md', '') || '';

		return {
			// id jangan pake random pas build statis, mending pake slug aja biar konsisten
			id: fileName,
			slug: fileName,
			date: post.metadata.date || fileName,
			title: post.metadata.title,
			excerpt: post.metadata.excerpt
		};
	});

	posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

	return { posts };
}
