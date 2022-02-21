
import {configureStore} from "@reduxjs/toolkit";
import reducer from './reducers'
import actions from './actions';
import selectors from "./selectors";

 const store = configureStore({
    reducer
})


export {actions, store, selectors}