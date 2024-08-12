import { createSlice } from "@reduxjs/toolkit";

const imagesKey = 'images';

const initialState = {
    images: JSON.parse(window.localStorage.getItem(imagesKey)) || []
}

const getImageWithDate = (img, dateAdded = new Date()) => {
    const newImg = { ...img, importDate: dateAdded.getTime() };
    return newImg;
}

const addMultiple = (state, data) => {
    data.map(img => state.images.push(getImageWithDate(img)));
}

const updateLocalStorage = state => {
    const lsItem = JSON.stringify(state.images);
    window.localStorage.setItem(imagesKey, lsItem);
}

export const favouritesSlice = createSlice({
    name: 'favourites',
    initialState,
    reducers: {
        add: (state, action) => {
            const imgWithData = getImageWithDate(action.payload);
            state.images.push(imgWithData);
            updateLocalStorage(state);
        },
        addAll: (state, action) => {
            addMultiple(state, action.payload);
            updateLocalStorage(state);
        },
        set: (state, action) => {
            state.images = [];
            addMultiple(state, action.payload);
            updateLocalStorage(state);
        },
        remove: (state, action) => {
            state.images = state.images.filter(img => img.id !== action.payload.id);
            updateLocalStorage(state);
        },
        modifyDescription: (state, action) => {
            const { id, newDescription } = action.payload;
            const image = state.images.find(img => img.id === id);
            if (image) {
                image.description = newDescription;
            }
            updateLocalStorage(state);
        }
    }
})

export const { add, addAll, set, remove, modifyDescription } = favouritesSlice.actions;