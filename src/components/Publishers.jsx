import React from "react";

import brill from '../images/brill.svg';
import eup from '../images/eup.png';
import jb from '../images/johnbenjamins.png'
import langsci from '../images/langsci.png';
import mouton from '../images/mouton.jpg'; 
import oup from '../images/oup.svg';

export default function Publishers() {
    return(
        <div>
        <div className="container container-pad">
    <h1 id="site-top"> Publishers</h1>
    <p>We are delighted to be welcoming a number of highly respected publishing companies to ICHL25, who will be displaying books and journals on Historical Linguistics and related fields.
        Do come for a chat and to browse the selection. 
        Have a look below for details of their availability. </p>

        <div className="row align-items-center my-5">
            <div className="col-lg-2">
              <img
                className="img-fluid rounded mb-4 mb-lg-0"
                src={brill}
                width= "200px"
                height="auto"
                alt=""
              />
            </div>
            <div className="col-lg-4">
                <h4>Brill</h4>
                <ul>
                    <li><em>Days tbc</em></li>
                </ul>
            </div>

            <div className="col-lg-2">
              <img
                className="img-fluid rounded mb-4 mb-lg-0"
                src={eup}
                width= "350px"
                height="auto"
                alt=""
              />
            </div>
            <div className="col-lg-4">
            <h4>Edinburgh University Press</h4>
                <ul>
                    <li>Thursday</li>
                    <li>Friday</li>
                </ul>
            </div>
        </div>
        <div className="row align-items-center my-5">
            <div className="col-lg-2">
              <img
                className="img-fluid rounded mb-4 mb-lg-0"
                src={jb}
                width= "350px"
                height="auto"
                alt=""
              />
            </div>
            <div className="col-lg-4">
            <h4>John Benjamins Publishing Company</h4>
                <ul>
                    <li>Monday</li>
                    <li>Tuesday</li>
                    <li>Thursday</li>
                </ul>
            </div>           

            <div className="col-lg-2">
              <img
                className="img-fluid rounded mb-4 mb-lg-0"
                src={langsci}
                width= "350px"
                height="auto"
                alt=""
              />
            </div>
            <div className="col-lg-4">
            <h4>Language Science Press</h4>
                <ul>
                    <li>Monday</li>
                    <li>Tuesday</li>
                    <li>Wednesday</li>
                </ul>
            </div>
            </div>
        <div className="row align-items-center my-5">
            <div className="col-lg-2">
              <img
                className="img-fluid rounded mb-4 mb-lg-0"
                src={mouton}
                width= "350px"
                height="auto"
                alt=""
              />
            </div>
            <div className="col-lg-4">
            <h4>Mouton de Gruyter</h4>
                <ul>
                    <li><em>Days tbc</em></li>
                </ul>
            </div>

            <div className="col-lg-2">
              <img
                className="img-fluid rounded mb-4 mb-lg-0"
                width= "350px"
                height="auto"
                src={oup}
                alt=""
              />
            </div>
            <div className="col-lg-4">
            <h4>Oxford University Press</h4>
                <ul>
                    <li>Monday</li>
                    <li>Tuesday</li>
                    <li>Wednesday</li>
                    <li>Thursday</li>
                    <li>Friday</li>
                </ul>
            </div>


        </div>



    </div>
    </div>
    );
};