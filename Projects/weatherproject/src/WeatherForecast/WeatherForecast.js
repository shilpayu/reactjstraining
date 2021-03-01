import React from 'react';

class WeatherForecast extends React.Component {
    constructor(){
        super();
        this.state = {
            message:"initial message"
        }
    }
    buttonEventHandler(message){
        console.log(this,message);
    }
    buttonEventHandlerBind(message){
        console.log(this,message);
    }
    render(){
        const flag = true;
        return(
            <div>
                <div>
                    <button onClick={this.buttonEventHandler("passing message")}>Event Handler</button>
                </div>
                <div>
                    <button onClick={this.buttonEventHandlerBind.bind(this,"passing bind message")}>Event Handler Bind</button>
                </div>
            </div>
        );
    }
}
export default WeatherForecast;