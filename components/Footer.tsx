'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Facebook, Instagram, Twitter } from 'lucide-react'
import { useForm, type SubmitHandler } from 'react-hook-form'

type Inputs = {
	email: string
}

export default function Footer() {
	const { scrollYProgress } = useScroll()
	const y = useTransform(scrollYProgress, [0, 1], [0, -50])

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm<Inputs>()
	const [isSubscribed, setIsSubscribed] = useState(false)

	const onSubmit: SubmitHandler<Inputs> = data => {
		console.log(data)
		setIsSubscribed(true)
		reset()
		setTimeout(() => setIsSubscribed(false), 5000)
	}

	return (
		<footer className="relative overflow-hidden bg-brown-800 py-16 text-cream-100">
			<motion.div
				className="absolute inset-0 z-0"
				style={{
					backgroundImage: "url('/images/hero.png')",
					backgroundRepeat: 'repeat',
					filter: 'brightness(30%)'
				}}
			/>

			<div className="container relative z-10 mx-auto px-4">
				<div className="grid grid-cols-1 gap-12 md:grid-cols-3">
					<div>
						<h3 className="mb-4 text-2xl font-semibold">Bread Family</h3>
						<p className="mb-4">Bringing sweetness to your life since 1990.</p>
						<div className="flex space-x-4">
							<motion.a
								href="https://facebook.com"
								target="_blank"
								rel="noopener noreferrer"
								whileHover={{ scale: 1.2, rotate: 5 }}
								whileTap={{ scale: 0.9 }}
							>
								<Facebook className="h-6 w-6" />
							</motion.a>
							<motion.a
								href="https://instagram.com"
								target="_blank"
								rel="noopener noreferrer"
								whileHover={{ scale: 1.2, rotate: 5 }}
								whileTap={{ scale: 0.9 }}
							>
								<Instagram className="h-6 w-6" />
							</motion.a>
							<motion.a
								href="https://twitter.com"
								target="_blank"
								rel="noopener noreferrer"
								whileHover={{ scale: 1.2, rotate: 5 }}
								whileTap={{ scale: 0.9 }}
							>
								<Twitter className="h-6 w-6" />
							</motion.a>
						</div>
					</div>
					<div>
						<h3 className="mb-4 text-2xl font-semibold">Contact Us</h3>
						<p className="mb-2">123 Bakery Street</p>
						<p className="mb-2">Sweetville, CA 12345</p>
						<p className="mb-2">Phone: (123) 456-7890</p>
						<p>Email: info@sweetdelights.com</p>
					</div>
					<div>
						<h3 className="mb-4 text-2xl font-semibold">Newsletter</h3>
						<p className="mb-4">
							Subscribe to get special offers and delicious updates!
						</p>
						<form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
							<div className="relative">
								<input
									{...register('email', {
										required: 'Email is required',
										pattern: {
											value: /^\S+@\S+$/i,
											message: 'Invalid email address'
										}
									})}
									className="w-full rounded-md bg-cream-100 px-3 py-2 text-brown-800 focus:outline-none focus:ring-2 focus:ring-brown-600"
									placeholder="Your email"
								/>
								{errors.email && (
									<span className="text-sm text-red-400">
										{errors.email.message}
									</span>
								)}
							</div>
							<motion.button
								type="submit"
								className="rounded-md bg-cream-100 px-4 py-2 text-brown-800 transition-colors hover:bg-cream-200"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								Subscribe
							</motion.button>
						</form>
						{isSubscribed && (
							<motion.p
								initial={{ opacity: 0, y: -20 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -20 }}
								className="mt-2 text-green-400"
							>
								Thank you for subscribing!
							</motion.p>
						)}
					</div>
				</div>
				<div className="mt-12 border-t border-cream-100/30 pt-8 text-center">
					<p>&copy; 2025 Bread Family. All rights reserved.</p>
					<div className="mt-4">
						<Link href="/privacy-policy" className="mr-4 hover:underline">
							Privacy Policy
						</Link>
						<Link href="/terms-of-service" className="hover:underline">
							Terms of Service
						</Link>
					</div>
				</div>
			</div>
		</footer>
	)
}
