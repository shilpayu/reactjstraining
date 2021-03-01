import React from 'react';

class GreetingMessageWithoutJSX extends React.Component{
  render(){
      return React.createElement('div',null,'This is my second React example without JSX');
  }
}

export default GreetingMessageWithoutJSX;