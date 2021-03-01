import React from 'react';
import './calculationresult.css';

function CalculationResult(props){
   return (
       <div>
           <h2>Result {props.option} is {props.result}</h2>
       </div>
   );
}
export default CalculationResult;