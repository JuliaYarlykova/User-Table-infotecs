import { classNames } from '@/shared/lib/ClassNames/ClassNames'
import cls from './Cell.module.scss'
interface TD {
	text?: string
	className?: string
}
export const Cell = (props: TD) => {
	const { text, className } = props
	return <td className={classNames(cls.th, {}, [className])}>{text}</td>
}
