import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    path: '/'
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
})