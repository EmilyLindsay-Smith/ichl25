import React from "react";
import mathsinstitutea from '../images/mathsinstitutea.jpg';

function Info() {
    return (
        <div className="info">
            <div className="container container-pad">
        <h1 id="site-top"> Venue Information </h1>

            <div className="row align-items-center my-5">
            <div className="col-lg-6">
              <img
                className="img-fluid rounded mb-4 mb-lg-0"
                src={mathsinstitutea}
                alt=""
              />
            </div>
            <div className="col-lg-6">
              
            <p> The 25th International Conference on Historical Linguistics will take place in Oxford the city of <em>Dreaming Spires</em>. <strong>For information on how to get to Oxford, <a href="https://www.ox.ac.uk/visitors/visiting-oxford/how-get-oxford" rel="noopener noreferrer" target="_blank">check out this guidance</a></strong></p>
            <p> We are looking forward to welcoming you to the <strong>Andrew Wiles Building</strong>, part of the <strong>Mathematical Institute within the Radcliffe Observatory Quarter</strong>. The building has the largest purpose-built conference facilities in Oxford, and is ideally located close to Somerville College. Have a look at the map below to orientate yourself.</p>
            <p> We will have use of a large lecture room ideal for the plenary talks, and smaller seminar rooms for the general varied size sessions. All rooms are equipped with data projectors and screens, microphones, and whiteboards. There are large spaces for coffee breaks and evening receptions, as well as the poster sessions. Wi-fi is available throughout the building (Eduroam and The Cloud) and all rooms and public areas are wheelchair accessible.</p>
    </div>                 
                <iframe 
                    title="ICHL Conference Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2469.4931110707703!2d-1.2649561840214252!3d51.76059189997969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876c6a76879a4eb%3A0x14fcdb0deacb3a22!2sMathematical%20Institute!5e0!3m2!1sen!2suk!4v1652081333684!5m2!1sen!2suk" 
                    width="70%" 
                    height="400" 
                    style={{border:0, padding:20}} 
                    allowfullscreen="" 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe>

                
            </div>

        </div>
        </div>
    );
}

export default Info;  