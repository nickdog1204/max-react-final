import classes from './Header.module.css';
import {actions} from "../store";
import {useDispatch, useSelector} from "react-redux";

const {authActions} = actions;

const Header = () => {
    const isAuth = useSelector(state => state.auth.isAuthenticated);
    const dispatch = useDispatch();
    const logoutHandler = () => {
        dispatch(authActions.logout())
    }
    return (
        <header className={classes.header}>
            <h1>Redux Auth</h1>
            <nav>
                <ul>
                    {isAuth && <li>
                        <a href='/'>My Products</a>
                    </li>}
                    {isAuth && <li>
                        <a href='/'>My Sales</a>
                    </li>}
                    {isAuth && <li>
                        <button onClick={logoutHandler}>Logout</button>
                    </li>}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
