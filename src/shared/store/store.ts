import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

import { rtkApi } from '../api/rtkApi'

import { userSlice } from './user/User.slice'

const middleware = [rtkApi.middleware]

export const store = configureStore({
	reducer: {
		[rtkApi.reducerPath]: rtkApi.reducer,
		userSlice: userSlice.reducer,
	},
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(middleware),
})

setupListeners(store.dispatch)
export type RootState = ReturnType<typeof store.getState>

export default store
