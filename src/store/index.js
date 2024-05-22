import { configureStore } from "@reduxjs/toolkit";
import { bookReducer } from "./bookSlice";



export const myStore = configureStore({
    reducer : {
        bookSlice:bookReducer,
    }
});