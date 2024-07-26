import { classNames } from '@/shared/lib/ClassNames/ClassNames'
import cls from './Row.module.scss'
import { HeaderElement } from '../HeaderElement/HeaderElement'
import { ITitle } from '../../model/types/title'
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
