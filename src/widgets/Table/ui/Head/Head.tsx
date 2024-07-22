import { classNames } from '@/shared/lib/ClassNames/ClassNames'

import cls from './Head.module.scss'
import { HRow } from '@/entities/Row'

export interface ITitle {
	title: string
	value: string
}

interface IHead {
	className?: string
	titles?: ITitle[]
}

export const Head = (props: IHead) => {
	const { className, titles } = props
	return (
		<thead className={classNames(cls.head, {}, [className])}>
			<HRow cells={titles} />
		</thead>
	)
}
