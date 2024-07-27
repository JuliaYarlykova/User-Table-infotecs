//Модальное окно поиска
//Компонент содержит логику поиска информации в колонке

import { memo, useCallback, useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'

import { searchApi } from '../api/searchApi'

import { userSlice } from '@/shared/store/user/User.slice'
import { ITitle } from '@/shared/types/title'
import { Button } from '@/shared/ui/Button'
import { Modal } from '@/shared/ui/Modal'
import { Search } from '@/shared/ui/Search'

import cls from './SearchModal.module.scss'

interface ISearchModal {
	text?: ITitle
	isOpen: boolean
	onOpen: (arg: boolean) => void
}
// eslint-disable-next-line react/display-name
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
	}, [text?.value])

	useEffect(() => {
		if (dataValue.value) {
			refetch()
		}
	}, [dataValue.value, dispatch, refetch])

	useEffect(() => {
		if (data) dispatch(userSlice.actions.setSearchUser(data.users))
		onOpen(false)
	}, [data, dispatch, onOpen])
	return (
		<Modal isOpen={isOpen} onClose={() => onOpen(false)}>
			<div className={cls.modal}>
				<Search ref={ref} />
				<Button onClick={sendData}>Поиск</Button>
			</div>
		</Modal>
	)
})
