import classes from './Counter.module.css';
import {useDispatch, useSelector} from "react-redux";
import {actions} from "../store";

const {counterActions} = actions
const Counter = () => {
    const counter = useSelector(state => state.counter.counter);
    const showCounter = useSelector(state => state.counter.showCounter)
    const dispatch = useDispatch();

    const incrementHandler = () => {
        dispatch(counterActions.increment());
    }

    const increaseHandler = () => {
        dispatch(counterActions.increase(10));


    }
    const decrementHandler = () => {
        dispatch(counterActions.decrement());
    }

    const toggleCounterHandler = () => {
        dispatch(counterActions.toggleCounter());
        console.log('toggle')
    }

    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            {showCounter && <div className={classes.value}>{counter}</div>}
            <div>
                <button onClick={incrementHandler}>增加 +</button>
                <button onClick={increaseHandler}>增加 +10</button>
                <button onClick={decrementHandler}>減少 -</button>
            </div>

            <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
    );
};

export default Counter;
