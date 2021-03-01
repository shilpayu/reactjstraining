import logo from './logo.svg';
import './App.css';
import HomePage from './HomePage/HomePage';
import AboutUs from './AboutUs/AboutUs';
import Items from './Items/items';
import Nav from './Nav/Nav';
import { BrowserRouter } from 'react-router-dom';
import RouteHandler from './RouteHandler';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
         <RouteHandler/>
      </BrowserRouter>
    </div>
    // <div className="App">
    //   <BrowserRouter>
    //   {/* <Nav/> */}
    //   <RouteHandler/>
    //   {/* <HomePage/>
    //   <AboutUs/>
    //   <Items/> */}
    //   </BrowserRouter>
    // </div>
  );
}

export default App;
