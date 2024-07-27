//модальное окно с подробной информацие о пользователе (в дальнейшем может обращаться к логике редактирования и создания, поэтому находится в фичах)

import { userApi } from '../../api/userApi'

import { Modal } from '@/shared/ui/Modal'

interface IUserModal {
	onOpen: (arg: boolean) => void
	isOpen: boolean
	userId: number
}
export const UserModal = (props: IUserModal) => {
	const { onOpen, isOpen, userId } = props

	const { data } = userApi.useGetUserQuery(userId)

	if (!data) return null

	return (
		<Modal isOpen={isOpen} onClose={() => onOpen(false)}>
			<h2>Пользователь: {data.firstName}</h2>
			<p>Возраст: {data.age}</p>
			<p>{`Адрес: ${data.address.city} улица ${data.address.address}`}</p>
			<p>Рост: {data.height}</p>

			<p>Вес: {data.weight}</p>

			<p>Номер телефона: {data.phone}</p>

			<p>Email-адрес: {data.email}</p>
		</Modal>
	)
}
