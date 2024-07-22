import { classNames } from '@/shared/lib/ClassNames/ClassNames'
import cls from './Row.module.scss'
import { HeaderElement } from '@/features/HeaderElement'
import { ITitle } from '@/widgets/Table/ui/Head/Head'
interface TR {
	cells?: ITitle[]
	className?: string
}
export const Row = (props: TR) => {
	const { cells, className } = props
	return (
		<tr className={classNames(cls.tr, {}, [className])}>
			{cells &&
				cells.map((cell, key) => <HeaderElement text={cell} key={key} />)}
		</tr>
	)
}
