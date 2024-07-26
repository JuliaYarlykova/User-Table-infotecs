import { classNames } from '@/shared/lib/ClassNames/ClassNames'
import cls from './Row.module.scss'
import { Cell } from '@/shared/ui/Cell'
import { User } from '@/pages/MainPage/model/types/user'
import { useState } from 'react'
import { UserModal } from '@/features/User'
interface TR {
	cells?: User
	className?: string
}
export const BRow = (props: TR) => {
	const { cells, className } = props
	const [isOpen, setOpen] = useState(false)

	if (!cells) return null

	return (
		<>
			<tr
				className={classNames(cls.tr, {}, [className])}
				onClick={() => setOpen(true)}
			>
				<Cell text={cells?.lastName} />
				<Cell text={cells?.firstName} />

				<Cell text={cells?.age} />
				<Cell text={cells?.gender} />

				<Cell text={cells?.phone} />
				<Cell text={cells?.address.address} />
			</tr>
			<UserModal isOpen={isOpen} onOpen={setOpen} userId={cells.id} />
		</>
	)
}
