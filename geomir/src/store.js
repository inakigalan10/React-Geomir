import { configureStore } from '@reduxjs/toolkit'
import postmarksReducer from './slices/marksPostsSlices'
import todosReducer from './slices/todoSlice'
export const store = configureStore({
  reducer: {
    todos: todosReducer,
    postmarks: postmarksReducer
  },
})