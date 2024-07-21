import { classNames } from '@/shared/lib/ClassNames/ClassNames'

import cls from './Body.module.scss'
import { BRow } from '@/entities/Row'

interface IHead {
	values?: string[]
	className?: string
}

export const Body = (props: IHead) => {
	const { values, className } = props
	return (
		<tbody className={classNames('', {}, [className])}>
			<BRow cells={values} />
		</tbody>
	)
}
