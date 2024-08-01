import { configureStore } from "@reduxjs/toolkit";
import { searchSlice } from "./search/searchSlice";
import { favouritesSlice } from "./favourites/favouritesSlice";

export const store = configureStore({
    reducer: {
        search: searchSlice.reducer,
        favourites: favouritesSlice.reducer
    },
})