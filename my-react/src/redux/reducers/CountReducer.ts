import { createSlice } from "@reduxjs/toolkit";

const countSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
    },
    reducers: {
        incremented: (state) => {
            state.value += 1;
        },
        decremented: (state) => {
            state.value -= 1;
        },
    },
});

export const { incremented, decremented } = countSlice.actions;

export default countSlice.reducer;