import { configureStore } from "@reduxjs/toolkit";
import { searchSlice } from "./search/searchSlice";

export const store = configureStore({
    reducer: {
        search: searchSlice.reducer,
    },
})