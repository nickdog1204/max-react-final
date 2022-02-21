import classes from './CartButton.module.css';
import {useDispatch, useSelector} from "react-redux";
import {actions, selectors} from "../../store";

const CartButton = (props) => {
    const dispatch = useDispatch();
    const {toggleCart} = actions.ui.uiActions;
    const {selectTotalNum} = selectors.cart
    const totalNum = useSelector(selectTotalNum);

    const toggleCartHandler = () => {
        dispatch(toggleCart());
    }
    return (
        <button onClick={toggleCartHandler} className={classes.button}>
            <span>My Cart</span>
            <span className={classes.badge}>{totalNum}</span>
        </button>
    );
};

export default CartButton;
