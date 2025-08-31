import { createSlice } from "@reduxjs/toolkit";
import { callOrder } from "./callApi";

export const OrderSlice = createSlice({
    name: "orders",
    initialState: {
        orders: [],
        loading: true,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(callOrder.pending, (state) => {
            state.loading = true
        })
        builder.addCase(callOrder.fulfilled, (state, action) => {
            state.loading = false
            state.orders = action.payload,
                state.error = null
        })
        builder.addCase(callOrder.rejected, (state, action) => {
            state.loading = false;
            state.orders = [];
            state.error = action.error.message
        })
    }
})

export const OrderFunction = OrderSlice.reducer