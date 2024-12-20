import { createAsyncThunk } from "@reduxjs/toolkit";
import { getPhotosByQuery, getRandomPhotosEndpoint } from "../../app/config/api_endpoints";


const getData = async endpoint => {
    const res = await fetch(endpoint);
    if (res.ok) {
        const data = await res.json();
        return data;
    }
    return null
}


export const getRandomThunk = createAsyncThunk(
    'search/getRandom',
    async () => {
        try {
            return getData(getRandomPhotosEndpoint());
        }
        catch (error) {
            return null;
        }
    }
)

export const getByQueryThunk = createAsyncThunk(
    'search/getByQuery',
    async query => {
        try {
            const allPages = await getData(getPhotosByQuery(query));
            return allPages.results;
        }
        catch (error) {
            return null;
        }
    }
)