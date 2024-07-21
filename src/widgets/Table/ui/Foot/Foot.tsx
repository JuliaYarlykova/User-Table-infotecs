import { classNames } from '@/shared/lib/ClassNames/ClassNames'
import { ReactNode } from 'react'

import cls from './Head.module.scss'

interface IFoot {
	children?: ReactNode
	className?: string
}

export const Foot = (props: IFoot) => {
	const { children, className } = props
	return <thead className={classNames('', {}, [className])}></thead>
}
