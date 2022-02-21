import {createSlice} from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: []
    },
    reducers: {
        addCartItem(state, action) {
            const {title, price, id} = action.payload;
            const idx = state.cartItems.findIndex(it => it.id === id);
            if (idx === -1) {
                state.cartItems.push({id, title, quantity: 1, price, total: price})
            } else {
                const newItem = {...state.cartItems[idx]};
                newItem.quantity = newItem.quantity + 1;
                newItem.total = newItem.price * newItem.quantity;
                state.cartItems[idx] = newItem;
            }
        },
        removeCartItem(state, action) {
            state.cartItems = state.cartItems.filter(it => it.title !== action.payload.title)
        },
        increaseCartItemQuantity(state, action) {
            const idx = state.cartItems.findIndex(it => it.id === action.payload)
            if (idx === -1) {
                return;
            }
            const myItem = state.cartItems[idx]

            myItem.quantity = myItem.quantity + 1;
            myItem.total += myItem.price

        },
        decreaseCartItemQuantity(state, action) {
            const id = action.payload
            const idx = state.cartItems.findIndex(it => it.id === id)
            if (idx === -1) {
                return;
            }
            const quantity = state.cartItems[idx].quantity;
            if (quantity === 1) {
                state.cartItems = state.cartItems.filter(it => it.id !== id);
            } else {
                const myItem = state.cartItems[idx];
                myItem.quantity = myItem.quantity - 1;
                myItem.total -= myItem.price;
            }


        }
    }
});

export const actions = cartSlice.actions;