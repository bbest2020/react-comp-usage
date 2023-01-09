import { configureStore, createSlice } from "@reduxjs/toolkit";

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

const store = configureStore({
    reducer: counterSlice.reducer
});

export const actions = counterSlice.actions;
export default store;

// const reducerFn = (state = {counter: 0}, action) => {
//     if (action.type === 'INCREMENT') {
//         return {counter: state.counter + 1};
//     }
//     if (action.type === 'DECREMENT') {
//         return {counter : state.counter - 1}
//     } 
//     if (action.type === 'ADDBY10') {
//         return {counter : state.counter + action.payload}
//     }
//     return state;
// }
// const store = createStore(reducerFn);

// export default store;
