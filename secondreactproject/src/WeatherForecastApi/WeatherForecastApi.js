import { useState } from "react";
import {React} from 'react';
import DisplayData from "../DisplayData/DiaplayData";

function WeatherForecastApi(props){
   let [city,setCity] = useState('');
   let [unit,setUnit] = useState('fahrenheit');

   function onunitChange(e){
     setUnit(e.target.value);
   }
   function oncityChange(e){
    setCity(e.target.value);
   }
   function result(e) {
       e.preventDefault();
       console.log("form is submitted")
   }
   return (
       <div className="WeatherApiCpntainer">
           <h2>Weather Forecast Api</h2>
           <form onSubmit={result}>
               <label>Enter City</label>
               <input type="text" 
               placeholder="Enter City"
               name="city"
               value={city}
               onChange = {oncityChange}
               />
               <label>Fahrenheit</label>
               <input type="radio" 
               placeholder="Enter Farenheit"
               name="units"
               value="fahrenheit"
               checked = {unit == 'fahrenheit'}
               onChange = {onunitChange}
               />
               <label>Celcius</label>
               <input type="radio" 
               placeholder="Enter Celcius"
               name="units"
               value="celcius"
               checked = {unit == 'celcius'}
               onChange = {onunitChange}
               />
               <input type="submit" value="Submit"/>
           </form>
           <div className="displayData">
               <DisplayData city={city} unit={unit}/>
           </div>
       </div>
   );
}

export default WeatherForecastApi;