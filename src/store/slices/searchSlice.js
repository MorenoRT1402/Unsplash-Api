import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPhotosByQuery, getPhotosEndpoint, getRandomPhotosEndpoint } from "../../config/api_endpoints";
import { useFetch } from "../../hooks/useFetch";

const initialState = {

};

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        getAll: createAsyncThunk(
            async () => {
                const { data } = useFetch(getPhotosEndpoint)
            }
        ),
        getRandom: createAsyncThunk(
            async () => {
                const { data } = useFetch(getRandomPhotosEndpoint);
            }
        ),
        getByQuery: createAsyncThunk(
            async query => {
                const { data } = useFetch(getPhotosByQuery(query));
            }
        )
    }
})