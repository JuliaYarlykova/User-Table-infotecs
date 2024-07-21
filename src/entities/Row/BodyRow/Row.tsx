import { classNames } from '@/shared/lib/ClassNames/ClassNames'
import cls from './Row.module.scss'
import { Cell } from '@/shared/ui/Cell'
interface TR {
	cells?: string[]
	className?: string
}
export const Row = (props: TR) => {
	const { cells, className } = props
	return (
		<tr className={classNames(cls.tr, {}, [className])}>
			{cells && cells.map((cell, key) => <Cell text={cell} key={key} />)}
		</tr>
	)
}
