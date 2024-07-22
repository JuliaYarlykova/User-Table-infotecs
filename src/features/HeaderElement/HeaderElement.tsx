import { classNames } from '@/shared/lib/ClassNames/ClassNames'
import cls from './HeaderElement.module.scss'
import { Search } from '@/shared/ui/Search'
import { Modal } from '@/shared/ui/Modal'
import { useCallback, useEffect, useRef, useState } from 'react'
import { searchApi } from './api/searchApi'
import { searchSlice } from '@/shared/store/user/UserSearch.slice'
import { ITitle } from '@/widgets/Table/ui/Head/Head'
import { useDispatch } from 'react-redux'
interface TH {
	text?: ITitle
	className?: string
}
export const HeaderElement = (props: TH) => {
	const { text, className } = props
	const [isOpen, setOpen] = useState(false)
	const dispatch = useDispatch()
	const [dataValue, setData] = useState<{
		value: string | undefined
		key: string | undefined
	}>({
		value: undefined,
		key: text?.value,
	})
	const ref = useRef<HTMLInputElement>(null)

	const { data, refetch } = searchApi.useSearchValueQuery(dataValue, {
		skip: !dataValue.value,
	})
	console.log(data)
	const sendData = useCallback(() => {
		setData({
			value: ref.current?.value,
			key: text?.value,
		})
	}, [ref.current?.value])

	useEffect(() => {
		if (dataValue.value) {
			refetch()
		}
	}, [dataValue.value, dispatch])

	useEffect(() => {
		dispatch(searchSlice.actions.sortedUser(data))
		setOpen(false)
	}, [data])

	return (
		<th className={classNames(cls.th, {}, [className])}>
			<button className={cls.btn} onClick={() => setOpen(true)}>
				<span
					className={classNames('material-symbols-outlined', {}, [cls.icon])}
				>
					search
				</span>
			</button>
			{text?.title}
			<Modal isOpen={isOpen} onClose={() => setOpen(false)}>
				<div className=''>
					<Search className={cls.search} ref={ref} />
					<button onClick={sendData}>Поиск</button>
				</div>
			</Modal>
		</th>
	)
}
