import React from "react";

function Workshops() {
    return (
        <div className="workshops">
            <div class="container">
                <h1> The Workshops! </h1>

                <div class="accordion" id="workshopAccordion">
                    <div class="card">
                        <div class="card-header" id="workshop1Header">
                            <h5 class="mb-0">
                                <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#workshopOne" aria-expanded="true" aria-controls="workshopOne">
                                    Workshop 1
                                </button>
                            </h5>
                        </div>
                    <div id="workshopOne" class="collapse show" aria-labelledby="workshop1Header" data-parent="#workshopAccordion">
                        <div class="card-body">
                            <strong>Organisers:</strong> <br/> Organiser One <br/>
                            <strong>Abstract:</strong><br/>
                            WOrkshop ONe Abstract<br/>
                            <strong>Timetable:</strong><br/>
                            WOrkshop One timetable
                        </div>
                    </div>
                    </div>
                    <div class="card">
                        <div class="card-header" id="workshop2Header">
                            <h5 class="mb-0">
                                <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#workshopTwo" aria-expanded="false" aria-controls="workshopTwo">
                                    Workshop 2
                                </button>
                            </h5>
                        </div>
                    <div id="workshopTwo" class="collapse show" aria-labelledby="workshop2Header" data-parent="#workshopAccordion">
                        <div class="card-body">
                            <strong>Organisers:</strong> <br/> Organiser One <br/>
                            <strong>Abstract:</strong><br/>
                            WOrkshop Two Abstract<br/>
                            <strong>Timetable:</strong><br/>
                            WOrkshop Two timetable
                        </div>
                    </div>
                    </div>
                </div> {/*acordiondiv*/}

            </div>
        </div>
    );
}

export default Workshops