import { Table } from '@/shared/layout/TableLayout/TableLayout'
import { Page } from '@/widgets/Page/ui/Page'
import { Head } from '@/widgets/Table'
import { Body } from '@/widgets/Table'
import { Foot } from '@/widgets/Table'
import { Titles } from '../model/enums/titles'
import { userApi } from '../api/userApi'
import { useEffect, useState } from 'react'
import { User } from '../model/types/user'
import { useSelector } from 'react-redux'
import { RootState } from '@/shared/store/store'

export const MainPage = () => {
	const [users, setUsers] = useState<User[] | undefined>([])
	const { data, isLoading } = userApi.useGetUsersQuery(null)
	const dataSearch = useSelector((state: RootState) => state.search)
	console.log(dataSearch)
	useEffect(() => {
		if (dataSearch.users.length !== 0) {
			setUsers(dataSearch.users)
		} else setUsers(data?.users)
	}, [dataSearch, data])

	const getAllData = () => {
		setUsers(data?.users)
	}
	if (isLoading) return <div className=''>Loading...</div>
	return (
		<Page>
			<button onClick={getAllData}>Отменить поиск</button>
			<Table
				head={
					<Head
						titles={[
							{
								title: Titles.LASTNAME,
								value: 'lastName',
							},
							{
								title: Titles.FIRSTNAME,
								value: 'firstName',
							},

							{
								title: Titles.AGE,

								value: 'age',
							},
							{
								title: Titles.GENDER,
								value: 'gender',
							},
							{
								title: Titles.PHONENUMBER,
								value: 'phone',
							},
							{
								title: Titles.ADRESS,
								value: 'adress.adress',
							},
						]}
					/>
				}
				body={<Body values={users} />}
				foot={<Foot />}
			/>
		</Page>
	)
}
