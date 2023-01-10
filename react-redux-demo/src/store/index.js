import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counter-slice";
import addBlogSlice from "./add-blog-slice";

const store = configureStore({
    reducer: {
        counterReducer: counterSlice.reducer,
        addBlogReducer: addBlogSlice.reducer
    }
});

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
