import React from "react";
import {NavLink} from "react-router-dom";

function Home(){
    return (
        <div className="home">
        <div className="container container-pad">
          <div className="row align-items-center my-5">
            <div className="col-lg-7">
              <img
                className="img-fluid rounded mb-4 mb-lg-0"
                src="https://www.ling-phil.ox.ac.uk/files/styles/homepage_link/public/radcliffe-camera.jpg?itok=Dh_HfLFh"
                alt=""
              />
            </div>
            <div className="col-lg-5">
 
             <h1>Welcome to the Twenty-Fifth International Conference on Historical Linguistics!</h1>
            <p>
                We're delighted to see you in Oxford this year. To facilitate a paper-less conference experience, we've created this website.
                So if you want information about the programme, the workshops, to see which people are presenting when, or information about the venue and Oxford in general, check out the links above.
              </p>
            </div>
          </div>
          <div className="container container-pad fluid-containerC">
          
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