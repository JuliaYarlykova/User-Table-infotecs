import { classNames } from '@/shared/lib/ClassNames/ClassNames'

import cls from './Body.module.scss'
import { BRow } from '@/entities/Row'
import { User } from '@/pages/MainPage/model/types/user'

interface IHead {
	values?: User[]
	className?: string
}

export const Body = (props: IHead) => {
	const { values = [], className } = props
	return (
		<tbody className={classNames('', {}, [className])}>
			{values && values.map((user, key) => <BRow cells={user} key={key} />)}
		</tbody>
	)
}
