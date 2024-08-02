import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    images: []
}

const getImageWithDate = (img, dateAdded = new Date()) => {
    img.importDate = dateAdded;
    return img;
}

const addMultiple = (state, data) => {
    data.map(img => state.images.push(getImageWithDate(img)));
}

export const favouritesSlice = createSlice({
    name: 'favourites',
    initialState,
    reducers: {
        add: (state, action) => {
            state.images.push(getImageWithDate(action.payload));
        },
        addAll: (state, action) => {
            addMultiple(state, action.payload);
        },
        set: (state, action) => {
            state.images = [];
            addMultiple(state, action.payload);
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

export const { add, addAll, set, remove, modifyDescription } = favouritesSlice.actions;