'use client'

import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Hero() {
	const { scrollYProgress } = useScroll()
	const y = useTransform(scrollYProgress, [0, 1], [0, 300])

	return (
		<section
			id="home"
			className="relative flex h-screen items-center justify-center overflow-hidden"
		>
			<motion.div className="absolute inset-0 z-0" style={{ y }}>
				<Image
					src="/images/hero.png"
					alt="Bakery background"
					layout="fill"
					objectFit="cover"
					priority
					placeholder="blur"
					blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg=="
				/>
			</motion.div>
			<div className="absolute inset-0 z-10 bg-black opacity-40"></div>
			<div className="relative z-20 text-center">
				<motion.h1
					className="mb-4 text-4xl font-bold text-primary-100 md:text-6xl lg:text-7xl"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, ease: 'easeOut' }}
				>
					Bread Family
				</motion.h1>
				<motion.p
					className="mb-8 text-lg text-primary-50 md:text-xl lg:text-2xl"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
				>
					Indulge in our heavenly confections
				</motion.p>
				<motion.button
					className="rounded-full bg-primary-600 px-6 py-3 text-lg font-semibold text-secondary-900 transition-colors hover:bg-primary-700"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
				>
					Order Now
				</motion.button>
			</div>
		</section>
	)
}
