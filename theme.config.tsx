import React from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';
import { useRouter } from 'next/router';
import { useConfig } from 'nextra-theme-docs';

const config: DocsThemeConfig = {
	logo: <span>typeScriptCheatSheet</span>,
	project: {
		link: 'https://github.com/madrclouddev/typeScriptCheatSheet',
		icon: <img src='/madrlogo.svg' />,
	},
	editLink: {
		text: false,
	},
	feedback: {
		content: false,
	},
	head: () => {
		const { asPath, defaultLocale, locale } = useRouter();
		const { frontMatter } = useConfig();
		const url =
			'https://my-app.com' +
			(defaultLocale === locale ? asPath : `/${locale}${asPath}`);
		const currentUrl = url.replace('https://my-app.com/', '');
		console.log(currentUrl);
		const typeScriptCheatsheet = 'typeScriptCheatSheet';
		return (
			<>
				<title>
					{currentUrl || typeScriptCheatsheet} | TSCT | MaDrCloudDev
				</title>
				<meta
					property='og:description'
					content={frontMatter.description || 'MaDrCloudDev TypeScript'}
				/>
			</>
		);
	},
	docsRepositoryBase: 'https://github.com/madrclouddev',
	footer: {
		text: (
			<span>
				MaDrCloudDev {new Date().getFullYear()}{' '}
				<a
					href='https://github.com/madrclouddev/typeScriptCheatSheet'
					target='_blank'>
					typeScriptCheatSheet
				</a>
				.
			</span>
		),
	},
};

export default config;
