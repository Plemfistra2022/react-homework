import {useState} from "react";

const Buttons = () => {
    // eslint-disable-next-line prefer-const
    let [counter, setCounter] = useState(0)
    return (
        <div>
            <h2>{counter}</h2>
            <button onClick={()=>{
                setCounter(++counter);
            }}>increment</button>

            {/*<button onClick={()=>{*/}
            {/*    setCounter(--counter);*/}
            {/*}}>decrement</button>*/}

            <button onClick={()=>{
                setCounter(prevState => {
                    return --prevState;
                });
            }}>decrement</button>
        </div>
    );
};

export default Buttons;