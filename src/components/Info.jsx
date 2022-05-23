import React from "react";
import mathsinstitutea from '../images/mathsinstitutea.jpg';

function Info() {
    return (
        <div className="info">
            <div class="container container-pad">
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
              
            <p>ICHL25 is taking place in the Mathematical Institute in the Radcliffe Observatory Quarter, just a few minutes walk out of Oxford city centre. Have a look at the map below to orientate yourself:</p>
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