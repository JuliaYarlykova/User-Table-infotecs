//Компонент с логикой сортировки в определенных столбцах таблицы

import { useCallback, useRef } from 'react'
import { useDispatch } from 'react-redux'

import { classNames } from '@/shared/lib/ClassNames/ClassNames'
import { ActionSorted, userSlice } from '@/shared/store/user/User.slice'
import { ITitle } from '@/shared/types/title'
import { Button } from '@/shared/ui/Button'
import { Select } from '@/shared/ui/Select'

import cls from './Sort.module.scss'

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
	}, [dispatch, text.value])
	return (
		<div className={classNames(cls.wrapper, {}, [className])}>
			<Select options={OptionsList} name='sort' id='0' ref={ref} />
			<Button className={cls.btn} onClick={sortUser}>
				<span
					className={classNames('material-symbols-outlined', {}, [cls.icon])}
				>
					check
				</span>
			</Button>
		</div>
	)
}
