import { rtkApi } from '@/shared/api/rtkApi'
import { User } from '@/shared/types/user'

type SearchData = {
	value: string | undefined
	key: string | undefined
}

export const searchApi = rtkApi.injectEndpoints({
	endpoints: build => ({
		searchValue: build.query<{ users: User[] }, SearchData | undefined>({
			query: value => ({
				url: `/users/filter?key=${value?.key}&value=${value?.value}`,
				method: 'GET',
			}),
		}),
	}),
})
