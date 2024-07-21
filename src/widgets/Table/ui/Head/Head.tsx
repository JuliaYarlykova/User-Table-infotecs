import { classNames } from '@/shared/lib/ClassNames/ClassNames'

import cls from './Head.module.scss'
import { HRow } from '@/entities/Row'

interface IHead {
	className?: string
	titles?: string[]
}

export const Head = (props: IHead) => {
	const { className, titles } = props
	return (
		<thead className={classNames(cls.head, {}, [className])}>
			<HRow cells={titles} />
		</thead>
	)
}
