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
            state.status = 'loading';
        })
        builder.addCase(getRandomThunk.fulfilled, (state, action) => {
            state.status = 'idle';
            state.images = action.payload;
        })
        builder.addCase(getRandomThunk.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        })

    },
})

export const { getRandom } = searchSlice.actions;