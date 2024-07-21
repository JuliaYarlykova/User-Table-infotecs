import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { User, UsersList } from '../model/types/user'

export const userApi = createApi({
	reducerPath: 'user',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://dummyjson.com/users',
	}),
	tagTypes: ['User'],
	endpoints: build => ({
		getUsers: build.query<UsersList, null>({
			query: () => ({
				url: `/`,
				method: 'GET',
			}),
		}),
	}),
})
