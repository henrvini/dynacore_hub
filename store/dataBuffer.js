import { createSlice } from '@reduxjs/toolkit';

export const dataBufferSlice = createSlice({
    name: 'dataBuffer',
    initialState: {
        value: {}
    },
    reducers: {
        update: (state, { payload }) => {
            state.value = {
                ...state.value,
                [payload.macA]: payload
            };
        },
        remove: (state, { payload }) => {
            const newState = { ...state.value };
            delete newState[payload];
            state.value = {
                ...newState
            };
        }
    }
});

export const { update, remove } = dataBufferSlice.actions;

export default dataBufferSlice.reducer;
