import React,{useState} from 'react';
import {useRef} from 'react';

function Controlled(){
    const [inputValue, setInputValue] = useState("");
    function onTextChange(e) {
        setInputValue(e.target.value);
    }
    function getTextValue(event) {
        console.log("input value", inputValue);
    }  
    return(
        <div>
            <h1>Controlled</h1>
           <input type="text" value={inputValue} onChange={onTextChange}/>
           <input type="submit" value="Submit" onClick={getTextValue}/>
        </div>
    );
}

export default Controlled;