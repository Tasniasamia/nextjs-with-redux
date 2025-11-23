import { createSlice } from "@reduxjs/toolkit";
const initialState={posts:[]}
const postSlice=createSlice({
    name:'posts',
    initialState,
    reducers:{
        getPost(){
            console.log("posts");
        }
    }
})
export const {getPost}=postSlice.actions;
export default postSlice.reducer;