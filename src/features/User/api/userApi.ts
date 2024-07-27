import { rtkApi } from '@/shared/api/rtkApi'
import { User } from '@/shared/types/user'

export const userApi = rtkApi.injectEndpoints({
	endpoints: build => ({
		getUser: build.query<User, number>({
			query: id => ({
				url: `/users/${id}`,
				method: 'GET',
			}),
		}),
	}),
})
