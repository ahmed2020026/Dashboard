import { createSlice } from "@reduxjs/toolkit";
import { callUser } from "./callApi";

export const userSlide = createSlice({
    name: "users",
    initialState: {
        users: [],
        loading: true,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(callUser.pending, (state) => {
            state.loading = true
        })
        builder.addCase(callUser.fulfilled, (state, action) => {
            state.loading = false
            state.users = action.payload,
            state.error = null
        })
        builder.addCase(callUser.rejected, (state, action) => {
            state.loading = false;
            state.users = [];
            state.error = action.error.message
        })
    }
})

export const UserFunction = userSlide.reducer