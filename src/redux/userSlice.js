import {createSlice} from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user", 
    initialState: {
        name: "Liam Ngo",
        age: "21",
        about: "Iam a fool dev",
        avaUrl: 'https://preview.redd.it/rrz3hmsxcll71.png?width=640&crop=smart&auto=webp&s=87cc5ed38d8f088ef9fffef7a4c5756b64309d6a',
        themeColor: '#ff9051', 
        loading: false,
        error: false 
    },
    reducers: {
        updateStart: (state) => {
            state.loading = true;
        },
        updateError: (state) => {
            state.loading = false;
            state.error = true;
        },
        updateSuccess: (state, action) => {
            state.loading = false;
            state.error = false;

            state.name = action.payload.name; 
            state.age = action.payload.age; 
            state.about = action.payload.about;
            state.avaUrl = action.payload.avaUrl; 
            state.themeColor = action.payload.themeColor;
        }
    }
})

export const {updateStart, updateError, updateSuccess} = userSlice.actions; 
export default userSlice.reducer; 