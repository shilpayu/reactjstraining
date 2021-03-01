import React from 'react'; 
import { NavLink } from 'react-router-dom';
function Nav(){
    const navStyle = {
        color:'black',
        padding:'10px',
    }
    return (
       <div className="nav-links">
           <NavLink style={navStyle} to="/" >Home Page</NavLink>
           <NavLink style={navStyle} to="/aboutus" >About Us</NavLink>
           <NavLink style={navStyle} to="/items" >Items</NavLink>
       </div>
    );
}
export default Nav;