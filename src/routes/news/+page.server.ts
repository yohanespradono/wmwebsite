import type { Post } from '$lib/types';

export async function load() {
	// Tambahkan casting 'as Record<string, Post>' di sini
	const postFiles = import.meta.glob('/src/lib/posts/*.md', { eager: true }) as Record<
		string,
		Post
	>;

	const posts = Object.entries(postFiles).map(([path, post]) => {
		// Now TypeScript knows that posts has metadata
		const fileName = path.split('/').pop()?.replace('.md', '') || '';

		return {
			id: Math.random().toString(36).substring(7),
			slug: fileName,
			date: post.metadata.date || fileName,
			title: post.metadata.title,
			excerpt: post.metadata.excerpt
		};
	});

	posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

	return { posts };
}
