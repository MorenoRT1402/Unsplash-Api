import { createAsyncThunk } from "@reduxjs/toolkit";
import { getPhotosByQuery, getRandomPhotosEndpoint } from "../../config/api_endpoints";

export const getRandomThunk = createAsyncThunk(
    'search/getRandom',
    async () => {
        try {
            const res = await fetch(getRandomPhotosEndpoint());
            if (res.ok) {
                const data = await res.json();
                return data;
            }
            return null
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
            const res = await fetch(getPhotosByQuery(query));
            if (res.ok) {
                const data = await res.json();
                console.log(data);
                return data;
            }
            return null
        }
        catch (error) {
            return null;
        }
    }
)