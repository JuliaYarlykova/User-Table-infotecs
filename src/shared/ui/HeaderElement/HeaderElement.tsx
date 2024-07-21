import { classNames } from '@/shared/lib/ClassNames/ClassNames'
import cls from './HeaderElement.module.scss'
interface TH {
	text?: string
	className?: string
}
export const HeaderElement = (props: TH) => {
	const { text, className } = props
	return <th className={classNames(cls.th, {}, [className])}>{text}</th>
}
