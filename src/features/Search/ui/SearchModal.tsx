import { Search } from '@/shared/ui/Search'
import { Modal } from '@/shared/ui/Modal'
import { memo, useCallback, useEffect, useRef, useState } from 'react'
import { searchApi } from '../api/searchApi'
import { useDispatch } from 'react-redux'
import { ITitle } from '@/widgets/Table/ui/Head/Head'
import { userSlice } from '@/shared/store/user/User.slice'

interface ISearchModal {
	text?: ITitle
	isOpen: boolean
	onOpen: (arg: boolean) => void
}
export const SearchModal = memo((props: ISearchModal) => {
	const { text, isOpen, onOpen } = props
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
		if (data) dispatch(userSlice.actions.setSearchUser(data?.users))
		onOpen(false)
	}, [data])
	return (
		<Modal isOpen={isOpen} onClose={() => onOpen(false)}>
			<div>
				<Search ref={ref} />
				<button onClick={sendData}>Поиск</button>
			</div>
		</Modal>
	)
})
