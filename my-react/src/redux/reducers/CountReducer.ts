import { createSlice } from "@reduxjs/toolkit";

interface CountState {
    value: number
}

const initialState: CountState = {
    value: 0,
}

const countSlice = createSlice({
    name: 'counter',
    initialState,
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