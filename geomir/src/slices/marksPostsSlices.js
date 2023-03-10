import { createSlice } from '@reduxjs/toolkit'

const initialState = {

postmarks: JSON.parse(localStorage.getItem("postmarks")) || []
    
}

export const postmarksSlice = createSlice({

name: 'postmarks',

initialState,

reducers: {

addpostmark: (state,action) => {
console.log("SSSSSSSSSSSS")
state.postmarks.push(action.payload) // aqui podem fer push

},

delpostmark: (state,action) => {

state.postmarks = state.postmarks.filter( postmark => postmark.id !== action.payload)

},

}

})

export const { addpostmark, delpostmark, togglepostmark } = postmarksSlice.actions

export default postmarksSlice.reducer 