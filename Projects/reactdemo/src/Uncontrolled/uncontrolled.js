import React,{useState} from 'react';
import {useRef} from 'react';
function Uncontrolled(){
    const textRef = useRef(null);
    function setFocus() {
        console.log(textRef,textRef.current.value);
    }  
    return(
        <div>
            <h1>Un Controlled</h1>
           <input type="text" ref={textRef} />
           <input type="submit" value="Submit" onClick={setFocus}/>
        </div>
    );
}
export default Uncontrolled;