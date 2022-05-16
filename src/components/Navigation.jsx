import React from "react";
import { NavLink} from "react-router-dom";
import logo from './logo.png';
import logo2 from './logo-ox.png'

function Navigation() {
   return (
       <div className="navigation">
           <nav className="navbar navbar-dark bg-ox nav-fill">
               <div className = "container">
                   <a class="navbar-brand d-inline-block align-text-top" href="https://ling-phil.ox.ac.uk">
                       <img src={logo2} alt="" ></img>
                       <img src={logo} alt="" ></img>
                   </a>
                   <NavLink className="navbar-brand" to="/">
                        <span class="site-title">International Conference on Historical Linguistics 2022</span>  <br/> ICHL25 -- Oxford, 1-5 August 2022 
                   </NavLink>
                   <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <br/>
                   <div class="collapse navbar-collapse" id="navbarNav">
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
                           <li className="nav-item">
                               <NavLink className="nav-link" to="/registration-and-fees">
                                  Registration  
                               </NavLink>
                           </li>
                           <li className="nav-item">
                               <NavLink className="nav-link" to="/plenaryspeakers">
                                   PlenarySpeakers  
                               </NavLink>
                           </li>
                           <li className="nav-item">
                               <NavLink className="nav-link" to="/accommodation">
                                   Accommodation  
                               </NavLink>
                           </li>
                           <li className="nav-item">
                               <NavLink className="nav-link" to="/excursions">
                                   Excursions
                               </NavLink>
                           </li>                           
                           <li className="nav-item">
                               <NavLink className="nav-link" to="/organisers">
                                   Organisers  
                               </NavLink>
                           </li>
                           <li className="nav-item">
                               <NavLink className="nav-link" to="/contact">
                                   Contact  
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