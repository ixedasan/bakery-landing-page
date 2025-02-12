'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

interface ProductCardProps {
	name: string
	description: string
	price: number
	image: string
}

export default function ProductCard({
	name,
	description,
	price,
	image
}: ProductCardProps) {
	return (
		<motion.div
			className="overflow-hidden rounded-lg bg-white shadow-lg transition-shadow duration-300 ease-in-out hover:shadow-xl"
			whileHover={{ y: -5 }}
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.5 }}
		>
			<div className="relative h-48 md:h-64">
				<Image
					src={image || '/placeholder.svg'}
					alt={name}
					layout="fill"
					objectFit="cover"
					className="transform transition-transform duration-300 ease-in-out hover:scale-110"
				/>
				<div className="absolute right-0 top-0 m-2 rounded-full bg-brown-600 px-2 py-1 text-sm font-semibold text-white">
					${price.toFixed(2)}
				</div>
			</div>
			<div className="p-4">
				<h3 className="mb-2 text-xl font-semibold text-brown-800">{name}</h3>
				<p className="text-sm text-brown-600">{description}</p>
			</div>
		</motion.div>
	)
}
