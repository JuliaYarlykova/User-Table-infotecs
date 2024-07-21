import { ReactNode } from 'react'

import cls from './Page.module.scss'
import { classNames } from '@/shared/lib/ClassNames/ClassNames'

interface PageProps {
	className?: string
	children: ReactNode
}

export const Page = (props: PageProps) => {
	const { className, children } = props

	return (
		<main className={classNames(cls.Page, {}, [className])}>{children}</main>
	)
}
