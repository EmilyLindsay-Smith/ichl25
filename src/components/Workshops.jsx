import React from "react";
import {data} from './data';
import { NavLink} from "react-router-dom";

import Workshop1 from "./workshop-abstracts/workshop1";
import Workshop2 from "./workshop-abstracts/workshop2";
import Workshop3 from "./workshop-abstracts/workshop3";
import Workshop4 from "./workshop-abstracts/workshop4";
import Workshop5 from "./workshop-abstracts/workshop5";
import Workshop6 from "./workshop-abstracts/workshop6";
import Workshop7 from "./workshop-abstracts/workshop7";
import Workshop8 from "./workshop-abstracts/workshop8";

function Filterme(workshop, time){
    workshop = workshop.toString()
    time = time.toString()
    let filtered = data.filter(datum=>datum.workshop === workshop).filter(datum=>datum.time === time);
    console.log(filtered);
    let title = filtered.map(item =>item.title);
    let id = filtered.map(item => item.id);
    let authors = filtered.map(item=>item.author).join('').split(',').join(', ').replace(/, ([^,]*)$/, ' and $1');
    let address = '/abstracts/' + id
    return <td>{filtered.id !== 0 ? <NavLink className= "btn button-abstract text-left" to={address}><em>{title}</em></NavLink> : {title}} <br/><em>{authors}</em></td>



}

function WorkshopTimetable(workshop){
    return(
        <table class="table table-striped table-hover table-bordered">
            <tbody>
                <tr><th>Room:</th><td>{data.filter(datum=>datum.workshop===workshop && datum.time === '1445').map(datum=>datum.room)}</td></tr>
                <tr><th>13.45</th>{Filterme(workshop, 1345)}</tr>
                <tr><th>14.15</th>{Filterme(workshop, 1415)}</tr>
                <tr><th>14.45</th>{Filterme(workshop, 1445)}</tr>
                <tr><th>15.15</th><td>Tea & Coffee</td></tr>
                <tr><th>15.45</th>{Filterme(workshop, 1545)}</tr>
                <tr><th>16.15</th>{Filterme(workshop, 1615)}</tr>
                <tr><th>16.45</th>{Filterme(workshop, 1645)}</tr>
                <tr><th>17.15</th>{Filterme(workshop, 1715)}</tr>
            </tbody>
        </table>
    )
}  
function Workshops() {
    return (
        <div className="workshops">
            <div class="container container-pad">
                <h1 id="site-top"> The Workshops </h1>
                <p>This year we are hosting eight workshops, to be held on Tuesday afternoon. Click on the title of each workshop below to see their abstract, organisers, and timetable of individual talks. </p>
                <div class="accordion" id="workshopAccordion">

                    <div class="card">
                        <div class="card-header" id="workshop1Header">
                            <h5 class="mb-0">
                                <button class="accordion-button collapsed makebold" type="button" data-toggle="collapse" data-target="#workshopOne" aria-expanded="false" aria-controls="workshopOne">
                                Acting on actuation: Why here, why now?
                                </button>
                            </h5>
                        </div>
                    <div id="workshopOne" class="collapse" aria-labelledby="workshop1Header" data-parent="#workshopAccordion">
                        <div class="card-body">
                            <div class="row align-items-start my-5">
                                <div class="col-lg-5">
                                    <h4>Organisers:</h4> <br/> 
                                    <ul>
                                        <li>Hendrik De Smet (KU Leuven); </li>
                                        <li>Guglielmo Inglese (KU Leuven & FWO)</li>
                                        <li>Malte Rosemeyer (Freie Universität Berlin</li>
                                    </ul>
                                 
                                    <h4>Timetable:</h4><br/>
                                    {WorkshopTimetable('1')}
                                </div>

                                <div class="col-lg-7">
                                <h4>Abstract:</h4>
                                      <Workshop1 />
                                </div>

                            </div>  
                        </div>
                    </div>
                    </div>

                    <div class="card">
                        <div class="card-header" id="workshop2Header">
                            <h5 class="mb-0">
                                <button class="accordion-button collapsed makebold" type="button" data-toggle="collapse" data-target="#workshopTwo" aria-expanded="false" aria-controls="workshopTwo">
                                Ancient languages and Algorithms: Demystifying new methods in historical linguistics
                                </button>
                            </h5>
                        </div>
                    <div id="workshopTwo" class="collapse" aria-labelledby="workshop2Header" data-parent="#workshopAccordion">
                        <div class="card-body">
                        <div class="row align-items-start my-5">                              
                                <div class="col-lg-5">
                                    <h4>Organisers:</h4> 
                                    <ul><li>Erich Round (University of Surrey) </li></ul>
                                    <h4>Timetable:</h4>
                                    {WorkshopTimetable('2')}                        
                                </div>
                                <div class="col-lg-7">
                                <h4>Abstract:</h4>
                                <Workshop2 /> 
                                </div> 
                            </div> 
                        </div>
                    </div>
                    </div>


                    <div class="card">
                        <div class="card-header" id="workshop3Header">
                            <h5 class="mb-0">
                                <button class="accordion-button collapsed makebold" type="button" data-toggle="collapse" data-target="#workshopThree" aria-expanded="false" aria-controls="workshopThree">
                                Cliticisation in the evolution of bound morphology
                                </button>
                            </h5>
                        </div>
                    <div id="workshopThree" class="collapse" aria-labelledby="workshop3Header" data-parent="#workshopAccordion">
                        <div class="card-body">
                             <div class="row align-items-start my-5">

                                <div class="col-lg-5">
                                    <h4>Organisers:</h4> <br/> 
                                    <ul>
                                        <li>Michael Frotscher (University of Cologne)</li>
                                        <li> Robert Mailhammer (University of Western Sydney)</li>
                                    </ul>
                                    <h4>Timetable:</h4><br/>
                                    {WorkshopTimetable('3')}
                                </div>
                                <div class="col-lg-7">
                                     <h4>Abstract:</h4><br/>
                                      <Workshop3 /> 
                                </div>                                
                            </div> 
                        </div>
                    </div>
                    </div>

                    <div class="card">
                        <div class="card-header" id="workshop4Header">
                            <h5 class="mb-0">
                                <button class="accordion-button collapsed makebold" type="button" data-toggle="collapse" data-target="#workshopFour" aria-expanded="false" aria-controls="workshopFour">
                                Consequences of the OV-to-VO change on different levels of clause structure
                                </button>
                            </h5>
                        </div>
                    <div id="workshopFour" class="collapse" aria-labelledby="workshop4Header" data-parent="#workshopAccordion">
                        <div class="card-body">
                            <div class="row align-items-start my-5">

                                <div class="col-lg-5">
                                    <h4>Organisers:</h4> 
                                    <ul>
                                        <li>Katalin É. Kiss (Hungarian Research Centre for Linguistics)                         
                                        </li>
                                    </ul>
                                    <h4>Timetable:</h4>
                                    {WorkshopTimetable('4')}
                                </div>
                                <div class="col-lg-7">
                                <h4>Abstract:</h4><br/>
                                    <Workshop4 /> 
                                </div>                                
                            </div> 
                        </div>
                    </div>
                    </div>

                    <div class="card">
                        <div class="card-header" id="workshop5Header">
                            <h5 class="mb-0">
                                <button class="accordion-button collapsed makebold" type="button" data-toggle="collapse" data-target="#workshopFive" aria-expanded="false" aria-controls="workshopFive">
                                Historical Linguistics at school: An ever-pressing need?
                                </button>
                            </h5>
                        </div>
                    <div id="workshopFive" class="collapse" aria-labelledby="workshop5Header" data-parent="#workshopAccordion">
                        <div class="card-body">
                        <div class="row align-items-start my-5">

                                <div class="col-lg-5">
                                    <h4>Organisers:</h4> 
                                    <ul>
                                        <li>Theodoros Markopoulos (University of Patras)</li>
                                        <li>Brian D. Joseph (The Ohio State University)</li>
                                        </ul>
                                    <h4>Timetable:</h4>
                                    {WorkshopTimetable('5')}
                                </div>
                                <div class="col-lg-7">
                                <h4>Abstract:</h4><br/>
                                    <Workshop5 />  
                                </div>                                
                            </div> 
                        </div>
                    </div>
                    </div>

                    <div class="card">
                        <div class="card-header" id="workshop2Header">
                            <h5 class="mb-0">
                                <button class="accordion-button collapsed makebold" type="button" data-toggle="collapse" data-target="#workshopSix" aria-expanded="false" aria-controls="workshopSix">
                                On contact-induced non-change
                                </button>
                            </h5>
                        </div>
                    <div id="workshopSix" class="collapse" aria-labelledby="workshop6Header" data-parent="#workshopAccordion">
                        <div class="card-body">
                        <div class="row align-items-start my-5">

                                <div class="col-lg-5">
                                    <h4>Organisers:</h4>
                                    <ul>
                                        <li>Andrés Enrique-Arias (University of the Baleric Islands)</li>
                                        <li> Sarah Thomason (University of Michigan)</li></ul>
                                    <h4>Timetable:</h4><br/>
                                    {WorkshopTimetable('6')}
                                </div>
                                <div class="col-lg-7">
                                <h4>Abstract:</h4>
                                    <Workshop6 />
                                </div>                                
                            </div> 
                        </div>
                    </div>
                    </div>

                    <div class="card">
                        <div class="card-header" id="workshop7Header">
                            <h5 class="mb-0">
                                <button class="accordion-button collapsed makebold" type="button" data-toggle="collapse" data-target="#workshopSeven" aria-expanded="false" aria-controls="workshopSeven">
                                Recent advances in computational historical linguistics: New methods and results
                                </button>
                            </h5>
                        </div>
                    <div id="workshopSeven" class="collapse" aria-labelledby="workshop7Header" data-parent="#workshopAccordion">
                        <div class="card-body">
                        <div class="row align-items-start my-5">

                                <div class="col-lg-5">
                                    <h4>Organisers:</h4> 
                                    <ul>
                                        <li>Russell Gray (Department of Linguistic and Cultural Evolution, Max Planck Institute for Evolutionary Anthropology, Leipzig, Germany)</li>
                                        <li> Gerd Carling (Centre for Languages and Literature, Lund University, Lund, Sweden)</li>
                                        </ul>
                                    <h4>Timetable:</h4>
                                    {WorkshopTimetable('7')}
                                </div>
                                <div class="col-lg-7">
                                <h4>Abstract:</h4>
                                    <Workshop7 />  
                                </div>                                
                            </div> 
                        </div>
                    </div>
                    </div>

                    <div class="card">
                        <div class="card-header" id="workshop8Header">
                            <h5 class="mb-0">
                                <button class="accordion-button collapsed makebold" type="button" data-toggle="collapse" data-target="#workshopEight" aria-expanded="false" aria-controls="workshopEight">
                                The Typology of Contact-Induced Changes in Morphosyntax
                                </button>
                            </h5>
                        </div>
                    <div id="workshopEight" class="collapse" aria-labelledby="workshop8Header" data-parent="#workshopAccordion">
                        <div class="card-body">
                        <div class="row align-items-start my-5">

                                <div class="col-lg-5">
                                    <h4>Organisers:</h4> 
                                    <ul>
                                        <li>Michele Bianconi (University of Oxford)</li>
                                        <li> Robin Meyer (Université de Lausanne)</li>
                                        </ul>
                                    <h4>Timetable:</h4>
                                    {WorkshopTimetable('8')}
                                </div>
                                <div class="col-lg-7">
                                <h4>Abstract:</h4>
                                    <Workshop8 />  
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