import * as fromCartSlice from '../slices/cart';
import * as fromUiSlice from '../slices/ui';

const selectors = {
    ui: fromUiSlice.selectors,
    cart: fromCartSlice.selectors
}
export default selectors;