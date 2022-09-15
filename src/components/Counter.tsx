import React, {useState} from 'react';
import "./Counter.scss"

const Counter = () => {
    const [count, setCount] = useState(0)
    return (
        <div>
            <h2>{count}</h2>
            <button className="btn" onClick={()=>setCount(prevState => prevState+1)}>increase</button>
        </div>
    );
};

export default Counter;