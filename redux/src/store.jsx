import {configureStore} from '@reduxjs/toolkit';
import customerReducer from './slices/customerSlice';
import carReducer from './slices/carSlice';

export const store = configureStore({
    devTools: true,// when the production the devtools can be false
    reducer:{
        customers: customerReducer,
        cars: carReducer
    }
})