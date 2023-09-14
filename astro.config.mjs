import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://tscheatsheet.madr.io/',
	integrations: [
		starlight({
			title: 'tsCheatSheet',
			social: {
				github: 'https://github.com/MaDrCloudDev/tsCheatsheet',
			},
			sidebar: [
				{
					label: 'TypeScript',
					items: [
						// Each item here is one entry in the navigation menu.
						{
							label: 'Arrays',
							link: '/typescript/arrays',
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
							label: 'Null',
							link: '/typescript/null_and_undefined',
						},
						{
							label: 'Object Types',
							link: '/typescript/object_types',
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
				// {
				// 	label: 'Reference',
				// 	autogenerate: { directory: 'reference' },
				// },
			],
		}),
	],
});
