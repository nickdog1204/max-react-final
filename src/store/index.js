import {configureStore} from "@reduxjs/toolkit";
import counterReducer, {counterActions} from './counter';
import authReducer, {authActions} from './auth';



const store = configureStore({
    reducer: {
        counter: counterReducer,
        auth: authReducer
    }
})
export const actions = {counterActions, authActions};
export default store;
// const counterReducer = (state = initialState, action) => {
//     if ('INCREMENT' === action.type) {
//         return {
//             ...state,
//             counter: state.counter + action.amount
//         }
//     }
//     if ('DECREMENT' === action.type) {
//         return {
//             ...state,
//             counter: state.counter - 1
//         }
//     }
//     if ('TOGGLE' === action.type) {
//         return {
//             ...state,
//             showCounter: !state.showCounter
//         };
//     }
//     return state;
//
// }
//
// const store = createStore(counterReducer);
//
// export default store;

// const counterSubscriber = () => {
//     const state = store.getState();
//     console.log(state);
// }
//
// store.subscribe(counterSubscriber);
//
// store.dispatch({type: 'INCREMENT'})
// store.dispatch({type: 'DECREMENT'})
