import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    posts: [],
    page: 0,
    isLoading: false,
    add: true,
    error: "",
    postsCount : 0
}

export const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
      startLoadingPosts: (state) => {
        state.isLoading = true;
      },
      setPosts: (state, action ) => {
  
        state.posts= action.payload
        state.isLoading=false
        },

        setError: (state,action) => {  
          state.error = action.payload
        },
        
      
    }
  });
  
  export const { startLoadingPosts,setPosts,setError } = postSlice.actions;
  export default postSlice.reducer