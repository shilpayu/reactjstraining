import logo from './logo.svg';
import './App.css';
import GreetingMessage from './GreetingMessage/GreetingMessage';
import GreetingMessageWithoutJSX from './GreetingMessageWithoutJSX/GreetingMessageWithoutJSX';
import WeatherForecast from './WeatherForecast/WeatherForecast';
import WeatherForecastApi from './WeatherForecastApi/WeatherForecastApi';
import Buttons from './Buttons/Buttons';

function App() {
  return (
    <div className="App">
     {/* <GreetingMessage/>
     <GreetingMessageWithoutJSX/>
     <WeatherForecast/> */}
     {/* <WeatherForecastApi/> */}
     <Buttons/>
    </div>
  );
}

export default App;
