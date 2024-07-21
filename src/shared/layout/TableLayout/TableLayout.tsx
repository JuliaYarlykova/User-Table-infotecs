import { classNames } from '@/shared/lib/ClassNames/ClassNames'
import { ReactNode } from 'react'

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
			<div className={cls.head}>{head}</div>
			<div className={cls.body}>{body}</div>
			<div className={cls.foot}>{foot}</div>
		</table>
	)
}
