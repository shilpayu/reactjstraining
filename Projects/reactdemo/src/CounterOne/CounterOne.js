import React,{useState} from 'react';
import useCounter from '../hooks/useCounter';
function CounterOne() {
//    const [count,setCount] = useState(0);
//    function increment(){
//     setCount(prevCount => prevCount + 1);
//    }
//    function decrement(){
//     setCount(prevCount => prevCount >= 1 ? prevCount - 1 : 0);
//    }
//    function reset(){
//     setCount(0);
//    }
   const [count,increment,decrement,reset] = useCounter(1,1);
   return(
       <div>
           <label>Counter One {count}</label>
           <div>
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
                <button onClick={reset}>Reset</button>
           </div>
       </div>
   );
}
export default CounterOne;