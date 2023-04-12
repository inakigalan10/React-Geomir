import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    posts: [],
    page: 1,
    pages: [],
    isLoading: false,
    add: true,
    error: "",
    postsCount : 0,
    filter: { 
        body: "", 
        author: ""
    }
}

export const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        startLoadingPosts: (state) => {
            state.isLoading = true;
        },

        setPosts: (state, action ) => {
            state.posts = action.payload
            state.isLoading = false
        },

        setPost: (state, action ) => {
            state.posts = action.payload
            state.isLoading = false
        },

        setLikes: (state, action ) => {
            state.likes = action.payload
        },

        setLiked: (state, action ) => {
            state.liked = action.payload
        },

        setError: (state,action) => {
            state.error = action.payload
        },

        setPage: (state,action) => {

        state.page = action.payload
        
        },
            
        setPages: (state,action) => {
        
        state.pages = action.payload
        
        },
        setFilter: (state, action ) => {
            state.filter = action.payload
        },
  }
  });
  
  export const {  startLoadingPosts, setPosts, setPost, setLikes, setLiked, setError,setPage,setPages, setFilter} = postSlice.actions;
  export default postSlice.reducer