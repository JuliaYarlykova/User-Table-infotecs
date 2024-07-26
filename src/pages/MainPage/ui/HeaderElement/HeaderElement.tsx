import { classNames } from '@/shared/lib/ClassNames/ClassNames'
import cls from './HeaderElement.module.scss'
import { SearchModal } from '@/features/Search'
import { useState } from 'react'
import { Sort } from '@/features/Sort'
import { Button } from '@/shared/ui/Button'
import { ITitle } from '../../model/types/title'
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
				<Button
					className={classNames(cls.btn, {}, [])}
					onClick={() => setOpen(true)}
					variant='ghost'
				>
					<span
						className={classNames('material-symbols-outlined', {}, [cls.icon])}
					>
						search
					</span>
				</Button>
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
