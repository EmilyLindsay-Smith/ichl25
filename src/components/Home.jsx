import React from "react";

function Home(){
    return (
        <div className="home">
        <div class="container container-pad">
          <div class="row align-items-center my-5">
            <div class="col-lg-7">
              <img
                class="img-fluid rounded mb-4 mb-lg-0"
                src="https://www.ling-phil.ox.ac.uk/files/styles/homepage_link/public/radcliffe-camera.jpg?itok=Dh_HfLFh"
                alt=""
              />
            </div>
            <div class="col-lg-5">
 
             <h1>Welcome to the Twenty-Fifth International Conference on Historical Linguistics!</h1>
            <p>
                We're delighted to see you in Oxford this year. To facilitate a paper-less conference experience, we've created this website.
                So if you want information about the programme, the workshops, to see which people are presenting when, or information about the venue and Oxford in general, check out the links above.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Home;