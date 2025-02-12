'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

interface InstagramPost {
	id: string
	media_url: string
	permalink: string
	caption?: string
}

export default function BakeryGallery() {
	const [posts, setPosts] = useState<InstagramPost[]>([])
	const [isLoading, setIsLoading] = useState(true)
	const [error, setError] = useState<string | null>(null)

	useEffect(() => {
		async function fetchInstagramPosts() {
			try {
				const response = await fetch('/api/instagram')
				if (!response.ok) {
					throw new Error('Failed to fetch Instagram posts')
				}
				const data = await response.json()
				setPosts(data.data.slice(0, 6)) // Limit to 6 posts
			} catch (err) {
				setError('Failed to load Instagram posts. Please try again later.')
			} finally {
				setIsLoading(false)
			}
		}

		fetchInstagramPosts()
	}, [])

	if (isLoading) {
		return (
			<div className="flex h-96 items-center justify-center">
				<div className="h-32 w-32 animate-spin rounded-full border-b-2 border-t-2 border-primary-600"></div>
			</div>
		)
	}

	if (error) {
		return <div className="p-4 text-center text-red-600">{error}</div>
	}

	return (
		<section id="gallery" className="bg-primary-100 py-20">
			<div className="container mx-auto px-4">
				<motion.h2
					className="mb-12 text-center text-4xl font-bold text-secondary-800"
					initial={{ opacity: 0, y: -20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
				>
					Our Bakery Gallery
				</motion.h2>
				<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
					{posts.map((post, index) => (
						<motion.div
							key={post.id}
							className="relative h-64 overflow-hidden rounded-lg"
							initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
							whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
						>
							<Image
								src={post.media_url || '/placeholder.svg'}
								alt={post.caption || `Instagram post ${index + 1}`}
								layout="fill"
								objectFit="cover"
								className="transform transition-transform duration-300 ease-in-out hover:scale-110"
							/>
							<motion.a
								href={post.permalink}
								target="_blank"
								rel="noopener noreferrer"
								className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 hover:opacity-100"
								initial={{ opacity: 0 }}
								whileHover={{ opacity: 1 }}
							>
								<span className="text-lg font-semibold text-white">
									View on Instagram
								</span>
							</motion.a>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	)
}
