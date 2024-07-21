import { userApi } from '@/pages/MainPage/api/userApi'
import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
	reducer: {
		[userApi.reducerPath]: userApi.reducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(userApi.middleware),
})

setupListeners(store.dispatch)
