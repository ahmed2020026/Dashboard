import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


/* call products */
export const callProduct = createAsyncThunk("product/callProduct", async () => {
    const response = await axios.get(
        "https://fakestoreapi.com/products?limit=10"
    );
    return response.data;
});

/* call Users */
export const callUser = createAsyncThunk("user/callUser", async () => {
    const response = await axios.get(
        "https://682b36ccd29df7a95be2883e.mockapi.io/users"
    );
    return response.data;
});

/* call Orders */
export const callOrder = createAsyncThunk("order/callOrder", async () => {
    const response = await axios.get("/orders.json");
    return response.data;
});

/* call reviews */
export const callReview = createAsyncThunk("review/callReview", async () => {
    const response = await axios.get("/reviews.json");
    return response.data;
});
