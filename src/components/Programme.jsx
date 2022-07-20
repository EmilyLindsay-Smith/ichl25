import React from "react";
import Timetable from "./Timetable";

function Programme() {
    
    return (
        <div className="programme">
            <div className="container container-pad">
                <h1 id="site-top"> Programme </h1>
                <div></div>
                <p><em>Coming soon: a downloadable PDF of the program</em></p>
                <nav className="nav nav-fill">
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                        <a className="nav-item nav-link active" id="nav-structure-tab" data-toggle="tab" href="#nav-structure" role="tab" aria-controls="nav-structure" aria-selected="true">Structure</a>
                        <a className="nav-item nav-link" id="nav-monday-tab" data-toggle="tab" href="#nav-monday" role="tab" aria-controls="nav-monday" aria-selected="false">Monday</a>
                        <a className="nav-item nav-link " id="nav-tuesday-tab" data-toggle="tab" href="#nav-tuesday" role="tab" aria-controls="nav-tuesday" aria-selected="false">Tuesday</a>
                        <a className="nav-item nav-link " id="nav-wednesday-tab" data-toggle="tab" href="#nav-wednesday" role="tab" aria-controls="nav-wednesday" aria-selected="false">Wednesday</a>
                        <a className="nav-item nav-link " id="nav-thursday-tab" data-toggle="tab" href="#nav-thursday" role="tab" aria-controls="nav-thursday" aria-selected="false">Thursday</a>
                        <a className="nav-item nav-link " id="nav-friday-tab" data-toggle="tab" href="#nav-friday" role="tab" aria-controls="nav-friday" aria-selected="false">Friday</a>
                    </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                <div className="tab-pane active" id="nav-structure" role="tabpanel" aria-labelledby="nav-structure-tab">
                    <div className="scroll">{Timetable('structure')}</div>
                    </div>
                    <div className="tab-pane" id="nav-monday" role="tabpanel" aria-labelledby="nav-monday-tab">
                    <div className="scroll">{Timetable('monday')}</div>
                    </div>
                    <div className="tab-pane " id="nav-tuesday" role="tabpanel" aria-labelledby="nav-tuesday-tab">
                    <div className="scroll">{Timetable('tuesday')}</div>
                    </div>
                    <div className="tab-pane " id="nav-wednesday" role="tabpanel" aria-labelledby="nav-wednesday-tab">
                    <div className="scroll">{Timetable('wednesday')}</div>
                    </div>
                    <div className="tab-pane " id="nav-thursday" role="tabpanel" aria-labelledby="nav-thursday-tab">
                    <div className="scroll">{Timetable('thursday')}</div>
                    </div>
                    <div className="tab-pane " id="nav-friday" role="tabpanel" aria-labelledby="nav-friday-tab">
                    <div className="scroll">{Timetable('friday')}</div>
                    </div>
                </div>
            
  
            </div>
        </div>
    );
}

export default Programme 