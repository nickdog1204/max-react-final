import * as fromCartSlice from '../slices/cart';
import * as fromUiSlice from '../slices/ui';


const reducer = {
    cart: fromCartSlice.reducer,
    ui: fromUiSlice.reducer
};

export default reducer;