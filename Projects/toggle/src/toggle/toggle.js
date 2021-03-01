import React from 'react';
import {useState} from 'react';
import on from '../images/on.jpg';
import off from '../images/off.jpg';
import './toggle.css';

function Toggle(){
  const [toggle, setToggle] = useState(true);
  function toggleImage(){
    setToggle(toggle =>(toggle ? false : true));
  }
  return (
      <div>
          <div>
            <h1>Toggle Functionality</h1>
            <img src={(toggle == true ? on : off)} alt="toggle"/>
            <h2>{(toggle == true ? 'On' : 'Off')}</h2>
          </div>
          <button className="btn" onClick={toggleImage}>Toggle</button>
      </div>
  );
}

export default Toggle;