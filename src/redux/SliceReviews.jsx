import { createSlice } from "@reduxjs/toolkit";
import { callReview } from "./callApi";

export const ReviewSlide = createSlice({
    name: "reviews",
    initialState: {
        reviews: [],
        loading: true,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(callReview.pending, (state) => {
            state.loading = true
        })
        builder.addCase(callReview.fulfilled, (state, action) => {
            state.loading = false
            state.reviews = action.payload,
                state.error = null
        })
        builder.addCase(callReview.rejected, (state, action) => {
            state.loading = false;
            state.reviews = [];
            state.error = action.error.message
        })
    }
})

export const ReviewFunction = ReviewSlide.reducer