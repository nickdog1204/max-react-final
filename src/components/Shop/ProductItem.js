import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import {useDispatch} from "react-redux";
import {actions} from "../../store";

const ProductItem = (props) => {
    const {id, title, price, description} = props;
    const itemDataToAdd = {id, title, price};
    const dispatch = useDispatch();
    const {addCartItem} = actions.cart.cartActions;

    const addItemHandler = (event) => {
        dispatch(addCartItem(itemDataToAdd));
    }

    return (
        <li className={classes.item}>
            <Card>
                <header>
                    <h3>{title}</h3>
                    <div className={classes.price}>${price.toFixed(2)}</div>
                </header>
                <p>{description}</p>
                <div className={classes.actions}>
                    <button onClick={addItemHandler}>Add to Cart</button>
                </div>
            </Card>
        </li>
    );
};

export default ProductItem;
