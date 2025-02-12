'use client'

import { useEffect, useState, type PropsWithChildren } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import About from '@/components/About'
import BakeryGallery from '@/components/BakeryGallery'
import BakingClasses from '@/components/BakingClasses'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Ingredients from '@/components/Ingredients'
import LoadingAnimation from '@/components/LoadingAnimation'
import Products from '@/components/Products'
import InfiniteTestimonials from '@/components/Testimonials'

function Section({ children, id }: PropsWithChildren<{ id: string }>) {
	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.1
	})

	return (
		<motion.section
			id={id}
			ref={ref}
			initial={{ opacity: 0, y: 50 }}
			animate={inView ? { opacity: 1, y: 0 } : {}}
			transition={{ duration: 0.5 }}
		>
			{children}
		</motion.section>
	)
}

export default function Home() {
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsLoading(false)
		}, 1000)

		return () => clearTimeout(timer)
	}, [])

	return (
		<AnimatePresence>
			{isLoading ? (
				<LoadingAnimation key="loading" />
			) : (
				<motion.div
					key="content"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.5 }}
					className="min-h-screen bg-cream-100"
				>
					<Header />
					<Hero />
					<Section id="about">
						<About />
					</Section>
					<Section id="products">
						<Products />
					</Section>
					<Section id="testimonials">
						<InfiniteTestimonials />
					</Section>
					<Section id="classes">
						<BakingClasses />
					</Section>
					<Section id="gallery">
						<BakeryGallery />
					</Section>
					<Section id="ingredients">
						<Ingredients />
					</Section>
					<Section id="contact">
						<Contact />
					</Section>
					<Footer />
				</motion.div>
			)}
		</AnimatePresence>
	)
}
