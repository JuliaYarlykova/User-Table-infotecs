import { forwardRef, SelectHTMLAttributes } from 'react'

import cls from './Select.module.scss'

enum ActionSorted {
	UP = 'up',
	DOWN = 'down',
	DEFAULT = 'default',
}

export type OptionsType = {
	text: string
	value: ActionSorted
}

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

// eslint-disable-next-line react/display-name
export const Select = forwardRef<HTMLSelectElement, ISelect>((props, ref) => {
	const { options, name, id } = props
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
