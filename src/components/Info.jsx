import React from "react";

function Info() {
    return (
        <div className="info">
            <div class="container container-pad">
                <h1> Information You'll Find Useful! </h1>
                ICHL25 is taking place in the Mathematical Institute in the Radcliffe Observatory - have a look at the map below: 
                <iframe 
                    title="ICHL Conference Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2469.4931110707703!2d-1.2649561840214252!3d51.76059189997969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876c6a76879a4eb%3A0x14fcdb0deacb3a22!2sMathematical%20Institute!5e0!3m2!1sen!2suk!4v1652081333684!5m2!1sen!2suk" 
                    width="600" 
                    height="450" 
                    style={{border:0}} 
                    allowfullscreen="" 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe>

                
            </div>
        </div>
    );
}

export default Info;  