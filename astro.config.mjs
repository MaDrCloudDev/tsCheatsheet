// @ts-check
import { defineConfig, passthroughImageService } from 'astro/config';
import starlight from '@astrojs/starlight';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: "https://tscheatsheet.madr.io",
	image: {
		service: passthroughImageService()
	},
	integrations: [
		sitemap(),
		starlight({
			title: 'tsCheatSheet',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/MaDrCloudDev/tsCheatsheet' }],
			sidebar: [
				{
					label: 'TypeScript Basics',
					items: [
						// Each item here is one entry in the navigation menu.
						{
							label: 'Arrays',
							link: '/typescript/arrays',
						},
						{
							label: 'Async Without Promise',
							link: '/typescript/async_without_promise',
						},
						{
							label: 'Casting',
							link: '/typescript/casting',
						},
						{
							label: 'Classes',
							link: '/typescript/classes',
						},
						{
							label: 'Enums',
							link: '/typescript/enums',
						},
						{
							label: 'Functions',
							link: '/typescript/functions',
						},
						{
							label: 'Generics',
							link: '/typescript/generics',
						},
						{
							label: 'Interfaces & Aliases',
							link: '/typescript/interfaces_and_aliases',
						},
						{
							label: 'Keyof',
							link: '/typescript/keyof',
						},
						{
							label: 'Linked List',
							link: '/typescript/linked_list',
						},
						{
							label: 'Null',
							link: '/typescript/null_and_undefined',
						},
						{
							label: 'Object Types',
							link: '/typescript/object_types',
						},
						{
							label: 'Query Parameter Parser',
							link: '/typescript/query_parameter_parser',
						},
						{
							label: 'Tuples',
							link: '/typescript/tuples',
						},
						{
							label: 'Types',
							link: '/typescript/types',
						},
						{
							label: 'Union Types',
							link: '/typescript/union_types',
						},
						{
							label: 'Utility Types',
							link: '/typescript/utility_types',
						},
					],
				},
				{
					label: 'TypeScript DSA',
					collapsed: true,
					items: [
						{
							label: 'Binary Tree Search',
							link: '/typescript/binary_tree_search',
						},
						{
							label: 'Deque',
							link: '/typescript/deque',
						},
						{
							label: 'Graph',
							link: '/typescript/graph',
						},
						{
							label: 'Heap',
							link: '/typescript/heap',
						},
						{
							label: 'Linked List',
							link: '/typescript/linked_list',
						},
						{
							label: 'Priority Queue',
							link: '/typescript/priority_queue',
						},
						{
							label: 'Queue',
							link: '/typescript/queue',
						},
						{
							label: 'Set',
							link: '/typescript/set',
						},
						{
							label: 'Stack',
							link: '/typescript/stack',
						},
						{
							label: 'Trie',
							link: '/typescript/trie',
						},
					]
				}
			],
		}),
	],
});
