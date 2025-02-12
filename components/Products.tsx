'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const products = [
	{
		name: 'Chocolate Dream Cake',
		description:
			'Rich, moist chocolate cake layered with creamy chocolate ganache.',
		price: 32.99,
		image: '/placeholder.svg?height=300&width=400'
	},
	{
		name: 'Strawberry Bliss Tart',
		description:
			'Buttery tart shell filled with vanilla custard and fresh strawberries.',
		price: 24.99,
		image: '/placeholder.svg?height=300&width=400'
	},
	{
		name: 'Lemon Meringue Pie',
		description:
			'Tangy lemon filling topped with fluffy meringue in a flaky crust.',
		price: 28.99,
		image: '/placeholder.svg?height=300&width=400'
	},
	{
		name: 'Cinnamon Roll',
		description: 'Soft, gooey cinnamon roll with cream cheese frosting.',
		price: 3.99,
		image: '/placeholder.svg?height=300&width=400'
	},
	{
		name: 'Blueberry Muffin',
		description:
			'Moist muffin bursting with fresh blueberries and a crumb topping.',
		price: 2.99,
		image: '/placeholder.svg?height=300&width=400'
	},
	{
		name: 'Croissant',
		description: 'Flaky, buttery croissant with a golden-brown exterior.',
		price: 2.49,
		image: '/placeholder.svg?height=300&width=400'
	}
]

interface ProductCardProps {
	name: string
	description: string
	price: number
	image: string
}

function ProductCard({ name, description, price, image }: ProductCardProps) {
	return (
		<motion.div
			className="overflow-hidden rounded-lg bg-white shadow-lg transition-shadow duration-300 ease-in-out hover:shadow-xl"
			whileHover={{ y: -5 }}
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: '-50px' }}
			transition={{ duration: 0.5 }}
		>
			<div className="relative h-48 md:h-64">
				<Image
					src={image || '/placeholder.svg'}
					alt={name}
					layout="fill"
					objectFit="cover"
					className="transform transition-transform duration-300 ease-in-out hover:scale-110"
					loading="lazy"
					placeholder="blur"
					blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg=="
				/>
				<div className="absolute right-0 top-0 m-2 rounded-full bg-primary-500 px-2 py-1 text-sm font-semibold text-secondary-900">
					${price.toFixed(2)}
				</div>
			</div>
			<div className="p-4">
				<h3 className="mb-2 text-xl font-semibold text-secondary-800">
					{name}
				</h3>
				<p className="text-sm text-secondary-600">{description}</p>
			</div>
		</motion.div>
	)
}

export default function Products() {
	return (
		<section id="products" className="bg-background py-20">
			<div className="container mx-auto px-4">
				<motion.h2
					className="mb-12 text-center text-4xl font-bold text-secondary-800"
					initial={{ opacity: 0, y: -20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: '-50px' }}
					transition={{ duration: 0.5 }}
				>
					Our Delightful Creations
				</motion.h2>
				<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
					{products.map((product, index) => (
						<ProductCard key={index} {...product} />
					))}
				</div>
			</div>
		</section>
	)
}
