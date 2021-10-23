import { useDispatch } from "react-redux";
import { increment, decrement, reset, incrementByAmount, decrementByAmount } from '../store/counterSlice';

function CounterActions(props) {

    const dispatch = useDispatch()


    return (
        <div>
        <button onClick={() =>dispatch(increment())}>Increment</button>
        <button onClick={() =>dispatch(decrement())}>Decrement</button>
        <button onClick={() =>dispatch(reset())}>Reset</button>
        <button onClick={() =>dispatch(incrementByAmount(5))}>+ 5</button>
        <button onClick={() =>dispatch(decrementByAmount(5))}>- 5</button>
        </div>
    );
}

export default CounterActions;