import { User } from '@/pages/MainPage/model/types/user'
import { rtkApi } from '@/shared/api/rtkApi'

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
