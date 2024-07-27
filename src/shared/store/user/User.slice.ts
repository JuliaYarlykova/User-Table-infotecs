import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { User } from '@/shared/types/user'

export interface IState {
	userList: User[] | undefined
	tempUsers: User[] | undefined
	sortedUser: User[] | undefined
}

export enum ActionSorted {
	UP = 'up',
	DOWN = 'down',
	DEFAULT = 'default',
}

export type ActionSortedType = {
	payload: string | undefined
	type: ActionSorted
}

const initialState: IState = {
	userList: [],
	tempUsers: [],
	sortedUser: [],
}

export const userSlice = createSlice({
	name: 'userSlice',
	initialState,
	reducers: {
		setAllUser: (state, action: PayloadAction<User[] | undefined>) => {
			state.tempUsers = action.payload
			state.userList = action.payload
		},
		setSearchUser: (state, action: PayloadAction<User[] | undefined>) => {
			state.tempUsers = action.payload
		},
		sortedUserUp: (state, action: PayloadAction<ActionSortedType>) => {
			const field = action.payload.payload as keyof User
			const users = state.tempUsers?.slice()
			switch (action.payload.type) {
				case 'up':
					console.log(users)
					users?.sort((a, b) => {
						if (a[field] < b[field]) return -1
						if (a[field] > b[field]) return 1
						return 0
					})
					state.sortedUser = users
					state.tempUsers = users
					break
				case 'down':
					users?.sort((a, b) => {
						if (a[field] > b[field]) return -1
						if (a[field] < b[field]) return 1
						return 0
					})
					state.tempUsers = users
					break
				case 'default':
					state.tempUsers = []
					break

				default:
					return {
						...state,
					}
			}
		},
	},
})
