
import { createSlice } from "@reduxjs/toolkit";
import { callProduct } from "./callApi";

// هنا بنعرف الـ async action


const productSlice = createSlice({
    name: "products",
    initialState: {
        products: [],
        loading: true,
        error: null,
    },
    reducers: {
        deleteUser: (state, action) => {
            // action.payload = id
            state.users[0].users = state.users[0].users.filter(
                (user) => user.id !== action.payload
            );
        },
    },
    extraReducers: (builder) => {
        /* pending */
        builder.addCase(callProduct.pending, (state) => {
            state.loading = true;
        })
        /* fulfilled */
        builder.addCase(callProduct.fulfilled, (state, action) => {
            state.loading = false;
            state.products = action.payload;
            state.error = null;
        })
        /* rejected */
        builder.addCase(callProduct.rejected, (state, action) => {
            state.loading = false;
            state.products = [];
            state.error = action.payload || action.error.message;
        })
    }
});

export const productFunction = productSlice.reducer
