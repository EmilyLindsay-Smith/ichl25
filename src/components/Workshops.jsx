import React from "react";
import Workshop1 from "./workshop-abstracts/workshop1";
import Workshop2 from "./workshop-abstracts/workshop2";
import Workshop3 from "./workshop-abstracts/workshop3";
import Workshop4 from "./workshop-abstracts/workshop4";
import Workshop5 from "./workshop-abstracts/workshop5";
import Workshop6 from "./workshop-abstracts/workshop6";
import Workshop7 from "./workshop-abstracts/workshop7";
import Workshop8 from "./workshop-abstracts/workshop8";

function Workshops() {
    return (
        <div className="workshops">
            <div class="container container-pad">
                <h1> The Workshops! </h1>
                <p>This year we are hosting eight workshops, to be held on Tuesday afternoon. Click on the title of each workshop below to see their abstract, organisers, and timetable of individual talks. </p>
                <div class="accordion" id="workshopAccordion">

                    <div class="card">
                        <div class="card-header" id="workshop1Header">
                            <h5 class="mb-0">
                                <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#workshopOne" aria-expanded="true" aria-controls="workshopOne">
                                Acting on actuation: Why here, why now?
                                </button>
                            </h5>
                        </div>
                    <div id="workshopOne" class="collapse" aria-labelledby="workshop1Header" data-parent="#workshopAccordion">
                        <div class="card-body">
                            <div class="row align-items-start my-5">
                                <div class="col-lg-7">
                                <h4>Abstract:</h4>
                                      <Workshop1 />
                                </div>
                                <div class="col-lg-5">
                                    <h4>Organisers:</h4> <br/> 
                                    <ul>
                                        <li>Hendrik De Smet (KU Leuven); </li>
                                        <li>Guglielmo Inglese (KU Leuven & FWO)</li>
                                        <li>Malte Rosemeyer (Freie Universität Berlin</li>
                                    </ul>
                                 
                                    <h4>Timetable:</h4><br/>
                                    WOokshop One timetable
                                </div>
                            </div>  
                        </div>
                    </div>
                    </div>

                    <div class="card">
                        <div class="card-header" id="workshop2Header">
                            <h5 class="mb-0">
                                <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#workshopTwo" aria-expanded="true" aria-controls="workshopTwo">
                                Ancient languages and Algorithms: Demystifying new methods in historical linguistics
                                </button>
                            </h5>
                        </div>
                    <div id="workshopTwo" class="collapse" aria-labelledby="workshop2Header" data-parent="#workshopAccordion">
                        <div class="card-body">
                        <div class="row align-items-start my-5">
                                <div class="col-lg-7">
                                <h4>Abstract:</h4>
                                <Workshop2 /> 
                                </div>
                                <div class="col-lg-5">
                                    <h4>Organisers:</h4> 
                                    <ul><li>Erich Round (Univeristy of Surrey) </li></ul>
                                    <h4>Timetable:</h4>
                                    WOokshop One timetable
                                </div>
                            </div> 
                        </div>
                    </div>
                    </div>


                    <div class="card">
                        <div class="card-header" id="workshop3Header">
                            <h5 class="mb-0">
                                <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#workshopThree" aria-expanded="true" aria-controls="workshopThree">
                                Cliticisation in the evolution of bound morphology
                                </button>
                            </h5>
                        </div>
                    <div id="workshopThree" class="collapse" aria-labelledby="workshop3Header" data-parent="#workshopAccordion">
                        <div class="card-body">
                        <div class="row align-items-start my-5">
                                <div class="col-lg-7">
                                <h4>Abstract:</h4><br/>
                                    <Workshop3 /> 
                                </div>
                                <div class="col-lg-5">
                                    <h4>Organisers:</h4> <br/> 
                                    <ul>
                                        <li>Michael Frotscher (University of Cologne)</li>
                                        <li> Robert Mailhammer (University of Western Sydney)</li>
                                    </ul>
                                    <h4>Timetable:</h4><br/>
                                    WOokshop One timetable
                                </div>
                            </div> 
                        </div>
                    </div>
                    </div>

                    <div class="card">
                        <div class="card-header" id="workshop4Header">
                            <h5 class="mb-0">
                                <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#workshopFour" aria-expanded="true" aria-controls="workshopFour">
                                Consequences of the OV-to-VO change on different levels of clause structure
                                </button>
                            </h5>
                        </div>
                    <div id="workshopFour" class="collapse" aria-labelledby="workshop4Header" data-parent="#workshopAccordion">
                        <div class="card-body">
                        <div class="row align-items-start my-5">
                                <div class="col-lg-7">
                                <h4>Abstract:</h4><br/>
                                    <Workshop4 /> 
                                </div>
                                <div class="col-lg-5">
                                    <h4>Organisers:</h4> 
                                    <ul>
                                        <li>Katalin É. Kiss (Hungarian Research Centre for Linguistics)                         
                                        </li>
                                    </ul>
                                    <h4>Timetable:</h4>
                                    WOokshop One timetable
                                </div>
                            </div> 
                        </div>
                    </div>
                    </div>

                    <div class="card">
                        <div class="card-header" id="workshop5Header">
                            <h5 class="mb-0">
                                <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#workshopFive" aria-expanded="true" aria-controls="workshopFive">
                                Historical Linguistics at school: An ever-pressing need?
                                </button>
                            </h5>
                        </div>
                    <div id="workshopFive" class="collapse" aria-labelledby="workshop5Header" data-parent="#workshopAccordion">
                        <div class="card-body">
                        <div class="row align-items-start my-5">
                                <div class="col-lg-7">
                                <h4>Abstract:</h4><br/>
                                    <Workshop5 />  
                                </div>
                                <div class="col-lg-5">
                                    <h4>Organisers:</h4> 
                                    <ul>
                                        <li>Theodoros Markopoulos (University of Patras)</li>
                                        <li>Brian D. Joseph (The Ohio State University)</li>
                                        </ul>
                                    <h4>Timetable:</h4>
                                    WOokshop One timetable
                                </div>
                            </div> 
                        </div>
                    </div>
                    </div>

                    <div class="card">
                        <div class="card-header" id="workshop2Header">
                            <h5 class="mb-0">
                                <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#workshopSix" aria-expanded="true" aria-controls="workshopSix">
                                On contact-induced non-change
                                </button>
                            </h5>
                        </div>
                    <div id="workshopSix" class="collapse" aria-labelledby="workshop6Header" data-parent="#workshopAccordion">
                        <div class="card-body">
                        <div class="row align-items-start my-5">
                                <div class="col-lg-7">
                                <h4>Abstract:</h4>
                                    <Workshop6 />
                                </div>
                                <div class="col-lg-5">
                                    <h4>Organisers:</h4>
                                    <ul>
                                        <li>Andrés Enrique-Arias (University of the Baleric Islands)</li>
                                        <li> Sarah Thomason (University of Michigan)</li></ul>
                                    <h4>Timetable:</h4><br/>
                                    WOokshop One timetable
                                </div>
                            </div> 
                        </div>
                    </div>
                    </div>

                    <div class="card">
                        <div class="card-header" id="workshop7Header">
                            <h5 class="mb-0">
                                <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#workshopSeven" aria-expanded="true" aria-controls="workshopSeven">
                                Recent advances in computational historical linguistics: New methods and results
                                </button>
                            </h5>
                        </div>
                    <div id="workshopSeven" class="collapse" aria-labelledby="workshop7Header" data-parent="#workshopAccordion">
                        <div class="card-body">
                        <div class="row align-items-start my-5">
                                <div class="col-lg-7">
                                <h4>Abstract:</h4>
                                    <Workshop7 />  
                                </div>
                                <div class="col-lg-5">
                                    <h4>Organisers:</h4> 
                                    <ul>
                                        <li>Russell Gray (Department of Linguistic and Cultural Evolution, Max Planck Institute for Evolutionary Anthropology, Leipzig, Germany)</li>
                                        <li> Gerd Carling (Centre for Languages and Literature, Lund University, Lund, Sweden)</li>
                                        </ul>
                                    <h4>Timetable:</h4>
                                    WOokshop One timetable
                                </div>
                            </div> 
                        </div>
                    </div>
                    </div>

                    <div class="card">
                        <div class="card-header" id="workshop8Header">
                            <h5 class="mb-0">
                                <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#workshopEight" aria-expanded="true" aria-controls="workshopEight">
                                The Typology of Contact-Induced Changes in Morphosyntax
                                </button>
                            </h5>
                        </div>
                    <div id="workshopEight" class="collapse" aria-labelledby="workshop8Header" data-parent="#workshopAccordion">
                        <div class="card-body">
                        <div class="row align-items-start my-5">
                                <div class="col-lg-7">
                                <h4>Abstract:</h4>
                                    <Workshop8 />  
                                </div>
                                <div class="col-lg-5">
                                    <h4>Organisers:</h4> 
                                    <ul>
                                        <li>Michele Bianconi (University of Oxford)</li>
                                        <li> Robin Meyer (Université de Lausanne)</li>
                                        </ul>
                                    <h4>Timetable:</h4>
                                    WOokshop One timetable
                                </div>
                            </div> 
                        </div>
                    </div>
                    </div>
              </div> {/*acordiondiv*/}        
             </div>
        </div>
    );
}

export default Workshops