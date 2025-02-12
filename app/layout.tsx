import type { Metadata } from 'next'

import {
	SITE_DESCRIPTION,
	SITE_KEYWORDS,
	SITE_NAME
} from '@/constants/seo.constants'

import './globals.css'

export const metadata: Metadata = {
	title: {
		absolute: SITE_NAME,
		template: `%s - ${SITE_NAME}`
	},
	description: SITE_DESCRIPTION,
	applicationName: SITE_NAME,
	authors: [
		{
			name: 'ixedasan',
			url: new URL('https://github.com/ixedasan')
		}
	],
	keywords: SITE_KEYWORDS,
	generator: 'Next.js',
	creator: 'Yatsyshyn Oleksandr',
	publisher: 'ixedasan',
	icons: {
		icon: '/favicon.ico',
		shortcut: '/favicon.ico',
		apple: '/touch-icons/192x192.png',
		other: {
			rel: 'touch-icons',
			url: '/touch-icons/192x192.png',
			sizes: '192x192',
			type: 'image/png'
		}
	},
	openGraph: {
		title: SITE_NAME,
		description: SITE_DESCRIPTION,
		type: 'website',
		locale: 'en_US',
		images: [
			{
				url: '/touch-icons/512x512.png',
				width: 512,
				height: 512,
				alt: SITE_NAME
			}
		]
	},
	twitter: {
		title: SITE_NAME,
		description: SITE_DESCRIPTION,
		images: [
			{
				url: '/touch-icons/512x512.png',
				width: 512,
				height: 512,
				alt: SITE_NAME
			}
		]
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1
		}
	}
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	)
}
