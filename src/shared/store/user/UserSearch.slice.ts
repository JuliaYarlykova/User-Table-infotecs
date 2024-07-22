import { User, UsersList } from '@/pages/MainPage/model/types/user'
import { createSlice } from '@reduxjs/toolkit'

const URL = 'https://dummyjson.com/users'

const initialState: UsersList | undefined = { users: [] }

export const searchSlice = createSlice({
	name: 'search',
	initialState,
	reducers: {
		sortedUser: (state, action) => {
			return action.payload
		},
	},
	selectors: {
		getUsers: state => state,
	},
})
