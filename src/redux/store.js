import { configureStore } from '@reduxjs/toolkit';
import timerReducer from './reducers/timerSlice';
import lapReducer from './reducers/lapsSlice';

export const store = configureStore({
    reducer: {
        lap: lapReducer,
        timer: timerReducer,
    },
});