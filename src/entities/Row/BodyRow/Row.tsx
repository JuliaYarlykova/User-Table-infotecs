import { classNames } from '@/shared/lib/ClassNames/ClassNames'
import cls from './Row.module.scss'
import { Cell } from '@/shared/ui/Cell'
import { User } from '@/pages/MainPage/model/types/user'
interface TR {
	cells?: User
	className?: string
}
export const Row = (props: TR) => {
	const { cells, className } = props
	return (
		<tr className={classNames(cls.tr, {}, [className])}>
			<Cell text={cells?.lastName} />
			<Cell text={cells?.firstName} />

			<Cell text={cells?.age} />
			<Cell text={cells?.gender} />

			<Cell text={cells?.phone} />
			<Cell text={cells?.address.address} />
		</tr>
	)
}
