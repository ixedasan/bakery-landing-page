'use client'

import { useEffect, useState } from 'react'
import Lottie from 'lottie-react'

import bakeryAnimation from '../public/animations/bakery-animation.json'

export default function LoadingAnimation() {
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsLoading(false)
		}, 1000) // Adjust this value to control how long the animation shows

		return () => clearTimeout(timer)
	}, [])

	if (!isLoading) return null

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center bg-cream-100">
			<div className="h-64 w-64">
				<Lottie animationData={bakeryAnimation} loop={true} />
			</div>
		</div>
	)
}
