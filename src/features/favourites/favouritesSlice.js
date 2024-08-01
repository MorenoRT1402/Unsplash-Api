import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    images: []
}

export const favouritesSlice = createSlice({
    name: 'favourites',
    initialState,
    reducers: {
        add: (state, action) => {
            state.images.push(action.payload);
        },
        remove: (state, action) => {
            state.images = state.images.filter(img => img.id !== action.payload.id);
        },
        modifyDescription: (state, action) => {
            const { id, newDescription } = action.payload;
            const image = state.images.find(img => img.id === id);
            if (image) {
                image.description = newDescription;
            }
        }
    }
})

export const { add, remove, modifyDescription } = favouritesSlice.actions;