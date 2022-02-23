import classes from "./MainNavigation.module.css";
import {NavLink} from "react-router-dom";

const MainNavigation = () => {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>名言佳句</div>
            <nav className={classes.nav}>
                <ul>
                    <li>
                        <NavLink activeClassName={classes.active} to='/quotes'>名言列表</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName={classes.active} to='/new-quote'>添加新名言</NavLink>
                    </li>
                </ul>
            </nav>

        </header>

    )

}
export default MainNavigation;