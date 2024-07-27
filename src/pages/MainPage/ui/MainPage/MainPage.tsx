//главная страница с таблицей пользователей

import { memo, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

import { userApi } from '../../api/userApi'
import { titles } from '../../model/data/titles'
import { BRow } from '../BodyRow/Row'
import { HRow } from '../HeaderRow/Row'

import { Table } from '@/shared/layout/TableLayout/TableLayout'
import { RootState } from '@/shared/store/store'
import { userSlice } from '@/shared/store/user/User.slice'
import { User } from '@/shared/types/user'
import { Button } from '@/shared/ui/Button/Button'
import { Page } from '@/widgets/Page'

import cls from './MainPage.module.scss'

// eslint-disable-next-line react/display-name
export const MainPage = memo(() => {
	const [users, setUsers] = useState<User[] | undefined>([])
	const { data, isLoading } = userApi.useGetUsersQuery(null)
	const dispatch = useDispatch()
	const dataSearch = useSelector(
		(state: RootState) => state.userSlice.tempUsers
	)

	const sortedData = useSelector(
		(state: RootState) => state.userSlice.sortedUser
	)
	useEffect(() => {
		dispatch(userSlice.actions.setAllUser(data?.users))
	}, [data, dispatch])

	useEffect(() => {
		setUsers(sortedData)
	}, [sortedData])
	useEffect(() => {
		setUsers(dataSearch)
	}, [dataSearch])

	if (isLoading) return <div className=''>Loading...</div>
	return (
		<Page>
			<Button onClick={() => setUsers(data?.users)}>Отменить поиск</Button>
			<Table
				className={cls.table}
				head={
					<thead>
						<HRow cells={titles} />
					</thead>
				}
				body={
					<tbody>
						{users && users.map((user, key) => <BRow cells={user} key={key} />)}
					</tbody>
				}
				foot={<></>}
			/>
		</Page>
	)
})
