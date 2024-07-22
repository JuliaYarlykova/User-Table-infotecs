import { userApi } from '@/pages/MainPage/api/userApi'
import { User } from '@/pages/MainPage/model/types/user'
import { createSlice } from '@reduxjs/toolkit'

const URL = 'https://dummyjson.com/users'

const { data } = userApi.useGetUsersQuery(null)

const initialState: User[] | undefined = data?.users

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		sortedUser: () => {},
	},
})
