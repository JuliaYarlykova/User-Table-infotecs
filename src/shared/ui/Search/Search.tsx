import { ChangeEvent, forwardRef, InputHTMLAttributes, useState } from 'react'

import { classNames } from '@/shared/lib/ClassNames/ClassNames'

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

// eslint-disable-next-line react/display-name
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
