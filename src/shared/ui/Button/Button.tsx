import { classNames } from '@/shared/lib/ClassNames/ClassNames'
import { ButtonHTMLAttributes, ReactNode } from 'react'
import cls from './Button.module.scss'

type ButtonVariant = 'ghost' | 'primary'

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
	children?: ReactNode
	className?: string
	variant?: ButtonVariant
}

export const Button = (props: IButton) => {
	const {
		children,
		className,
		type = 'button',
		variant = 'primary',
		...otherProps
	} = props
	return (
		<button
			className={classNames(cls.button, {}, [className, cls[variant]])}
			type={type}
			{...otherProps}
		>
			{children}
		</button>
	)
}
