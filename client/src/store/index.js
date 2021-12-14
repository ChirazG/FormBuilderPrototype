import { configureStore } from '@reduxjs/toolkit';
import formReducer from './reducers/formSlice';
import pageReducer from './reducers/pageSlice';


export default configureStore({
    reducer: {
        page: pageReducer,
        form: formReducer
    },
})