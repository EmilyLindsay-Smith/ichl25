import React from "react";
import { NavLink} from "react-router-dom";
import logo from './logo.png';
import logo2 from './logo-ox.png'

function Navigation() {
   return (
       <div className="navigation">
           <nav className="navbar navbar-expand-md navbar-dark bg-ox">
               <div className = "container">
                   <a class="navbar-brand d-inline-block align-text-top" href="https://ling-phil.ox.ac.uk">
                       <img src={logo2} alt="" ></img>
                       <img src={logo} alt="" ></img>
                   </a>
                   <NavLink className="navbar-brand" to="/">
                        <span class="site-title">ICHL25</span> 
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