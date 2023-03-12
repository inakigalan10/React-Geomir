import { configureStore } from '@reduxjs/toolkit'
import postmarksReducer from './slices/postMarkSlice'
import todosReducer from './slices/todoSlice'
export const store = configureStore({
  reducer: {
    todos: todosReducer,
    postMarks: postmarksReducer

   

  },
})