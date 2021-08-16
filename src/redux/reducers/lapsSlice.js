import { createSlice } from "@reduxjs/toolkit";

export const lapsSlice = createSlice({  
    name: 'laps',
    initialState: [],
    reducers: {
        newLap: (state) => {
            // const newLap = formatTime();
            state.value.push('newLap');     
        }
    }


});

export default lapsSlice.reducer;