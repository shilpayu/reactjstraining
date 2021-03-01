import React from 'react';
import useCounter from '../hooks/useCounter';

function CounterTwo (){

 const [count,increment,decrement,reset] = useCounter(10,20);
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
export default CounterTwo;