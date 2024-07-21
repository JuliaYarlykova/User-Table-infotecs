import { classNames } from '@/shared/lib/ClassNames/ClassNames'
import cls from './Cell.module.scss'
interface TD {
	text?: string | number
	className?: string
}
export const Cell = (props: TD) => {
	const { text, className } = props
	return <td className={classNames(cls.td, {}, [className])}>{text}</td>
}
