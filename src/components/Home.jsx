import React from "react";
import {NavLink} from "react-router-dom";

function Home(){
    return (
        <div className="home">
        <div className="container container-pad">
          <h1>Welcome to the Twenty-Fifth International Conference on Historical Linguistics!</h1>
          <div className="row align-items-center my-5">
            <div className="col-lg-6">
              <img
                className="img-fluid rounded mb-4 mb-lg-0"
                src="https://www.ling-phil.ox.ac.uk/files/styles/homepage_link/public/radcliffe-camera.jpg?itok=Dh_HfLFh"
                alt=""
              />
            </div>
            <div className="col-lg-6">
              
            <p>The Faculty of Linguistics, Philology, and Phonetics at the University of Oxford will be hosting the 25th International Conference on Historical Linguistics (ICHL25), from <strong>1 to 5 August 2022</strong>. This conference has been postponed from the originally planned year of 2021.</p>

<p><em>The ICHL brings together historical linguists and specialists in related fields to explore advances in areas including methods and practices of linguistic reconstruction; formal approaches to language change; historical sociolinguistics; computational approaches to historical linguistics; contact and areal linguistics; interfaces between historical linguistics and other disciplines; and many other related areas.</em></p>
</div>   
          </div>
          <div className="container container-pad fluid-containerC">
          <p>We intend ICHL 2022 to be an exclusively 'live', not a 'virtual', conference—an occasion for us all to meet again face-to-face! <br/>
Explore our website for details of:<br/>
<ul>
  <li>The full conference programme, including workshops and plenaries</li>
  <li>Information about available accommodation</li>
  <li>Planned excursions and social events</li>
</ul>
<br/>
</p>               
          <NavLink className="nav-link" to="/programme">  
            <div className="card-home">
              <img
                src="https://www.ling-phil.ox.ac.uk/files/styles/homepage_link/public/radcliffe-camera.jpg?itok=Dh_HfLFh"
                alt="Pic"
              />
              <div className="card-content">
                <h4>Conference Programme</h4>
              </div>
            </div>
          </NavLink>
          <NavLink className="nav-link" to="/workshops">  
            <div className="card-home">
              <img
                src="https://www.ling-phil.ox.ac.uk/files/styles/homepage_link/public/radcliffe-camera.jpg?itok=Dh_HfLFh"
                alt="Pic"
              />
              <div className="card-content">
                <h4>Workshops</h4>
              </div>
            </div>
          </NavLink>
          <NavLink className="nav-link" to="/plenaryspeakers">  
            <div className="card-home">
              <img
                src="https://www.ling-phil.ox.ac.uk/files/styles/homepage_link/public/radcliffe-camera.jpg?itok=Dh_HfLFh"
                alt="Pic"
              />
              <div className="card-content">
                <h4>Plenary Speakers</h4>
              </div>
            </div>
          </NavLink>
          <NavLink className="nav-link" to="/registration-and-fees">  
            <div className="card-home">
              <img
                src="https://www.ling-phil.ox.ac.uk/files/styles/homepage_link/public/radcliffe-camera.jpg?itok=Dh_HfLFh"
                alt="Pic"
              />
              <div className="card-content">
                <h4>Registration and Fees</h4>
              </div>
            </div>
          </NavLink>
          <NavLink className="nav-link" to="/excursions">  
            <div className="card-home">
              <img
                src="https://www.ling-phil.ox.ac.uk/files/styles/homepage_link/public/radcliffe-camera.jpg?itok=Dh_HfLFh"
                alt="Pic"
              />
              <div className="card-content">
                <h4>Excursions</h4>
              </div>
            </div>
          </NavLink>
          <NavLink className="nav-link" to="/accommodation">  
            <div className="card-home">
              <img
                src="https://www.ling-phil.ox.ac.uk/files/styles/homepage_link/public/radcliffe-camera.jpg?itok=Dh_HfLFh"
                alt="Pic"
              />
              <div className="card-content">
                <h4>Accomodation</h4>
              </div>
            </div>
          </NavLink>


          </div>
        </div>
      </div>
    );
}

export default Home;