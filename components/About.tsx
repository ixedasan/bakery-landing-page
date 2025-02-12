'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

import Counter from './Counter'

export default function About() {
	return (
		<section id="about" className="bg-primary-50 py-20">
			<div className="container mx-auto px-4">
				<div className="flex flex-col items-center lg:flex-row">
					<motion.div
						className="mb-10 lg:mb-0 lg:w-1/2 lg:pr-10"
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
					>
						<h2 className="mb-6 text-4xl font-bold text-secondary-800">
							Our Sweet Story
						</h2>
						<p className="mb-6 text-lg text-secondary-700">
							Bread Family has been serving heavenly treats since 1990. Our
							passion for baking and dedication to quality ingredients make
							every bite a memorable experience. From our family to yours, we
							pour love into every recipe, ensuring that each pastry, cake, and
							bread brings joy to your table.
						</p>
						<p className="mb-6 text-lg text-secondary-700">
							Our team of skilled bakers combines time-honored traditions with
							innovative techniques to create a diverse array of delectable
							goods. Whether you're celebrating a special occasion or simply
							treating yourself, Sweet Delights is here to make your moments
							sweeter.
						</p>
					</motion.div>
					<motion.div
						className="lg:w-1/2"
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
					>
						<div className="relative h-96 overflow-hidden rounded-lg">
							<Image
								src="/placeholder.svg?height=600&width=800"
								alt="Bakery Interior"
								layout="fill"
								objectFit="cover"
								className="rounded-lg"
							/>
						</div>
					</motion.div>
				</div>
				<div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
					<Counter
						end={30}
						duration={2.5}
						suffix="+"
						title="Years of Experience"
					/>
					<Counter
						end={100}
						duration={2.5}
						suffix="+"
						title="Delightful Products"
					/>
					<Counter
						end={10000}
						duration={2.5}
						suffix="+"
						title="Happy Customers"
					/>
				</div>
			</div>
		</section>
	)
}
