//Строка таблицы, обращается к ячейкам
import { HeaderElement } from '../HeaderElement/HeaderElement'

import { classNames } from '@/shared/lib/ClassNames/ClassNames'
import { ITitle } from '@/shared/types/title'

import cls from './Row.module.scss'
interface TR {
	cells?: ITitle[]
	className?: string
}
export const HRow = (props: TR) => {
	const { cells, className } = props
	return (
		<tr className={classNames(cls.tr, {}, [className])}>
			{cells &&
				cells.map((cell, key) => <HeaderElement text={cell} key={key} />)}
		</tr>
	)
}
