import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    page: {},
    allpages: [],
    isLoading: false,
    error: ''
}
const pageSlice = createSlice({
    name: 'page',
    initialState,
    reducers: {
        getPagePending: (state) => {
            state.isLoading = true;
        },
        getPageSuccess: (state, { payload }) => {
            state.isLoading = false;
            state.page = payload;
            state.error = '';
        },
        getPageFail: (state, { payload }) => {
            state.isLoading = false;
            state.error = payload;
        },
        getAllPagesSuccess: (state, { payload }) => {
            state.allpages = payload;
            state.error = '';
        },
        getAllPagesFail: (state) => {
            state.error = '';
        },
        createPagePending: (state) => {
            state.isLoading = true;
        },
        createPageSuccess: (state, { payload }) => {
            state.isLoading = false;
            state.status = "success";
            state.message = payload;
        },
        createPageFail: (state, { payload }) => {
            state.isLoading = false;
            state.status = "error";
            state.message = payload;
        },

    },
})

export const { getPagePending, getPageSuccess, getPageFail, getAllPagesSuccess, getAllPagesFail, createPagePending, createPageSuccess, createPageFail} = pageSlice.actions

export default pageSlice.reducer