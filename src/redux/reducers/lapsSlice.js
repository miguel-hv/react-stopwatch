import { createSlice } from "@reduxjs/toolkit";

export const lapsSlice = createSlice({  
    name: 'laps',
    initialState: {
        value: [],
    },
    reducers: {
        newLap: (state, action) => {
            state.value.push(action.payload);     
        },
        resetLap: (state) => {
            state.value = [];
        }
    }
});

export const { newLap, resetLap } = lapsSlice.actions;

export const selectLap = (state) => state.lap.value;

export default lapsSlice.reducer;