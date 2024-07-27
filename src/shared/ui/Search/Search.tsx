import { classNames } from '@/shared/lib/ClassNames/ClassNames'
import { ChangeEvent, forwardRef, InputHTMLAttributes, useState } from 'react'

import cls from './Search.module.scss'
type HTMLInputProps = Omit<
	InputHTMLAttributes<HTMLInputElement>,
	'value' | 'onChange'
>

interface ISearch extends HTMLInputProps {
	className?: string
	value?: string | number
	onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

export const Search = forwardRef<HTMLInputElement, ISearch>((props, ref) => {
	const { className, onChange } = props
	const [localValue, setLocalValue] = useState<string>('')

	const setValue = () => localValue

	const onChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
		setLocalValue(event.target.value)
		onChange?.(event)
	}
	return (
		<input
			type='text'
			placeholder='Введите текст'
			className={classNames(cls.input, {}, [className])}
			ref={ref}
			value={setValue()}
			onChange={onChangeValue}
		/>
	)
})
