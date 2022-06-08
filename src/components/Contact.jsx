import React from 'react';

function Contact(){
    return(
        <div className="container container-pad">
        <h1 id="site-top"> Contact Us </h1>
        <h4>Email:</h4>
        <p><a href="mailto:ichl25@ling-phil.ox.ac.uk">ichl25@ling-phil.ox.ac.uk</a></p>
        <h4>Address:</h4>
        <address>  Faculty of Linguistics, Philology and Phonetics, <br/>
            Clarendon Institute,<br/>
            Walton St.,<br/>
            Oxford, <br/>
            OX12HG <br/>
        </address>

        <h2>
            If you have any problems or comments on the website, please contact Emily Lindsay-Smith at <a href="mailto:emily.lindsay-smith@ling-phil.ox.ac.uk">emily.lindsay-smith@ling-phil.ox.ac.uk</a>
        </h2>
        </div>
    );
}

export default Contact