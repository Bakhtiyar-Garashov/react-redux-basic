import { useSelector } from "react-redux";

function Counter(props) {

    // useSelector hook is fetching data from global state and returns
    const count = useSelector((state) => state.counter.value)

    return (
        <div>
        <p>
            Clicked: {count} times
        </p>
        </div>
    );
    
}

export default Counter;