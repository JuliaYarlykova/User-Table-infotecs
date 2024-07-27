import { ReactNode } from 'react'

import { classNames } from '@/shared/lib/ClassNames/ClassNames'

import cls from './TableLayout.module.scss'

interface ITable {
	head: ReactNode
	body: ReactNode
	foot: ReactNode
	className?: string
}

export const Table = (props: ITable) => {
	const { head, body, foot, className } = props
	return (
		<table className={classNames(cls.table, {}, [className])}>
			<>{head}</>
			<>{body}</>
			<>{foot}</>
		</table>
	)
}
