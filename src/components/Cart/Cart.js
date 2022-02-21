import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import {useSelector} from "react-redux";
import {selectors} from "../../store";

const Cart = (props) => {
    const {selectCartItems} = selectors.cart
    const cartItems = useSelector(selectCartItems)
    const output = cartItems.length === 0 ?
        <p style={{fontSize: '50px', color: 'red'}}>沒有東西</p> :
        cartItems.map(it => <CartItem
            key={it.id}
            item={it}
        />)

    return (
        <Card className={classes.cart}>
            <h2>Your Shopping Cart</h2>
            <ul>
                {output}
            </ul>
        </Card>
    );
};

export default Cart;
