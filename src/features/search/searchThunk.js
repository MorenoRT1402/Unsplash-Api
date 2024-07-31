import { createAsyncThunk } from "@reduxjs/toolkit";
import { getRandomPhotosEndpoint } from "../../config/api_endpoints";

export const getRandomThunk = createAsyncThunk(
    'search/getRandom',
    async () => {
        try {
            const res = await fetch(getRandomPhotosEndpoint);
            if (res.ok) {
                return await res.json();
            }
            return null
        }
        catch (error) {
            return null;
        }
    }
)