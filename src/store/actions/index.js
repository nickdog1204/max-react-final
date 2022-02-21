import * as fromCartSlice from '../slices/cart';
import * as fromUiSlice from '../slices/ui';


const actions = {
    cart: fromCartSlice.actions,
    ui: fromUiSlice.actions
};
export default actions;
