import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getRandomPhotosEndpoint } from "../../config/api_endpoints"

const initialState = {
    images: [],
    status: 'idle',
    error: null
}

export const getRandom = createAsyncThunk(
    'search/getRandom',
    async () => {
        const res = await fetch(getRandomPhotosEndpoint);
        return await res.json();
    }
)

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getRandom.pending, state => {
            state.status = 'loading';
        })
        builder.addCase(getRandom.fulfilled, (state, action) => {
            state.status = 'suceed';
            state.images = action.payload;
        })
        builder.addCase(getRandom.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        })
            
    },
})

export default searchSlice.actions;