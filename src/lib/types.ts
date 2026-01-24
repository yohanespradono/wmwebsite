// src/lib/types.ts (opsional, atau taruh di file .js/.ts terkait)
export interface Post {
	metadata: {
		title: string;
		date: string;
		excerpt: string;
		// tambahkan field lain dari frontmatter .md kamu di sini
	};
	default: never;
}
