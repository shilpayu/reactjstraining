import React from 'react';

function WeatherForecast() {
    const btnNames = [
      'getBtn',
      'submitBtn',
      'resetBtn',
      'logout'
    ];
    const flag = true;
    function buttonEventHandler(event){
        console.log(event.target.className);
    }
    return (
        <div className="messageContainer">
            <h1>Greeting Message</h1>
            <div className="message">{(flag == true ? "Hello" : "World")}</div>
            {flag && btnNames.map((buttonName) => {
                return  <button key={buttonName} className={buttonName} onClick = {buttonEventHandler}>{buttonName}</button>;
            })}
            {/* <button id="getBtn" className="getBtn" onClick = {event=>console.log(event.target.className)}>Get</button>
            <button id="submitBtn" className="submitBtn" onClick = {this.buttonEventHandler}>Submit</button>
            <button id="resetBtn" className="resetBtn" onClick = {this.buttonEventHandler}>Reset</button> */}
        </div>
    );
}
export default WeatherForecast;