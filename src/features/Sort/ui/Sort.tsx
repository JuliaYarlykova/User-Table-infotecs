import { classNames } from '@/shared/lib/ClassNames/ClassNames'
import { Select } from '@/shared/ui/Select'
import { useDispatch } from 'react-redux'

import cls from './Sort.module.scss'
import { useCallback, useRef } from 'react'
import { ActionSorted, userSlice } from '@/shared/store/user/User.slice'
import { ITitle } from '@/widgets/Table/ui/Head/Head'

export type OptionsType = {
	text: string
	value: ActionSorted
}

const OptionsList = [
	{
		text: 'По возрастанию',
		value: ActionSorted.UP,
	},
	{
		text: 'По убыванию',
		value: ActionSorted.DOWN,
	},
	{
		text: 'Без сортировки',
		value: ActionSorted.DEFAULT,
	},
]
interface ISort {
	className?: string
	text: ITitle
}
export const Sort = (props: ISort) => {
	const { className, text } = props
	const dispatch = useDispatch()
	const ref = useRef<HTMLSelectElement>(null)

	const sortUser = useCallback(() => {
		dispatch(
			userSlice.actions.sortedUserUp({
				payload: text.value,
				type: ref.current?.value as ActionSorted,
			})
		)
	}, [dispatch])
	return (
		<div className={classNames(cls.wrapper, {}, [className])}>
			<Select options={OptionsList} name='sort' id='0' ref={ref} />
			<button className={cls.btn} onClick={sortUser}>
				<span
					className={classNames('material-symbols-outlined', {}, [cls.icon])}
				>
					check
				</span>
			</button>
		</div>
	)
}
