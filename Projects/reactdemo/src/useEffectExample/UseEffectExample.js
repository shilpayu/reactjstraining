import React,{useEffect, useState} from 'react';
function UseEffectExample() {
   const [count,setCount] = useState(0);
   const [count1,setOneCount] = useState(0);
//    useEffect(()=>{
//      document.title = `${count} clicks`;
//      console.log("calling useEffect"); //use effect
//    });
   useEffect(()=>{
    document.title = `${count} clicks`;
    console.log("calling useEffect");  //use effect with particular scenario
   },[count]);
   function increment(){
    setCount(count + 1);
   }
   function incrementone(){
    setOneCount(count1 + 1);
   }
   function reset(){
    setCount(0);
    setOneCount(0);
   }
   return(
       <div>
           <label>Use Effect Example {count}</label>
           <div>
                <button onClick={increment}>Increment</button>
                <button onClick={incrementone}>Increment One</button>
                <button onClick={reset}>Reset</button>
           </div>
       </div>
   );
}
export default UseEffectExample;