import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'
import { User } from '../model/types/user'

export const userApi = createApi({
	reducerPath: 'users',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://dummyjson.com/users',
	}),
	tagTypes: ['User'],
	endpoints: build => ({
		user: build.mutation<User, string>({
			query: () => ({
				url: `/`,
				method: 'GET',
			}),
		}),
	}),
})

export const { useUserMutation } = userApi
