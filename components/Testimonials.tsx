import { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const testimonials = [
	{
		name: 'Sarah Johnson',
		quote:
			'The cakes from Sweet Delights are absolutely divine! They made my wedding day extra special.',
		image: '/placeholder.svg'
	},
	{
		name: 'Mike Thompson',
		quote:
			"I've never tasted croissants this good outside of Paris. A little piece of heaven in every bite!",
		image: '/placeholder.svg'
	},
	{
		name: 'Emily Chen',
		quote:
			'Their gluten-free options are amazing. Finally, a bakery that caters to all dietary needs without compromising on taste!',
		image: '/placeholder.svg'
	},
	{
		name: 'David Park',
		quote:
			'The attention to detail in every pastry is remarkable. Worth every penny!',
		image: '/placeholder.svg'
	},
	{
		name: 'Lisa Martinez',
		quote:
			'The best bakery in town! Their sourdough bread is absolutely perfect.',
		image: '/placeholder.svg'
	}
]

const InfiniteTestimonials = () => {
	const [currentIndex, setCurrentIndex] = useState(0)
	const [isHovered, setIsHovered] = useState(false)

	useEffect(() => {
		let timer: NodeJS.Timeout | undefined
		if (!isHovered) {
			timer = setInterval(() => {
				setCurrentIndex(prevIndex => (prevIndex + 1) % testimonials.length)
			}, 3000)
		}

		return () => clearInterval(timer)
	}, [isHovered])

	const visibleTestimonials = [
		...testimonials.slice(currentIndex),
		...testimonials.slice(0, currentIndex)
	]

	return (
		<div className="w-full bg-cream-100 py-16">
			<div className="mx-auto max-w-6xl px-4">
				<h2 className="mb-12 text-center text-4xl font-bold text-secondary-800">
					What Our Customers Say
				</h2>

				<div
					className="relative overflow-hidden"
					onMouseEnter={() => setIsHovered(true)}
					onMouseLeave={() => setIsHovered(false)}
				>
					<div className="flex gap-6">
						{visibleTestimonials.slice(0, 3).map((testimonial, index) => (
							<motion.div
								key={`${testimonial.name}-${index}`}
								className="w-full flex-shrink-0 rounded-xl bg-cream-200 p-6 shadow-lg transition-shadow hover:shadow-xl"
								initial={{ opacity: 0, x: 100 }}
								animate={{ opacity: 1, x: 0 }}
								exit={{ opacity: 0, x: -100 }}
								transition={{ duration: 0.5 }}
							>
								<div className="mb-6 flex items-center gap-4">
									<div className="h-16 w-16 overflow-hidden rounded-full border-2 border-primary-300">
										<Image
											src={testimonial.image}
											alt={testimonial.name}
											width={64}
											height={64}
											className="h-full w-full object-cover"
										/>
									</div>
									<div>
										<h3 className="text-xl font-semibold text-secondary-700">
											{testimonial.name}
										</h3>
									</div>
								</div>

								<p className="text-secondary-600">"{testimonial.quote}"</p>

								<div className="mt-4 flex justify-end">
									<motion.svg
										className="h-8 w-8 text-primary-600"
										initial={{ scale: 0 }}
										animate={{ scale: 1 }}
										transition={{ delay: 0.3 }}
										viewBox="0 0 24 24"
										fill="currentColor"
									>
										<path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
									</motion.svg>
								</div>
							</motion.div>
						))}
					</div>

					<div className="mt-8 flex justify-center gap-2">
						{testimonials.map((_, index) => (
							<button
								key={index}
								className={`h-2 rounded-full transition-all ${
									index === currentIndex
										? 'w-4 bg-primary-500'
										: 'w-2 bg-secondary-200 hover:bg-primary-400'
								}`}
								onClick={() => setCurrentIndex(index)}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default InfiniteTestimonials
