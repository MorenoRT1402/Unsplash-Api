import { createAsyncThunk } from "@reduxjs/toolkit";
import { getRandomPhotosEndpoint } from "../../config/api_endpoints";

export const getRandomThunk = createAsyncThunk(
    'search/getRandom',
    async () => {
        try {
            const res = await fetch(getRandomPhotosEndpoint());
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