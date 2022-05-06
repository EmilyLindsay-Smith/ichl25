import React from "react";
import { NavLink} from "react-router-dom";

function Navigation() {
   return (
       <div className="navigation">
           <nav className="navbar navbar-expand navbar-dark bg-dark">
               <div className = "container">
                   <NavLink className="navbar-brand" to="/">
                        ICHL25 
                   </NavLink>
                   <div>
                       <ul className="navbar-nav ml-auto">
                           <li className="nav-item">
                               <NavLink className="nav-link" to="/">
                                    Home 
                                    <span className="sr-only"></span>
                               </NavLink>
                           </li>
                           <li className="nav-item">
                               <NavLink className="nav-link" to="/programme">
                                   Programme 
                               </NavLink>
                           </li>
                           <li className="nav-item">
                               <NavLink className="nav-link" to="/workshops">
                                   Workshops 
                               </NavLink>
                           </li>
                           <li className="nav-item">
                               <NavLink className="nav-link" to="/people">
                                   People
                               </NavLink>
                           </li>
                           <li className="nav-item">
                               <NavLink className="nav-link" to="/info">
                                   Info  
                               </NavLink>
                           </li>
                       </ul>
                   </div>
               </div>
           </nav>
       </div>
   ) 
}

export default Navigation; 