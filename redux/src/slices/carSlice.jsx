import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const carSlice = createSlice({
    name:'cars',
    initialState,
    reducers:{
        addCars(state, action){
            state.push(action.payload);
        },
    }
});

export const {addCars} = carSlice.actions;

export default carSlice.reducer;