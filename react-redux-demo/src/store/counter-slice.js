import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: { counter: 0 },
    reducers: {
        increment(state) {
            return { counter: state.counter + 1 };
        },
        decrement(state) {
            return { counter: state.counter - 1 };
        },
        addBy10(state, action) {
            return { counter: state.counter + action.payload };
        }
    }
});

export const counterActions = counterSlice.actions;
export default counterSlice;
