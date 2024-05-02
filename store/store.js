import { configureStore } from '@reduxjs/toolkit';
import dataBufferReducer from './dataBuffer';

export default configureStore({
    reducer: {
        dataBuffer: dataBufferReducer
    }
});
