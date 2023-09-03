import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "post",
  initialState: {
    posts: [
      {
        title: "",
        description: "",
        tag: 0,
      },
    ],
    loading: false,
    error: false,
  },
  reducers: {
    updateStart: (state) => {
      state.loading = true;
    },
    updateError: (state) => {
      state.loading = false;
      state.error = true;
    },
    createPost: (state, action) => { 
        state.posts = [...state.posts, action.payload]; 
    },
  },
});

export const { updateStart, updateError, updateSuccess } = userSlice.actions;
export default userSlice.reducer;
