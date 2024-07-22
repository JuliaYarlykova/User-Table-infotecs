import { userApi } from '@/pages/MainPage/api/userApi'
import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { searchSlice } from './user/UserSearch.slice'
import { searchApi } from '@/features/HeaderElement/api/searchApi'

const middleware = [searchApi.middleware, userApi.middleware]

export const store = configureStore({
	reducer: {
		[userApi.reducerPath]: userApi.reducer,
		[searchApi.reducerPath]: searchApi.reducer,
		search: searchSlice.reducer,
	},
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(middleware),
})

setupListeners(store.dispatch)
export type RootState = ReturnType<typeof store.getState>

export default store
