import { configureStore } from '@reduxjs/toolkit'
import companiesSlice from '../slices/companiesSlice'

// ...

export const store = configureStore({
  reducer: {
    company: companiesSlice,
}})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store