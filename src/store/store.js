import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./slices/searchSlice";

export const store = configureStore({
    reducer: {
        search: searchSlice,
    },
})