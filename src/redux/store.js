import { configureStore } from '@reduxjs/toolkit';
import timerReducer from './reducers/timerSlice';
import lapReducer from './reducers/lapsSlice';
import counterReducer from './reducers/counterSlice';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        lap: lapReducer,
        timer: timerReducer,
    },
});