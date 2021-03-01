import React from 'react';
import {useState} from 'react';
import DisplayResult from '../DisplayCalculationResult/DisplayResult';
import './calculation.css';

function Calculation(){
    const [firstvalue,setFirstValue] = useState('');
    const [secondvalue,setSecondValue] = useState('');
    const [result,setResult] = useState('');
    function FirstValueEventHandler(e){
        setFirstValue(e.target.value);
    }
    function SecondValueEventHandler(e){
        setSecondValue(e.target.value);
    }
    function Add(){
       setResult(Number(firstvalue)+Number(secondvalue));
    }
    function Sub(){
        setResult(Number(firstvalue)-Number(secondvalue));
    }
    function Mul(){
        setResult(Number(firstvalue)*Number(secondvalue));
    }
    function Div(){
        setResult(Number(firstvalue)/Number(secondvalue));
    }
    function Reset(){
        setResult(0);
    }
    return (
        <div>
                <div>
                    <label>First Value: </label>
                    <input type="text" 
                    placeholder="First value"
                    name="firstvalue"
                    value={firstvalue}
                    onChange={FirstValueEventHandler}
                    />
                 </div>
                 <div>
                    <label>Second Value: </label>
                    <input type="text" 
                    placeholder="Second value"
                    name="secondvalue"
                    value={secondvalue}
                    onChange={SecondValueEventHandler}
                    />
                 </div>
                 <div>
                    <button className="btn" onClick={Add}>Add</button>
                    <button className="btn" onClick={Sub}>Sub</button>
                    <button className="btn" onClick={Mul}>Mul</button>
                    <button className="btn" onClick={Div}>Div</button>
                    <button className="btn" onClick={Reset}>Reset</button>
                 </div>
                 <div className="displayResult">
                   <DisplayResult result={result}/>
                 </div>
        </div>
    );
}

export default Calculation;