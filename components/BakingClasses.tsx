'use client'

import { motion } from 'framer-motion'

const classes = [
	{
		name: 'Artisan Bread Making',
		description:
			'Learn the art of crafting delicious artisan breads from scratch.',
		day: 'Mondays',
		time: '6:00 PM - 8:00 PM'
	},
	{
		name: 'French Pastry Masterclass',
		description:
			'Master the techniques behind classic French pastries like croissants and éclairs.',
		day: 'Wednesdays',
		time: '7:00 PM - 9:00 PM'
	},
	{
		name: 'Cake Decorating 101',
		description:
			'Discover the basics of cake decorating, from frosting techniques to fondant work.',
		day: 'Saturdays',
		time: '2:00 PM - 4:00 PM'
	}
]

export default function BakingClasses() {
	return (
		<section id="classes" className="bg-primary-50 py-20">
			<div className="container mx-auto px-4">
				<motion.h2
					className="mb-12 text-center text-4xl font-bold text-secondary-800"
					initial={{ opacity: 0, y: -20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
				>
					Baking Classes
				</motion.h2>
				<div className="grid grid-cols-1 gap-8 md:grid-cols-3">
					{classes.map((cls, index) => (
						<motion.div
							key={index}
							className="rounded-lg bg-white p-6 shadow-lg"
							initial={{ opacity: 0, scale: 0.8 }}
							whileInView={{ opacity: 1, scale: 1 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
						>
							<motion.h3
								className="mb-4 text-2xl font-semibold text-secondary-800"
								initial={{ y: -20, opacity: 0 }}
								whileInView={{ y: 0, opacity: 1 }}
								transition={{ delay: 0.2 + index * 0.1 }}
							>
								{cls.name}
							</motion.h3>
							<motion.p
								className="mb-4 text-secondary-600"
								initial={{ y: 20, opacity: 0 }}
								whileInView={{ y: 0, opacity: 1 }}
								transition={{ delay: 0.3 + index * 0.1 }}
							>
								{cls.description}
							</motion.p>
							<motion.div
								className="text-secondary-700"
								initial={{ opacity: 0 }}
								whileInView={{ opacity: 1 }}
								transition={{ delay: 0.4 + index * 0.1 }}
							>
								<p>
									<strong>Day:</strong> {cls.day}
								</p>
								<p>
									<strong>Time:</strong> {cls.time}
								</p>
							</motion.div>
							<motion.button
								className="mt-4 rounded-full bg-primary-500 px-4 py-2 text-white transition-colors hover:bg-primary-600"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								initial={{ opacity: 0 }}
								whileInView={{ opacity: 1 }}
								transition={{ delay: 0.5 + index * 0.1 }}
							>
								Sign Up
							</motion.button>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	)
}
