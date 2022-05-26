import React from "react";
import {NavLink} from "react-router-dom";

import somerville from '../images/somerville.jpg';
import about from '../images/about.jpg';
import library from '../images/library.jpg';
import mathsinstitutea from '../images/mathsinstitutea.jpg';
import mathsinstitutec from '../images/mathsinstitutec.jpg';
import radcliffecamera from '../images/radcliffecamera.jpg';
import mathslecture from '../images/mathslecture.jpg';

function Home(){
    return (
        <div className="home">
        <div className="container container-pad">
          <h1 id="site-top">Welcome to the Twenty-Fifth International Conference on Historical Linguistics!</h1>
          <div className="row align-items-center my-5">
            <div className="col-lg-6">
              <img
                className="img-fluid rounded mb-4 mb-lg-0"
                src={radcliffecamera}
                alt=""
              />
            </div>
            <div className="col-lg-6">
              
            <p>The Faculty of Linguistics, Philology, and Phonetics at the University of Oxford will be hosting the 25th International Conference on Historical Linguistics (ICHL25), from <strong>1 to 5 August 2022</strong>. This conference has been postponed from the originally planned year of 2021.</p>

<p><em>ICHL brings together historical linguists and specialists in related fields to explore advances in areas including methods and practices of linguistic reconstruction; formal approaches to language change; historical sociolinguistics; computational approaches to historical linguistics; contact and areal linguistics; interfaces between historical linguistics and other disciplines; and many other related areas.</em></p>
</div>  
</div>
<div className="row align-items-center my-5">
  <p className="col-lg-1"></p>
<p className="col-lg-10">We intend ICHL 2022 to be an exclusively 'live', not 'virtual' or 'hybrid', conference—an occasion for us all to meet again face-to-face! <br/>
Explore our website for details of:<br/>
<ul>
  <li>The full conference programme, including workshops and plenaries</li>
  <li>Information about available accommodation</li>
  <li>Planned excursions and social events</li>
</ul>
</p>    
          <div className="container container-pad fluid-containerB">
             
          <NavLink className="nav-link" to="/programme">  
            <div className="card-home">
            <img
                    class="img-fluid rounded mb-4 mb-lg-0"
                    src={library}
                    alt="Taylor Library"
                    />
              <div className="card-content">
                <p>Conference Programme</p>
              </div>
            </div>
          </NavLink>
          <NavLink className="nav-link" to="/workshops">  
            <div className="card-home">
            <img
                  class="img-fluid rounded mb-4 mb-lg-0"
                  src={mathsinstitutec}
                  alt=""
                    />
              <div className="card-content">
                <p>Workshops</p>
              </div>
            </div>
          </NavLink>
          <NavLink className="nav-link" to="/plenaryspeakers">  
            <div className="card-home">
            <img
                    class="img-fluid rounded mb-4 mb-lg-0"
                    src={mathslecture}
                     alt=""
                    />
              <div className="card-content">
                <p>Plenary Speakers</p>
              </div>
            </div>
          </NavLink>
          <NavLink className="nav-link" to="/registration-and-fees">  
            <div className="card-home">
            <img
                    class="img-fluid rounded mb-4 mb-lg-0"
                    src={mathsinstitutea}
                     alt=""
                    />
              <div className="card-content">
                <p>Registration and Fees</p>
              </div>
            </div>
          </NavLink>
          <NavLink className="nav-link" to="/excursions">  
            <div className="card-home">
            <img
                    class="img-fluid rounded mb-4 mb-lg-0"
                    src={about}
                     alt=""
                    />
              <div className="card-content">
                <p>Excursions</p>
              </div>
            </div>
          </NavLink>
          <NavLink className="nav-link" to="/accommodation">  
            <div className="card-home">
            <img
                    class="img-fluid rounded mb-4 mb-lg-0"
                    src={somerville}
                     alt=""
                    />
              <div className="card-content">
                <p>Accomodation</p>
              </div>
            </div>
          </NavLink>

          </div>
          </div>
        </div>
      </div>
    );
}

export default Home;