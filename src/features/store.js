import { configureStore } from "@reduxjs/toolkit";
import { searchSlice } from "./search/searchSlice";
import { userSlice } from "./user/userSlice";

export const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        search: searchSlice.reducer,
    },
})