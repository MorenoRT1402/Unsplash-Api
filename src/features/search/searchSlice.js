import { createSlice } from "@reduxjs/toolkit";
import { getRandomThunk } from "./searchThunk";

const initialState = {
    images: [],
    status: 'idle',
    error: null
}

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getRandomThunk.pending, state => {
            state.status = 'pending';
        })
        .addCase(getRandomThunk.fulfilled, (state, action) => {
            state.status = 'fulfilled';
            state.images = action.payload;
        })
        .addCase(getRandomThunk.rejected, (state, action) => {
            state.status = 'rejected';
            state.error = action.error.message;
        })

    },
})