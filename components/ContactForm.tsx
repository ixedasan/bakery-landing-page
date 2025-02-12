'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useForm, type SubmitHandler } from 'react-hook-form'

type Inputs = {
	name: string
	email: string
	message: string
}

export default function ContactForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm<Inputs>()
	const [isSubmitted, setIsSubmitted] = useState(false)

	const onSubmit: SubmitHandler<Inputs> = data => {
		console.log(data)
		setIsSubmitted(true)
		reset()
		setTimeout(() => setIsSubmitted(false), 5000)
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
			<AnimatePresence>
				{isSubmitted && (
					<motion.div
						initial={{ opacity: 0, y: -50 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -50 }}
						className="relative rounded border border-green-400 bg-green-100 px-4 py-3 text-green-700"
					>
						Thank you for your message! We'll get back to you soon.
					</motion.div>
				)}
			</AnimatePresence>
			<div className="relative">
				<input
					{...register('name', { required: 'Name is required' })}
					className="peer w-full rounded-md border px-3 py-2 text-brown-800 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-brown-600"
					placeholder="Name"
				/>
				<label className="peer-placeholder-shown:text-brown-400 absolute -top-2.5 left-3 bg-cream-200 px-1 text-sm text-brown-600 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-brown-600">
					Name
				</label>
				{errors.name && (
					<span className="text-sm text-red-500">{errors.name.message}</span>
				)}
			</div>
			<div className="relative">
				<input
					{...register('email', {
						required: 'Email is required',
						pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' }
					})}
					className="peer w-full rounded-md border px-3 py-2 text-brown-800 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-brown-600"
					placeholder="Email"
				/>
				<label className="peer-placeholder-shown:text-brown-400 absolute -top-2.5 left-3 bg-cream-200 px-1 text-sm text-brown-600 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-brown-600">
					Email
				</label>
				{errors.email && (
					<span className="text-sm text-red-500">{errors.email.message}</span>
				)}
			</div>
			<div className="relative">
				<textarea
					{...register('message', { required: 'Message is required' })}
					className="peer w-full rounded-md border px-3 py-2 text-brown-800 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-brown-600"
					rows={4}
					placeholder="Message"
				></textarea>
				<label className="peer-placeholder-shown:text-brown-400 absolute -top-2.5 left-3 bg-cream-200 px-1 text-sm text-brown-600 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-brown-600">
					Message
				</label>
				{errors.message && (
					<span className="text-sm text-red-500">{errors.message.message}</span>
				)}
			</div>
			<motion.button
				type="submit"
				className="w-full rounded-md bg-brown-600 px-4 py-2 text-white transition-colors hover:bg-brown-700"
				whileHover={{ scale: 1.05 }}
				whileTap={{ scale: 0.95 }}
			>
				Send Message
			</motion.button>
		</form>
	)
}
