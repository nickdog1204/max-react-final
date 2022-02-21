import {createSlice} from "@reduxjs/toolkit";


export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        shouldShowCart: false,
        notification: null
    },
    reducers: {
        showCart(state) {
            state.shouldShowCart = true;
        },
        hideCart(state) {
            state.shouldShowCart = false;
        },
        toggleCart(state) {
            state.shouldShowCart = !state.shouldShowCart
        },
        setNotification(state, action) {
            state.notification = action.payload
        }

    }
})
export const actions = uiSlice.actions;

