import {actions} from '../reducers/cart-slice'
import {setNotification} from '../../ui/actions/ui.actions'



export const addCartItem = actions.addCartItem;
export const removeCartItem = actions.removeCartItem;
export const increaseCartItemQuantity = actions.increaseCartItemQuantity;
export const decreaseCartItemQuantity = actions.decreaseCartItemQuantity;

export const saveCartStateToDatabase = (cart) => async (dispatch) => {

    const sendRequestAsync = async (cart) => {
        const res = await fetch('https://teacher-lee-default-rtdb.firebaseio.com/cart.json', {
            method: 'PUT',
            body: JSON.stringify(cart)
        })
        if (!res.ok) {
            throw new Error('Error sending cart to firebase');
        }
        return await res.json();
    }
    dispatch(setNotification({status: 'pending', title: '處理中。。。', message: '正在儲存購物車'}))

    try {
        const data = await sendRequestAsync(cart);
        dispatch(setNotification({status: 'success', title: '成功了', message: '購物車儲存成功'}));
    } catch (error) {
        dispatch(setNotification({status: 'error', title: '出錯了', message: '儲存購物車時出錯了'}));
    }

}
