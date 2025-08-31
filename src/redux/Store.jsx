import { configureStore } from "@reduxjs/toolkit";
import { productFunction } from "./SliceProducts";
import { OrderFunction } from "./SliceOrders";
import { ReviewFunction } from "./SliceReviews";
import { UserFunction } from "./SliceUsers";

export const Store = configureStore({
    reducer: {
        products: productFunction,
        users: UserFunction,
        orders: OrderFunction,
        reviews: ReviewFunction
    },
});
