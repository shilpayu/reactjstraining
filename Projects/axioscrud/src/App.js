import './App.css';
import RouteHandler from './RouteHandler';
import { BrowserRouter } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
         <RouteHandler/>
      </BrowserRouter>
    </div>
  );
}

export default App;
