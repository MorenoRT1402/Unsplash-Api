import { createSlice } from "@reduxjs/toolkit";
import { getByQueryThunk, getRandomThunk } from "./searchThunk";
import { promiseStatus } from "../../app/variables/async";

const initialState = {
    images: [],
    status: promiseStatus.idle,
    error: null
}

const fulfilled = (state, action) => {
    state.status = promiseStatus.fulfilled;
    state.images = action.payload == null ? state.images : action.payload;
};

const rejected = (state, action) => {
    state.status = promiseStatus.rejected;
    state.error = action.error.message;
}

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
    },
    extraReducers: builder => {
        builder.addCase(getRandomThunk.pending, state => {
            state.status = promiseStatus.pending;
        })
            .addCase(getRandomThunk.fulfilled, (state, action) => {
                fulfilled(state, action);
            })
            .addCase(getRandomThunk.rejected, (state, action) => {
                rejected(state, action);
            })

        builder.addCase(getByQueryThunk.pending, state => {
            state.status = promiseStatus.pending;
        })
            .addCase(getByQueryThunk.fulfilled, (state, action) => {
                fulfilled(state, action);
            })
            .addCase(getByQueryThunk.rejected, (state, action) => {
                rejected(state, action);
            })

    },
})