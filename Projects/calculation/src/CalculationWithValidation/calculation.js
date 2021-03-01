import React from 'react';
import {useState} from 'react';
import CalculationResult from '../CalculationResult/calculationresult';
import { Button } from '@material-ui/core';
import './calculation.css';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

function Calculation(){
   const [firstvalue,setFirstValue] = useState('');
   const [secondvalue,setSecondValue] = useState('');
   const [option,setOption] = useState('Submit');
   const [result,setResult] = useState('');
   function firstValueEventHandler(e){
       if(e.target.value > 0){
         setFirstValue(e.target.value)
       }
       else {
         setFirstValue('')
       }
   }
   function secondValueEventHandler(e){
       if(e.target.value > 0){
          setSecondValue(e.target.value)
       }
       else {
        setSecondValue('')
       }
   } 
   function optionEventHandler(e){
       setOption(e.target.value)
       setResult('');
   }
   function Submit(e){
       if(firstvalue != '' && secondvalue != '' && option != ''){
           if(option == 'Add'){
            setResult(Number(firstvalue)+Number(secondvalue));
           }
           else if(option == 'Sub'){
            setResult(Number(firstvalue)-Number(secondvalue));
           }
           else if(option == 'Mul'){
            setResult(Number(firstvalue)*Number(secondvalue));
           }
           else if(option == 'Div'){
            setResult(Number(firstvalue)/Number(secondvalue));
           }
           else {
            setResult('');
           }
       }
       else {
           alert('Please fill all the required fields!');
       }
   }
   function Reset(){
      setResult('');
      setFirstValue('');
      setSecondValue('');
      setOption('Submit');
   }
   return (
       <div>
           <h3>Calculation</h3>
           <div>
               <div className="left">
                   <label>First Value* </label>
                </div>
                <div className="right">
                    <TextField id="outlined-basic" label="First Value" variant="outlined" 
                    name="firstvalue"
                    value={firstvalue}
                    onChange={firstValueEventHandler}/>
                </div>

           </div>
           <div>
                <div className="left">
                   <label>Second Value* </label>
                </div>
                <div className="right">
                    <TextField id="outlined-basic" label="Second Value" variant="outlined" 
                    name="secondvalue"
                    value={secondvalue}
                    onChange={secondValueEventHandler}/>
                </div>
            </div>
            <div>
                <div className="left">
                   <label>Option* </label>
                </div>
                <div className="right">
                    <FormControl variant="outlined">
                    <InputLabel id="demo-simple-select-outlined-label">Option </InputLabel>
                    <Select labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={option}
                    onChange={optionEventHandler}
                    label="Option"
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={'Add'}>1</MenuItem>
                        <MenuItem value={'Sub'}>2</MenuItem>
                        <MenuItem value={'Mul'}>3</MenuItem>
                        <MenuItem value={'Div'}>4</MenuItem>
                    </Select>
                    </FormControl>
                </div>
            </div>
            <div>
                <div className="btnleft">
                    <Button className="pbtn" color="primary" variant="contained" onClick={Submit}>{option}</Button>
                </div>
                <div className="btnright">
                    <Button className="rbtn" color="default" variant="contained"  onClick={Reset}>Reset</Button>
                </div>
            </div>
            <div>
                <div className="btnleft">
                     {result && <CalculationResult option={option} result={result}/>}
                </div>
                <div className="btnright">
                </div>
            </div>
       </div>
   );
}

export default Calculation;
