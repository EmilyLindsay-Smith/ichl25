import React from "react";
import mathsinstituted from '../images/mathsinstituted.jpg';
import map from '../images/map.jpg'

function Info() {
    return (
        <div className="info">
            <div className="container container-pad">
        <h1 id="site-top"> Venue Information </h1>

            <div className="row align-items-center my-5">
            <div className="col-lg-6">
              <img
                className="img-fluid rounded mb-4 mb-lg-0"
                src={mathsinstituted}
                alt=""
              />
            </div>
            <div className="col-lg-6 mb-3">
              
            <p> The 25th International Conference on Historical Linguistics will take place in Oxford the city of <em>Dreaming Spires</em>. On this page you can find information about:</p>
            <ul>
                <li><a href="#directions">How to get to Oxford and find the Mathematical Institute</a></li>
                <li><a href="#map">Map showing the Mathematical Institute</a></li>
                <li><a href="#building-amenities">Information on building amenities including a map of the Mathematical Institute</a></li>
                <li><a href="#parking">Information on Parking</a></li>
                <li><a href="#catz">Conference Dinner Venue: St Catherine's College</a></li>
                <li><a href="#trinitycollege">Computational Historical Linguistics Workshop Venue: Trinity College</a></li>        
             </ul>
             <p>For information about travel including breakdown services and taxis, where to find food, and health and emergency information, please visit our <a href="/local-info">local info page</a>.</p>
          
           </div>    
            <br/>
            <p> We are looking forward to welcoming you to the <strong>Andrew Wiles Building</strong>, part of the <strong>Mathematical Institute within the Radcliffe Observatory Quarter</strong> (OX2 6GG).</p>
            <p>The building has the largest purpose-built conference facilities in Oxford, and is ideally located close to Somerville College. Have a look at the <a href="https://www.google.com/maps/d/viewer?msa=0&z=16&dg=feature&mid=1TP2Cvoj6Id1cgUinmF539roLkls&ll=51.76036470415715%2C-1.263761499999998" target="_blank" rel="noopener noreferrer">map</a> below to orientate yourself.</p>
            <h3 id="directions">Directions </h3>
            <h5>To Oxford</h5>
            <p><strong>For information on how to get to Oxford, <a href="https://www.ox.ac.uk/visitors/visiting-oxford/how-get-oxford" rel="noopener noreferrer" target="_blank">check out this guidance</a></strong></p>
            <p>If you are coming <strong>via Heathrow or Gatwick</strong>, we recommend catching the <a href="https://www.theairlineoxford.co.uk/" rel="noreferrer" target="_blank">airline bus</a> direct to Oxford rather than catching a train or travelling via London. You do not have to book in advance and can pay by card on the bus. This runs every half an hour, and the return is cheaper than the single.</p>
            <p>If you have coming <strong>via London</strong>, you can get the train to Oxford from Marylebone or Paddington station.</p>
            <h5>To the Andrew Wiles Building</h5>
            <p id="map"><strong>To access the Andrew Wiles Building</strong>, approach the Radcliffe Observatory Quarter from Woodstock Road, following the green line on the map below. When you go through the gates, you will see a large fountain; the Mathematical Institute is in the right hand corner of this area. </p>   

                <iframe 
                    title="ICHL Conference Location"
                    src="https://www.google.com/maps/d/embed?mid=1TP2Cvoj6Id1cgUinmF539roLkls&ehbc=2E312F"
                    //src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2469.4931110707703!2d-1.2649561840214252!3d51.76059189997969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876c6a76879a4eb%3A0x14fcdb0deacb3a22!2sMathematical%20Institute!5e0!3m2!1sen!2suk!4v1652081333684!5m2!1sen!2suk" 
                    width="60%" 
                    height="400"
                    scrolling= "no"
                    style={{border:0, padding:20}} 
                    allowfullscreen="" 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade"
                    nuan_newframe="true"
                >
                </iframe>
            <ul>
                <li><a href="https://www.google.co.uk/maps/dir/Oxford,+Park+End+Street,+Oxfordshire,+Oxford/Mathematical+Institute,+Woodstock+Road,+Oxford/@51.7569273,-1.2702539,16z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x4876c6a2790faf05:0xba97a9d53201a3c!2m2!1d-1.2699454!2d51.7534694!1m5!1m1!1s0x4876c6a76879a4eb:0x14fcdb0deacb3a22!2m2!1d-1.2627953!2d51.7606219!3e2?hl=en" target="_blank" rel="noopener noreferrer">Directions to the Mathematical Institute from Oxford Train Station</a></li>
                <li><a href="https://www.google.co.uk/maps/dir/Oxford+(Bus+Station),+Oxford/Mathematical+Institute,+Woodstock+Road,+Oxford/@51.7575006,-1.2666294,16z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x4876c6a4434a3237:0xe8855286b4e428a!2m2!1d-1.262466!2d51.75404!1m5!1m1!1s0x4876c6a76879a4eb:0x14fcdb0deacb3a22!2m2!1d-1.2627953!2d51.7606219!3e2?hl=en" target="_blank" rel="noopener noreferrer">Directions to the Mathematical Institute from Gloucester Green Coach Station</a></li>
            </ul>
            
        <h3 id="building-amenities">Building Amenities</h3>
        <p> We will have use of a large lecture room ideal for the plenary talks, and smaller seminar rooms for the general varied size sessions. 
            All rooms are equipped with data projectors and screens, microphones, and whiteboards.
            There are large spaces for coffee breaks and evening receptions, as well as the poster sessions. 
        </p>
        <p> <strong>Toilets:</strong> available on the same floor as the conference rooms - see the map below. <br/>
            <strong>Water Fountains:</strong> available near the toilets; note water will also be available near the tea/coffee area. <br/>
            <strong>Cafe:</strong> there is a small cafe open 9:00-16:00 with limited resources. <br/>
            <strong>Wifi:</strong> avaiable throughout the building (Eduroam and The Cloud). <br/>
            <strong>Disabled Access:</strong> the building is wheelchair accessible. The lifts require card access which we can provide. <br/>
            <strong>Lockers:</strong> there are none available. </p>

        <p>The conference will take place on the mezzanine - down the stairs or lift when you come in. The presentations will use rooms L1, L2, L3, L6, C1, C4, C6. Look at the map below to see where they are located.</p>
            <img
                    className="img-fluid rounded mb-4 mb-lg-3"
                    src={map}
                    alt="Conference Venue Map"
                    />
       
       <hr/>

        <h3 id="parking">Parking </h3>
        <p>Please be aware there is limited public parking available in the centre of Oxford. 
            The University has very limited parking, and on the Mathematical Institute site in particular there is almost no parking available 
            although each building does have two dedicated accessible parking places only available via prior booking with clear need.</p>
        <p> We recommend using the <a href="https://www.oxford.gov.uk/directory_record/352/pear_tree_park_and_ride/category/56/park_and_ride_sites" target="_blank" rel="noopener noreferrer"> Park and Ride service</a>,
            parking at Pear Tree and catching the #300 bus which stops opposite the entrance to the Mathematical Institute on Woodstock Road. Please note that the maximum stay at all park and ride options is 72 hours.</p>
        <p>Taxis are available from Oxford Train Station and Gloucester Green Coach station, and the fare to the Mathematical Institute should be approximately £7.00.<br/>
           Note that there are a <strong>large number of external cycle racks</strong> on the south and west sides of the building for those coming by bike.</p>

        <h4>Disabled Access</h4>
        <p>Should you required disabled parking at the Mathematical Institute, please contact us at <a href="mailto:ichl25@ling-phil.ox.ac.uk">ichl25@ling-phil.ox.ac.uk</a> to arrange this. </p>
        <p>The Mathematical Institute is wheelchair accessible, but the lifts require an access card. Please contact us to discuss your mobility needs. </p>
       
       <hr/> 
        <h2 id="catz">Conference Dinner Venue: St Catherine's College</h2>
        <p>The conference dinner on Thursday night will be held at St. Catherine's College on Manor Road (OX1 3UJ). This is 1.1 miles from the Mathematical Institute and takes about 20-25 minutes to walk from the Mathematical Institute.</p>
        <p>Note that your dinner ticket will be stamped onto the back of your conference badge. </p>
        <iframe 
            title="Conference Dinner at St Catherine's College"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2469.7123782406475!2d-1.2469454848471002!3d51.756582800275005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876c154a2c2921d%3A0x74d94012acb4a403!2sSt%20Catherine&#39;s%20College!5e0!3m2!1sen!2suk!4v1654440791367!5m2!1sen!2suk" 
            width="60%" 
            height="400" 
            style={{border:0, padding:20}} 
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade">
        </iframe>
        <ul>
            <li><a href="https://www.google.co.uk/maps/dir/Mathematical+Institute,+University+of+Oxford,+Radcliffe+Observatory,+Andrew+Wiles+Building,+Woodstock+Rd,+Oxford+OX2+6GG/St+Catherine's+College,+Manor+Road,+Oxford/@51.7587031,-1.2625796,15z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x4876c6a76879a4eb:0x14fcdb0deacb3a22!2m2!1d-1.2627953!2d51.7606219!1m5!1m1!1s0x4876c154a2c2921d:0x74d94012acb4a403!2m2!1d-1.2447568!2d51.7565795!3e2?hl=en" target="_blank" rel="noopener noreferrer">Directions to St. Catherine's College from the Mathematical Institute</a></li>
        </ul>
        <p>Should you required disabled parking at St Catherine's College, please contact us at <a href="mailto:ichl25@ling-phil.ox.ac.uk">ichl25@ling-phil.ox.ac.uk</a> to arrange this. </p>
        <hr/>
        <h2 id='trinitycollege'>Trinity College: Workshop </h2>
        <p> The Workshop on <em>Recent advances in computational historical linguistics: New methods and results</em> will <strong>not</strong> be held in the Mathematical Institute, but rather the Auditorium in Trinity College.
            Trinity College is located on Broad Street (OX1 3BH), about 10-15 minutes walk from the Mathematical Institute. </p>
            <iframe 
                title="Workshop at Trinity College"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2469.795748112494!2d-1.2581860848471744!3d51.75505840038686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876c6af14966483%3A0x931a8972400842fb!2sTrinity%20College!5e0!3m2!1sen!2suk!4v1654441894345!5m2!1sen!2suk" 
                width="60%"
                height="400" 
                style={{border:0, padding:20}} 
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade"
            >
            </iframe>
            <ul>
            <li><a href="https://www.google.co.uk/maps/dir/Mathematical+Institute,+University+of+Oxford,+Radcliffe+Observatory,+Woodstock+Road,+Oxford/Broad+Street,+Oxford+OX1+3BS/@51.7573331,-1.2647989,16z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x4876c6a76879a4eb:0x14fcdb0deacb3a22!2m2!1d-1.2627953!2d51.7606219!1m5!1m1!1s0x4876c6af16077351:0xb7fda35825b4e296!2m2!1d-1.2564!2d51.754475!3e2" target="_blank" rel="noopener noreferrer">Directions to Trinity College from the Mathematical Institute - go through the gate opposite Turl Street, to the left of Blackwell's bookshop</a></li>
        </ul>
            </div>

        </div>
        </div>
    );
}

export default Info;  