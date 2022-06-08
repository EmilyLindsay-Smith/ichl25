import React from "react";
import { NavLink} from "react-router-dom";
import logo from './logo.png';
import logo2 from './logo-ox.png'

function Navigation() {
   return (
       <div className="navigation">
           <nav className="navbar navbar-expand-lg navbar-dark bg-ox nav-fill" >
               <div className = "container fluid-container">
                   <div>
                   <a className="navbar-brand d-inline-block align-text-top" href="https://ling-phil.ox.ac.uk">
                       <img src={logo2} alt="" ></img>
                       <img src={logo} alt="" ></img>
                   </a>
                   </div>
                   <div id="navbar-titles">
                   <NavLink className="navbar-brand" id="navbar-brand-title" to="/">
                        <p className="header-title"><span className="site-title">International Conference on Historical Linguistics 2022</span>  <br/> ICHL25: Oxford, 1-5 August 2022 </p>
                   </NavLink>
                   </div>
                   <div id="navigationjump">

                   <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span >Menu </span> {/*</button>className="navbar-toggler-icon"></span> */}
                    </button>
                    
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
                                <li className="dropdown-item">
                               <NavLink className="nav-link" to="/presenter-info">
                                   Info for Presenters  
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
                                <NavLink className="nav-link" to="/accommodation">
                                    Accommodation  
                                </NavLink>
                            </li>
                            <li className="dropdown-item">
                                <NavLink className="nav-link" to="/covid-policy">
                                  Covid Policy  
                                </NavLink>
                            </li>                    
                            <li className="dropdown-item">
                                <NavLink className="nav-link" to="/excursions">
                                   Excursions
                                </NavLink>
                           </li>
                           <li className="dropdown-item">
                               <NavLink className="nav-link" to="/presenter-info">
                                   Info for Presenters  
                               </NavLink>
                           </li> 
                           <li className="dropdown-item">
                               <NavLink className="nav-link" to="/organisers">
                                   Organisers  
                               </NavLink>
                           </li>       
                           <li className="dropdown-item">
                               <NavLink className="nav-link" to="/publishers">
                                   Publishers  
                               </NavLink>
                           </li>                                               
                           <li className="dropdown-item">
                               <NavLink className="nav-link" to="/registration-and-fees">
                                  Registration  
                               </NavLink>
                           </li>
                           <li className="dropdown-item">
                               <NavLink className="nav-link" to="/info">
                                   Venue Info  
                               </NavLink>
                           </li>
                     
                           </ul>
                           </li>
                           <li className="nav-item">
                               <NavLink className="nav-link" to="/contact">
                                   Contact Us 
                               </NavLink>
                           </li>
                       </ul>
                   </div>
                   </div>
               </div>
           </nav>
       </div>
   ) 
}

export default Navigation; 