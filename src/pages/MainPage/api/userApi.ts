import { User } from '@/entities/User'
import { rtkApi } from '@/shared/api/rtkApi'

export const userApi = rtkApi.injectEndpoints({
	endpoints: build => ({
		getUsers: build.query<{ users: User[] }, null>({
			query: () => ({
				url: `/users`,
				method: 'GET',
			}),
		}),
	}),
})
