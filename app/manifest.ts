import type { MetadataRoute } from 'next'

import { SITE_DESCRIPTION, SITE_NAME } from '@/constants/seo.constants'

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: SITE_NAME,
		description: SITE_DESCRIPTION,
		start_url: '/',
		display: 'standalone',
		orientation: 'portrait',
		background_color: '#fff8e1',
		theme_color: '#18b9AE',
		icons: [
			{
				src: '/touch-icons/192x192.png',
				sizes: '192x192',
				type: 'image/png'
			},
			{
				src: '/touch-icons/512x512.png',
				sizes: '512x512',
				type: 'image/png'
			}
		]
	}
}
