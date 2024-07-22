import { UsersList } from '@/pages/MainPage/model/types/user'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

type SearchData = {
	value: string | undefined
	key: string | undefined
}

export const searchApi = createApi({
	reducerPath: 'searchUser',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://dummyjson.com/users',
	}),
	tagTypes: ['Search'],
	endpoints: build => ({
		searchValue: build.query<UsersList, SearchData | undefined>({
			query: value => ({
				url: `/filter?key=${value?.key}&value=${value?.value}`,
				method: 'GET',
			}),
		}),
	}),
})
