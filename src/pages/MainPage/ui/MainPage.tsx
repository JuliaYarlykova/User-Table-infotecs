import { Table } from '@/shared/layout/TableLayout/TableLayout'
import { Page } from '@/widgets/Page/ui/Page'
import { Head } from '@/widgets/Table'
import { Body } from '@/widgets/Table'
import { Foot } from '@/widgets/Table'
import { Titles } from '../model/enums/titles'
import { useUserQuery } from '../api/userApi'

export const MainPage = () => {
	const { data } = useUserQuery()
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
				body={<Body />}
				foot={<Foot />}
			/>
		</Page>
	)
}
