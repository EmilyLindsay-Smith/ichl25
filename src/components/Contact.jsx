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
        <p> You can also follow us on twitter <a href="https://twitter.com/ICHL25" target="_blank" rel="noreferrer">@ICHL25</a></p>
        <h6>
            If you have any problems or comments on the website, please contact Emily Lindsay-Smith at <a href="mailto:emily.lindsay-smith@ling-phil.ox.ac.uk">emily.lindsay-smith@ling-phil.ox.ac.uk</a>
        </h6>
        </div>
    );
}

export default Contact