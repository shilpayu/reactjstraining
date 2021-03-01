import {useState} from 'react';

function useCounter(initialValue,incrementValue) {
    const [count,setCount] = useState(initialValue);
    function increment(){
     setCount(prevCount => prevCount + incrementValue);
    }
    function decrement(){
     setCount(prevCount => prevCount > initialValue ? prevCount - initialValue : initialValue);
    }
    function reset(){
     setCount(initialValue);
    }
    return [count,increment,decrement,reset];
}
export default useCounter;