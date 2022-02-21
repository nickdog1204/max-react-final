import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import {actions, selectors} from "./store";
import {useDispatch, useSelector} from "react-redux";
import {Fragment, useEffect} from "react";
import Notification from "./components/UI/Notification";

const {selectShouldShowCart, selectNotification} = selectors.ui;
const {saveCartStateToDatabase} = actions.cart.cartActions;
let isFirst = true;

function App() {
    const shouldShowCart = useSelector(selectShouldShowCart);
    const notification = useSelector(selectNotification);
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
    useEffect(() => {
        if (isFirst) {
            isFirst = false;
            return;
        }
        dispatch(saveCartStateToDatabase(cart));

    }, [cart, dispatch])
    return (
        <Fragment>
            {!!notification && <Notification
                status={notification.status}
                title={notification.title}
                message={notification.message}
            />}

            <Layout>
                {shouldShowCart && <Cart/>}
                <Products/>
            </Layout>
        </Fragment>
    );
}

export default App;
