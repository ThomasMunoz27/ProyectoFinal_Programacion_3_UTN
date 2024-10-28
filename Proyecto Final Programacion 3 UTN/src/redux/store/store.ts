import { configureStore } from '@reduxjs/toolkit'
import companySlice from '../slices/companySlice'
import sucursalSlice from '../slices/sucursalSlice'


export const store = configureStore({
  reducer: {
    company: companySlice,
    sucursal: sucursalSlice,
}})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store
