import React from 'react'; 
import {Route, Switch} from 'react-router-dom';
import EmployeeList from './EmployeeList/EmployeeList';
import EmployeeListbyId from './EmployeeListbyId/EmployeeListbyId';

function RouteHandler(){
   return (
     <div>
        <div>
            <h1>React Integration with Axios !!!</h1>
            <EmployeeList/>
        </div>
        <div>
           <Switch>
               <Route path="/employees" exact component={EmployeeList} />
               <Route path="/employees/:id" component={EmployeeListbyId} />
           </Switch>
        </div>
     </div>
   );
}
export default RouteHandler;