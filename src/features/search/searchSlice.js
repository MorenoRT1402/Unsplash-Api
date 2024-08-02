import { createSlice } from "@reduxjs/toolkit";
import { getByQueryThunk, getRandomThunk } from "./searchThunk";

const initialState = {
    images: [],
    status: 'idle',
    error: null
}

const pending = state => {
    state.status = 'pending';
}

const fulfilled = (state, action) => {
    state.status = 'fulfilled';
    state.images = action.payload;
}

const rejected = (state, action) => {
    state.status = 'rejected';
    state.error = action.error.message;
}

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getRandomThunk.pending, state => {
            pending(state);
        })
        .addCase(getRandomThunk.fulfilled, (state, action) => {
            fulfilled(state, action);
        })
        .addCase(getRandomThunk.rejected, (state, action) => {
            rejected(state, action);
        })

        builder.addCase(getByQueryThunk.pending, state => {
            pending(state);
        })
        .addCase(getByQueryThunk.fulfilled, (state, action) => {
            fulfilled(state, action);
        })
        .addCase(getByQueryThunk.rejected, (state, action) => {
            rejected(state, action);
        })

    },
})