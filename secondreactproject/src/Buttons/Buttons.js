import {React} from 'react';
import {useState} from 'react';
import Number from '../Number/Number';
import './Buttons.css';

function Buttons(props) {
    let [num,setNumber] = useState(0);
    function add() {
        setNumber(num => num + 1)
    }
    function sub() {
        setNumber(num => (num > 0 ? num - 1 : 0))
    }
    return (
       <div>
           <div>
               <Number ChangedNumber={num}/>
           </div>
           <button onClick={add}>Increment</button>
           <button onClick={sub}>Decrement</button>
       </div>
    );  
}

export default Buttons;