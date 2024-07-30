import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPhotosByQuery, getPhotosEndpoint, getRandomPhotosEndpoint } from "../../config/api_endpoints";
import { useFetch } from "../../hooks/useFetch";

const initialState = {
    images: [],
    status: 'idle'
};

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        getAll: createAsyncThunk(
            'search/getAll',
            async () => {
                const response = await fetch(getPhotosEndpoint);
                const data = await response.json();
                console.log(data);
                /*
                fetch(getPhotosEndpoint)
                .then(res => res.json())
                .then(data => console.log(data));
                */
            },
            /*
            {
                pending: state => state.status = 'loading',
                rejected: state => state.status = 'failed',
                fulfilled: (state, action) => {
                    state.status = 'idle';
                    state.images.push(action.payload);
                }
            }
                */
        ),
        getRandom: createAsyncThunk(
            'search/getRandom',
            async () => {
                const { data } = useFetch(getRandomPhotosEndpoint);
            }
        ),
        getByQuery: createAsyncThunk(
            'search/getByQuery',
            async query => {
                const { data } = useFetch(getPhotosByQuery(query));
            }
        )
    }
})

export const { getAll, getRandom, getByQuery } = searchSlice.actions; 