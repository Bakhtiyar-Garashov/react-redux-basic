import { useState } from "react";

function Counter(props) {
    return (
        <div>
        <p>
            Clicked: {props.count} times
        </p>
        </div>
    );
    
}

export default Counter;