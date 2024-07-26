import { Table } from '@/shared/layout/TableLayout/TableLayout'
import { Page } from '@/widgets/Page/ui/Page'
import { userApi } from '../../api/userApi'
import { memo, useEffect, useState } from 'react'
import { User } from '../../model/types/user'
import { useSelector } from 'react-redux'
import { RootState } from '@/shared/store/store'
import { useDispatch } from 'react-redux'

import cls from './MainPage.module.scss'

import { titles } from '../../model/data/titles'
import { userSlice } from '@/shared/store/user/User.slice'
import { Button } from '@/shared/ui/Button/Button'
import { HRow } from '../HeaderRow/Row'
import { BRow } from '../BodyRow/Row'

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
	}, [data])

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
