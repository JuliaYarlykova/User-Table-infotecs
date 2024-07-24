import { forwardRef, SelectHTMLAttributes } from 'react'
import cls from './Select.module.scss'
import { OptionsType } from '@/features/Sort/ui/Sort'

type HTMLSelectProps = Omit<
	SelectHTMLAttributes<HTMLSelectElement>,
	'value' | 'onChange'
>
interface ISelect extends HTMLSelectProps {
	options?: OptionsType[]
	classname?: string
	name?: string
	id?: string
	value?: string
	onChange?: () => void
}

export const Select = forwardRef<HTMLSelectElement, ISelect>((props, ref) => {
	const { options, classname, name, id } = props
	return (
		<select name={name} id={id} className={cls.select} ref={ref}>
			{options &&
				options.map((option, key) => (
					<option key={key} value={option.value}>
						{option.text}
					</option>
				))}
		</select>
	)
})
