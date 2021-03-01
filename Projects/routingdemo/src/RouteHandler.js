import React from 'react'; 
import {Route, Switch} from 'react-router-dom';
import Nav from './Nav/Nav';
import HomePage from './HomePage/HomePage';
import AboutUs from './AboutUs/AboutUs';
import Items from './Items/items';
import NoMatch from './NoMatch/NoMatch';
import Itemlist from './Itemslist/Itemslist';

function RouteHandler(){
    return (
        <div>
            <div>
                <Nav/>
            </div>
            <div>
                <Switch>
                <Route path="/" exact component={HomePage}/>
                <Route path="/aboutus"  component={AboutUs}/>
                <Route path="/items" exact component={Items}/>
                <Route path="/items/:id" component={Itemlist} />
                <Route component={NoMatch} /> 
                {/* <Route path="*" component={NoMatch} /> */}
                </Switch>
            </div>
       </div>
    );
}
export default RouteHandler;