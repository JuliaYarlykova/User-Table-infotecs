import { Table } from '@/shared/layout/TableLayout/TableLayout'
import { Page } from '@/widgets/Page/ui/Page'
import { Head } from '@/widgets/Table'
import { Body } from '@/widgets/Table'
import { Foot } from '@/widgets/Table'
import { userApi } from '../../api/userApi'
import { memo, useEffect, useState } from 'react'
import { User } from '../../model/types/user'
import { useSelector } from 'react-redux'
import { RootState } from '@/shared/store/store'
import { useDispatch } from 'react-redux'

import { titles } from '../../model/data/titles'
import { userSlice } from '@/shared/store/user/User.slice'

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
		if (sortedData && sortedData.length) {
			setUsers(sortedData)
		} else if (dataSearch && dataSearch.length !== 0) {
			setUsers(dataSearch)
		} else setUsers(data?.users)
	}, [dataSearch, data, sortedData])
	if (isLoading) return <div className=''>Loading...</div>
	return (
		<Page>
			<button onClick={() => setUsers(data?.users)}>Отменить поиск</button>
			<Table
				head={<Head titles={titles} />}
				body={<Body values={users} />}
				foot={<Foot />}
			/>
		</Page>
	)
})
