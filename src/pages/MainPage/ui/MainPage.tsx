import { Table } from '@/shared/layout/TableLayout/TableLayout'
import { Page } from '@/widgets/Page/ui/Page'
import { Head } from '@/widgets/Table'
import { Body } from '@/widgets/Table'
import { Foot } from '@/widgets/Table'
import { Titles } from '../model/enums/titles'
import { userApi } from '../api/userApi'

export const MainPage = () => {
	const { data, isLoading } = userApi.useGetUsersQuery(null)
	if (isLoading) return <div className=''>Loading...</div>
	console.log(data)
	return (
		<Page>
			<Table
				head={
					<Head
						titles={[
							Titles.FIO,
							Titles.AGE,
							Titles.GENDER,
							Titles.PHONENUMBER,
							Titles.ADRESS,
						]}
					/>
				}
				body={<Body values={data?.users} />}
				foot={<Foot />}
			/>
		</Page>
	)
}
