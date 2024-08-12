import { configureStore } from "@reduxjs/toolkit";
import { searchSlice } from "../features/search/searchSlice";
import { favouritesSlice } from "../features/favourites/favouritesSlice";

export const store = configureStore({
    reducer: {
        search: searchSlice.reducer,
        fav: favouritesSlice.reducer
    },
})