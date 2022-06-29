import React from 'react';
import holly from '../images/holly2.jpg'
import martin from '../images/martin.jpg'
import aditi from '../images/aditi.jpg'
import emily from '../images/emily.jpeg'

function Organisers(){
    return(
        <div className="container container-pad">
        <h1 id="site-top">Organisers</h1>
        <em>With thanks to our organisers:</em>

        <div className="container container-pad fluid-containerC">
        <div className="card-organisers">
            <img
                    src={aditi}
                    alt="Aditi Lahiri"
                    />
              <div className="card-content">
                <p>Professor Aditi Lahiri</p>
              </div>
            </div>
        <div className="card-organisers">
            <img   
                    src={martin}
                    alt="Martin Maiden"
                    />
              <div className="card-content">
                <p>Professor Martin Maiden</p>
              </div>
            </div>
        </div>

        <h2> Local Organising Committee</h2>

        <div className="container container-pad fluid-containerC">
        <div className="card-organisers">
            <img    
                    src={holly}
                    alt="Holly Kennard"
                    />
              <div className="card-content">
                <p>Dr. Holly Kennard</p>
              </div>
            </div>

        <div className="card-organisers">
            <img    
                    src={emily}
                    alt="Emily Lindsay-Smith"
                    />
              <div className="card-content">
                <p>Dr. Emily Lindsay-Smith</p>
              </div>
            </div>
        </div>

        <h2>Advisory Committee</h2>
        <ul>
            <li>Professor JC Smith</li>
            <li>Professor Andreas Willi</li>
            <li>Professor Philomen Probert</li>
            <li>Professor John Coleman</li>
            <li>Dr John Lowe</li>
            <li>Dr Louise Mycock</li>
            <li>Dr Hanne Eckhoff</li>
            <li>Dr Kerstin Hoge</li>
            <li>Dr Sandra Paoli</li>
            <li>Dr David Willis</li>
            <li>Dr Sam Wolfe</li>
            <li>Dr Hilary Wynne</li>
            <li>Dr Kinga Kozminska</li>
            <li>Dr Jan Fellerer</li>
            <li>Dr Chiara Cappellaro</li>
            <li>Dr Víctor Acedo-Matellán</li>
            <li>Dr Bjarke Frellesvig</li>
            <li>Dr Simon Horobin</li>
        </ul>
        </div>
    );
}

export default Organisers