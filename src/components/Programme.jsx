import React from "react";
import Timetable from "./Timetable";

function Programme() {
    return (
        <div className="programme">
            <div class="container container-pad">
                <h1> The Programme </h1>
                <nav>
                    <div class="nav nav-tabs" id="nav-tab" role="tablist">
                        <a class="nav-item nav-link " id="nav-monday-tab" data-toggle="tab" href="#nav-monday" role="tab" aria-controls="nav-monday" aria-selected="true">Monday</a>
                        <a class="nav-item nav-link " id="nav-tuesday-tab" data-toggle="tab" href="#nav-tuesday" role="tab" aria-controls="nav-tuesday" aria-selected="false">Tuesday</a>
                        <a class="nav-item nav-link " id="nav-wednesday-tab" data-toggle="tab" href="#nav-wednesday" role="tab" aria-controls="nav-wednesday" aria-selected="false">Wednesday</a>
                        <a class="nav-item nav-link " id="nav-thursday-tab" data-toggle="tab" href="#nav-thursday" role="tab" aria-controls="nav-thursday" aria-selected="false">Thursday</a>
                        <a class="nav-item nav-link " id="nav-friday-tab" data-toggle="tab" href="#nav-friday" role="tab" aria-controls="nav-friday" aria-selected="false">Friday</a>
                    </div>
                </nav>
                <div class="tab-content" id="nav-tabContent">
                    <div class="tab-pane active" id="nav-monday" role="tabpanel" aria-labelledby="nav-monday-tab">
                    {Timetable('monday')}
                    </div>
                    <div class="tab-pane " id="nav-tuesday" role="tabpanel" aria-labelledby="nav-tuesday-tab">
                    {Timetable('tuesday')}
                    </div>
                    <div class="tab-pane " id="nav-wednesday" role="tabpanel" aria-labelledby="nav-wednesday-tab">
                    {Timetable('wednesday')}
                    </div>
                    <div class="tab-pane " id="nav-thursday" role="tabpanel" aria-labelledby="nav-thursday-tab">
                    {Timetable('thursday')}
                    </div>
                    <div class="tab-pane " id="nav-friday" role="tabpanel" aria-labelledby="nav-friday-tab">
                    {Timetable('friday')}
                    </div>
                </div>
            
  
            </div>
        </div>
    );
}

export default Programme 