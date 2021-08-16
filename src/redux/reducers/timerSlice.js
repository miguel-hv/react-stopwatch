import { createSlice } from "@reduxjs/toolkit";


export const timerSlice = createSlice({
    name: 'timer',
    initialState: {
        value: 0,
    },
    reducers: {
        startTimer: (state) => {
                state.value += 1;
        },
        pauseTimer: (state, action) => {
            clearInterval(action.payload);
        },
        resetTimer: (state, action) => {
            clearInterval(action.payload);
            state.value = 0;
        },
    }
});

export const { startTimer, pauseTimer, resetTimer } = timerSlice.actions;

export const selectTime = (state) => state.timer.value;

export default timerSlice.reducer;


