import { configureStore } from '@reduxjs/toolkit'
import postmarksReducer from './slices/postMarkSlice'
import placesMarksReducer from './slices/placeMarkSlice'
import todosReducer from './slices/todoSlice'
import commentSlice from './slices/comments/commentSlice'
export const store = configureStore({
  reducer: {
    todos: todosReducer,
    postMarks: postmarksReducer,
    placeMarks: placesMarksReducer,
    comments:commentSlice


  },
})