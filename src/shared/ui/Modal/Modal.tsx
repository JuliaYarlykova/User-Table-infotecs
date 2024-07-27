'use client'
import { AnimatePresence, motion } from 'framer-motion'
import { ReactNode } from 'react'

import cls from './Modal.module.scss'

interface IModal {
	isOpen: boolean
	onClose: () => void
	children: ReactNode
	button?: ReactNode
}

export const Modal = (props: IModal) => {
	const { isOpen, onClose, children } = props
	return (
		<>
			{isOpen && (
				<AnimatePresence>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.3, ease: 'easeInOut' }}
						onClick={onClose}
						className={cls.background}
					>
						<motion.div
							initial={{ opacity: 0, scale: 0 }}
							animate={{ opacity: 1, scale: 1 }}
							exit={{ opacity: 0, scale: 0 }}
							transition={{ duration: 0.3, ease: 'easeInOut' }}
							onClick={e => e.stopPropagation()}
							className={cls.Modal}
						>
							{children}
						</motion.div>
					</motion.div>
				</AnimatePresence>
			)}
		</>
	)
}
