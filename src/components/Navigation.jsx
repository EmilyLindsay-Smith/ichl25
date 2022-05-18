import React from "react";
import { NavLink} from "react-router-dom";
import logo from './logo.png';
import logo2 from './logo-ox.png'

function Navigation() {
   return (
       <div className="navigation">
           <nav className="navbar navbar-expand-lg navbar-dark bg-ox nav-fill">
               <div className = "container">
                   <a className="navbar-brand d-inline-block align-text-top" href="https://ling-phil.ox.ac.uk">
                       <img src={logo2} alt="" ></img>
                       <img src={logo} alt="" ></img>
                   </a>
                   <NavLink className="navbar-brand" to="/">
                        <span className="site-title" id="site-title">International Conference on Historical Linguistics 2022</span>  <br/> ICHL25 -- Oxford, 1-5 August 2022 
                   </NavLink>
                   <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <br/>
                   <div className="collapse navbar-collapse" id="navbarNav">
                       <ul className="navbar-nav ml-auto">
                           <li className="nav-item">
                               <NavLink className="nav-link" to="/">
                                    Home 
                                    <span className="sr-only"></span>
                               </NavLink>
                           </li>
                           <li className="nav-item dropdown">
                               <a className="nav-link dropdown-toggle .dropdown-toggle-split" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                   Presentations 
                                </a>
                            <ul className="dropdown-menu dropdown-menu-dark bg-ox" aria-labelledby="navbarDropdown">
                                <li className="dropdown-item">
                                    <NavLink className="nav-link" to="/programme">
                                    Programme 
                                    </NavLink>
                                </li>
                                <li className="dropdown-item">
                                    <NavLink className="nav-link" to="/plenaryspeakers">
                                    Plenary Speakers  
                                    </NavLink>
                                </li>
                                <li className="dropdown-item">
                                    <NavLink className="nav-link" to="/workshops">
                                    Workshops 
                                    </NavLink>
                                </li>
                                <li className="dropdown-item">
                                    <NavLink className="nav-link" to="/people">
                                    People
                                    </NavLink>
                                </li>
                            </ul>
                           </li>
                           
                           <li className="nav-item dropdown">
                               <a className="nav-link dropdown-toggle .dropdown-toggle-split" href="#" id="navbarDropdown2" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                   Info 
                                </a>
                            <ul className="dropdown-menu dropdown-menu-dark bg-ox" aria-labelledby="navbarDropdown2">
                           <li className="dropdown-item">
                               <NavLink className="nav-link" to="/info">
                                   Venue Info  
                               </NavLink>
                           </li>
                           <li className="dropdown-item">
                               <NavLink className="nav-link" to="/registration-and-fees">
                                  Registration  
                               </NavLink>
                           </li>
                           
                           <li className="dropdown-item">
                               <NavLink className="nav-link" to="/accommodation">
                                   Accommodation  
                               </NavLink>
                           </li>
                           <li className="dropdown-item">
                               <NavLink className="nav-link" to="/excursions">
                                   Excursions
                               </NavLink>
                           </li>                           
                           <li className="dropdown-item">
                               <NavLink className="nav-link" to="/organisers">
                                   Organisers  
                               </NavLink>
                           </li>
                           <li className="dropdown-item">
                               <NavLink className="nav-link" to="/contact">
                                   Contact  
                               </NavLink>
                           </li>
                           </ul>
                           </li>
                       </ul>
                   </div>
               </div>
           </nav>
       </div>
   ) 
}

export default Navigation; 