'use client'

import { motion } from 'framer-motion'
import { Egg, Leaf, Milk, Wheat } from 'lucide-react'

const ingredients = [
	{
		name: 'Organic Flour',
		description:
			'We use only the finest organic, locally-sourced flour for all our baked goods.',
		icon: Wheat
	},
	{
		name: 'Farm-Fresh Eggs',
		description:
			'Our eggs come from free-range chickens raised on nearby farms.',
		icon: Egg
	},
	{
		name: 'Organic Dairy',
		description:
			'We use organic milk, cream, and butter for rich, creamy flavors.',
		icon: Milk
	},
	{
		name: 'Natural Sweeteners',
		description:
			'We prioritize natural sweeteners like honey and maple syrup when possible.',
		icon: Leaf
	}
]

export default function Ingredients() {
	return (
		<section id="ingredients" className="bg-primary-50 py-20">
			<div className="container mx-auto px-4">
				<motion.h2
					className="mb-12 text-center text-4xl font-bold text-secondary-800"
					initial={{ opacity: 0, y: -20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
				>
					Quality Ingredients
				</motion.h2>
				<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
					{ingredients.map((ingredient, index) => (
						<motion.div
							key={index}
							className="rounded-lg bg-white p-6 text-center shadow-lg"
							initial={{ opacity: 0, y: 50, rotateX: -15 }}
							whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
						>
							<motion.div
								initial={{ scale: 0 }}
								whileInView={{ scale: 1 }}
								transition={{
									delay: 0.2 + index * 0.1,
									type: 'spring',
									stiffness: 260,
									damping: 20
								}}
							>
								<ingredient.icon className="mx-auto mb-4 h-16 w-16 text-primary-500" />
							</motion.div>
							<motion.h3
								className="mb-2 text-xl font-semibold text-secondary-800"
								initial={{ opacity: 0 }}
								whileInView={{ opacity: 1 }}
								transition={{ delay: 0.3 + index * 0.1 }}
							>
								{ingredient.name}
							</motion.h3>
							<motion.p
								className="text-secondary-600"
								initial={{ opacity: 0 }}
								whileInView={{ opacity: 1 }}
								transition={{ delay: 0.4 + index * 0.1 }}
							>
								{ingredient.description}
							</motion.p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	)
}
