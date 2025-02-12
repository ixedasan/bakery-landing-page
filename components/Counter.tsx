'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import CountUp from 'react-countup'

interface CounterProps {
	end: number
	duration: number
	suffix?: string
	title: string
}

export default function Counter({
	end,
	duration,
	suffix = '',
	title
}: CounterProps) {
	const [inView, setInView] = useState(false)

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setInView(true)
				}
			},
			{ threshold: 0.5 }
		)

		const currentElement = document.getElementById(title)
		if (currentElement) {
			observer.observe(currentElement)
		}

		return () => {
			if (currentElement) {
				observer.unobserve(currentElement)
			}
		}
	}, [title])

	return (
		<motion.div
			id={title}
			className="text-center"
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
			transition={{ duration: 0.5 }}
		>
			<div className="mb-2 text-4xl font-bold text-brown-700">
				{inView && <CountUp end={end} duration={duration} suffix={suffix} />}
			</div>
			<div className="text-lg text-brown-600">{title}</div>
		</motion.div>
	)
}
