import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    form: {},
    allforms: [],
    isLoading: false,
    error: ''
}
const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        getFormPending: (state) => {
            state.isLoading = true;
        },
        getFormSuccess: (state, { payload }) => {
            state.isLoading = false;
            state.form = payload;
            state.error = '';
        },
        getFormFail: (state, { payload }) => {
            state.isLoading = false;
            state.error = payload;
        },
        getAllFormsSuccess: (state, { payload }) => {
            state.allforms = payload;
            state.error = '';
        },
        getAllFormsFail: (state) => {
            state.error = '';
        },
        addFormPending: (state) => {
            state.isLoading = true;
        },
        addFormSuccess: (state, { payload }) => {
            state.isLoading = false;
            state.status = "success";
            state.message = payload;
        },
        addFormFail: (state, { payload }) => {
            state.isLoading = false;
            state.status = "error";
            state.message = payload;
        },
        updateFormSuccess: (state, { payload }) => {
            state.isLoading = false;
            state.status = "success";
            state.message = payload;
        },
        updateFormFail: (state, { payload }) => {
            state.isLoading = false;
            state.status = "error";
            state.message = payload;
        },
    },
})

export const { getFormPending, getFormSuccess, getFormFail, getAllFormsSuccess, getAllFormsFail, addFormPending, addFormSuccess, addFormFail, updateFormSuccess, updateFormFail} = formSlice.actions

export default formSlice.reducer