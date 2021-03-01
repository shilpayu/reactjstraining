import React from 'react';
import './GreetingMessage.css'
const flag = true;
const message = 'This is my second React Project.';
class GreetingMessage extends React.Component {
    buttonEventHandler(event){
        console.log(event.target.className);
    }
    render(){
        return (
            <div className="messageContainer">
                <div className="message">Hello, {message}</div>
                <div>Hi, {(flag == true) ? 'my Program' : 'Training'}</div>
                <button id="getBtn" className="getBtn" onClick = {event=>console.log(event.target.className)}>Get</button>
                <button id="submitBtn" className="submitBtn" onClick = {this.buttonEventHandler}>Submit</button>
                <button id="resetBtn" className="resetBtn" onClick = {this.buttonEventHandler}>Reset</button>
            </div>
        );
    }
}

export default GreetingMessage;