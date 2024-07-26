import { userApi } from '@/pages/MainPage/api/userApi'
import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { userSlice } from './user/User.slice'

const middleware = [userApi.middleware]

export const store = configureStore({
	reducer: {
		[userApi.reducerPath]: userApi.reducer,
		userSlice: userSlice.reducer,
	},
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(middleware),
})

setupListeners(store.dispatch)
export type RootState = ReturnType<typeof store.getState>

export default store
