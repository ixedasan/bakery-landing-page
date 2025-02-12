'use client'

import { useCallback, useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navItems = [
	'Home',
	'About',
	'Products',
	'Testimonials',
	'Classes',
	'Gallery',
	'Ingredients',
	'Contact'
]

export default function Header() {
	const [isOpen, setIsOpen] = useState(false)

	const toggleMenu = () => setIsOpen(!isOpen)

	const scrollToSection = useCallback((sectionId: string) => {
		const section = document.getElementById(sectionId)
		if (section) {
			section.scrollIntoView({ behavior: 'smooth' })
		}
	}, [])

	const menuVariants = {
		closed: {
			opacity: 0,
			y: '-100%',
			transition: {
				duration: 0.5,
				staggerChildren: 0.1,
				staggerDirection: -1
			}
		},
		open: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.5,
				staggerChildren: 0.1,
				staggerDirection: 1
			}
		}
	}

	const menuItemVariants = {
		closed: { opacity: 0, y: -20 },
		open: { opacity: 1, y: 0 }
	}

	return (
		<header className="fixed left-0 right-0 top-0 z-50 bg-background bg-opacity-90 backdrop-blur-sm">
			<div className="container mx-auto flex items-center justify-between px-4 py-4">
				<motion.div
					className="flex items-center"
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
				>
					<Image
						src="/images/logo.png"
						alt="Bakery Logo"
						width={50}
						height={50}
					/>
					<span className="ml-2 text-2xl font-semibold text-secondary-800">
						Bread Family
					</span>
				</motion.div>
				<nav className="hidden lg:block">
					<ul className="flex space-x-6">
						{navItems.map(item => (
							<motion.li
								key={item}
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.9 }}
							>
								<button
									onClick={() => scrollToSection(item.toLowerCase())}
									className="text-secondary-700 transition-colors hover:text-secondary-900"
								>
									{item}
								</button>
							</motion.li>
						))}
					</ul>
				</nav>
				<motion.button
					className="text-secondary-800 lg:hidden"
					onClick={toggleMenu}
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.9 }}
				>
					{isOpen ? <X /> : <Menu />}
				</motion.button>
			</div>
			<AnimatePresence>
				{isOpen && (
					<motion.nav
						className="absolute left-0 right-0 top-full bg-background lg:hidden"
						initial="closed"
						animate="open"
						exit="closed"
						variants={menuVariants}
					>
						<ul className="flex flex-col items-center py-4">
							{navItems.map(item => (
								<motion.li
									key={item}
									variants={menuItemVariants}
									whileHover={{ scale: 1.1 }}
									whileTap={{ scale: 0.9 }}
									className="my-2"
								>
									<button
										onClick={() => {
											scrollToSection(item.toLowerCase())
											toggleMenu()
										}}
										className="text-secondary-700 transition-colors hover:text-secondary-900"
									>
										{item}
									</button>
								</motion.li>
							))}
						</ul>
					</motion.nav>
				)}
			</AnimatePresence>
		</header>
	)
}
