import logo from './logo.svg';
import './App.css';
import Controlled from './Controlled/controlled';
import Uncontrolled from './Uncontrolled/uncontrolled';
import Container from './Container/container';
import UseEffectExample from './useEffectExample/UseEffectExample';
import CounterOne from './CounterOne/CounterOne';
import CounterTwo from './CounterTwo/CounterTwo';

function App() {
  return (
    <div className="App">
      <CounterOne/>
      <CounterTwo/>
      <UseEffectExample/>
      {/* <Container/>
     <Controlled/>
     <Uncontrolled/> */}
    </div>
  );
}

export default App;
