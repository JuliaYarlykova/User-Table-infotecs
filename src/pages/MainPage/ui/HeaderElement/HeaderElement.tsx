import { classNames } from '@/shared/lib/ClassNames/ClassNames'
import cls from './HeaderElement.module.scss'
import { ITitle } from '@/widgets/Table/ui/Head/Head'
import { SearchModal } from '@/features/Search'
import { useState } from 'react'
import { Sort } from '@/features/Sort'
interface TH {
	text?: ITitle
	className?: string
}
export const HeaderElement = (props: TH) => {
	const { text, className } = props
	const [isOpen, setOpen] = useState(false)
	return (
		<th className={classNames(cls.th, {}, [className])}>
			<div className={cls.wrapper}>
				<button className={cls.btn} onClick={() => setOpen(true)}>
					<span
						className={classNames('material-symbols-outlined', {}, [cls.icon])}
					>
						search
					</span>
				</button>
				{text?.title}
				<SearchModal text={text} isOpen={isOpen} onOpen={setOpen} />
				{(text?.title === 'Фамилия' ||
					text?.title === 'Имя' ||
					text?.title === 'Возраст') && (
					<Sort className={cls.sort} text={text} />
				)}
			</div>
		</th>
	)
}
