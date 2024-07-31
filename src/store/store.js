import { configureStore } from "@reduxjs/toolkit";
import { searchSlice } from "../features/search/searchSlice";

export const store = configureStore({
    reducer: {
        search: searchSlice.reducer,
    },
})