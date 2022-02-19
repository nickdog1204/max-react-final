import {createSlice} from "@reduxjs/toolkit";

const initialCounterState = {
    counter: 0,
    showCounter: true
};
const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        increment(state) {
            state.counter++
        },
        decrement(state) {
            state.counter--
        },
        increase(state, action) {
            state.counter = state.counter + action.payload
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter
        }
    }
})

export default counterSlice.reducer;
const {
    increment,
    increase,
    decrement,
    toggleCounter
} = counterSlice.actions
export const counterActions = {increment, increase, decrement, toggleCounter};

