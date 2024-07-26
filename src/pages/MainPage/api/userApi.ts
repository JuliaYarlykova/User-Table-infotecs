import { UsersList } from '../model/types/user'
import { rtkApi } from '@/shared/api/rtkApi'

export const userApi = rtkApi.injectEndpoints({
	endpoints: build => ({
		getUsers: build.query<UsersList, null>({
			query: () => ({
				url: `/users`,
				method: 'GET',
			}),
		}),
	}),
})
