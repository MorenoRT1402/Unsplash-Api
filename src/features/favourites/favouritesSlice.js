import { createSlice } from "@reduxjs/toolkit";
import { saveInLocalStorage } from "../../app/utils/persistence";

const initialState = {
    images: []
}

const getImageWithDate = (img, dateAdded = new Date()) => {
    const newImg = { ...img, importDate: dateAdded.getTime() };
    return newImg;
}

const addMultiple = (state, data) => {
    data.map(img => state.images.push(getImageWithDate(img)));
}

const imagesKey = 'images';
const updatePersistance = state => saveInLocalStorage(imagesKey, state.images);

export const favouritesSlice = createSlice({
    name: 'favourites',
    initialState,
    reducers: {
        add: (state, action) => {
            state.images.push(getImageWithDate(action.payload));
            updatePersistance(state);
        },
        addAll: (state, action) => {
            addMultiple(state, action.payload);
            updatePersistance(state);
        },
        set: (state, action) => {
            state.images = [];
            addMultiple(state, action.payload);
            updatePersistance(state);
        },
        remove: (state, action) => {
            state.images = state.images.filter(img => img.id !== action.payload.id);
            updatePersistance(state);
        },
        modifyDescription: (state, action) => {
            const { id, newDescription } = action.payload;
            const image = state.images.find(img => img.id === id);
            if (image) {
                image.description = newDescription;
            }
            updatePersistance(state);
        }
    }
})

export const { add, addAll, set, remove, modifyDescription } = favouritesSlice.actions;