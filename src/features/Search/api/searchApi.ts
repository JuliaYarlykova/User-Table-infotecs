import { UsersList } from '@/pages/MainPage/model/types/user'
import { rtkApi } from '@/shared/api/rtkApi'

type SearchData = {
	value: string | undefined
	key: string | undefined
}

export const searchApi = rtkApi.injectEndpoints({
	endpoints: build => ({
		searchValue: build.query<UsersList, SearchData | undefined>({
			query: value => ({
				url: `/users/filter?key=${value?.key}&value=${value?.value}`,
				method: 'GET',
			}),
		}),
	}),
})
