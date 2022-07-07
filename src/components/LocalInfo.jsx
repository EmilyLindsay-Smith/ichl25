import React from "react";
import mathsinstituted from '../images/mathsinstituted.jpg';

export default function LocalInfo() {
    return (
        <div className="info">
            <div className="container container-pad">
        <h1 id="site-top"> Local Information </h1>

            <div className="row align-items-center my-5">
                <div className="col-lg-6">
                    <img
                        className="img-fluid rounded mb-4 mb-lg-0"
                        src={mathsinstituted}
                        alt=""
                    />
                </div>
                <div className="col-lg-6 mb-3">
                    <p>We're looking forward to welcoming you all to Oxford. For those of you unfamiliar with Oxford, we hope that the information below will make your stay all the easier:</p>
                    <ul>
                        <li><a href="#map">map of oxford</a></li>
                        <li><a href="#travel">travel information including breakdown services and taxis</a></li>
                        <li><a href="#food">food and drink</a></li>
                        <li><a href="#health">health and emergencies</a></li>
                    </ul>
                </div>
            </div>

         <div className="row align-items-center my-5">

            <h3 id="map">Map of Oxford</h3>
                <p>For maps of areas of the city that mark amenities and attractions, consult the following from Daily Info:</p>
                <li><a href="https://www.dailyinfo.co.uk/sheet/maps/2017/central.pdf" rel="noreferrer" target="_blank">Central Oxford</a> - note the Mathematics Institute is in square F3</li>
                <li><a href="https://www.dailyinfo.co.uk/sheet/maps/2017/headington.pdf" rel="noreferrer" target="_blank">Headington</a></li>
                <li><a href="https://www.dailyinfo.co.uk/sheet/maps/2017/summertown.pdf" rel="noreferrer" target="_blank">Summertown</a></li>
                <p>They were last released in 2017 so there have been a few changes since but they are a good starting point and alternative to Google Maps.</p>

 
            <h3 id="travel">Travel</h3>
                <p> If you are driving, remember to drive on the <em>left</em>.</p>
                <p>Please be aware there is limited public parking available in the centre of Oxford. 
                The University has very limited parking, and on the Mathematical Institute site in particular there is almost no parking available 
                although each building does have two dedicated accessible parking places only available via prior booking with clear need.</p>
                <p> We recommend using the <a href="https://www.oxford.gov.uk/directory_record/352/pear_tree_park_and_ride/category/56/park_and_ride_sites" target="_blank" rel="noopener noreferrer"> Park and Ride service</a>,
                parking at Pear Tree and catching the #300 bus which stops opposite the entrance to the Mathematical Institute on Woodstock Road. Please note that the maximum stay at all park and ride options is 72 hours.</p>

                 <p> In the event of a breakdown you can contact:</p>
                    <li> Green Flag (0800 400 600) </li>
                    <li> AA (0800 88 77 66) </li>
                    <li> RAC (0333 2000 999) </li>
                <p> Priority is given to members but if you persevere you should be able to receive help (for a fee).</p>
    
                <p>The biggest TAXI COMPANIES in Oxford are: </p>
                    <li> <a href="0001taxis.com" target="_blank" rel="noreferrer">001 Taxis</a> (01865 240000) </li>
                    <li> <a href="https://royal-cars.com" target="_blank" rel="noreferrer">Royal Cars</a> (01865 777333) </li>
                <p> Both have an app for smartphones. The Uber app now works in Oxford (by summoning 001 taxis).</p>
                <p> In addition to booking, taxis are available from Oxford Train Station and Gloucester Green Coach station, and the fare to the Mathematical Institute should be approximately £7.00.</p>
                
            <h3 id="food">Food and Drink</h3>

                <p>An internet search will reveal the wealth of options for places to eat and drink in central Oxford
                     as well as takeaway options.</p>

                <h6>In Jericho, close to Somerville</h6>
                    <li> pubs (e.g. The Old Bookbinders, The Rickety Press, The Harcourt Arms, Jude the Obscure) </li>
                    <li> cafés (e.g. The Jericho Cafe) </li>
                    <li> bars (e.g. Oxford Wine Bar) </li>
                    <li> restaurants (e.g. Mamma Mia pizzeria, Giggling Squid Thai restaurant, Brasserie Blanc) </li>

                <h6> Alternatives near the Mathematical Institute include:</h6>
                    <li> The Royal Oak pub</li>
                    <li> Brown’s restaurant</li>
                    <li> Taylor’s café</li>
                <h6>Alternatives in Central Oxford</h6>
                <li>Assorted stalls in the Covered Market off Cornmarket Street</li>
                <li>Gloucester Green Food Market on Wednesdays</li> 
                <li> Visit George Street for a range of restaurants</li>
                <h6>Relatively inexpensive meals can be had at</h6>
                <li> Wetherspoons (The Four Candles, George Street)</li>
                <li> The Swan and Castle, Castle Street.</li>
                <h6> Must-visit pubs in Oxford include:</h6>
                <li> Turf Tavern (4-5 Bath Place via St Helens Passage off Holywell St)</li>
                <li> The White Horse, opposite the Bodleian library</li>
                <li> Plantation Arms, a fully vegetarian pub</li>
                <p> The famous historic pubs The Lamb and Flag and the Eagle and Child are (temporarily) closed.</p>
                <p> Good take-away pizzas can be obtained from North Parade Avenue; in the same street are good pubs, a grocery shop, cafés, an Indian restaurant, and somewhere to buy wool for your knitting.</p>
                <p>University locations that serve food and drink to the public include the <a href="https://www.ox.ac.uk/visitors/visiting-oxford/places-to-eat" rel="noreferrer" target="_blank">Ashmolean Museum, the Weston Library and the University Church</a>.</p>
                
            <h3 id="health">Health and Emergencies</h3>
            <p><strong>In the case of an emergency, requiring fire/police/ambulance services, dial <em>999</em></strong>.</p>
            <p> <strong>Dial <em>111</em> for non-emergencies including accessing out-of-hours GPs.</strong> </p>
                
            <p>There is a pharmacy in Jericho (Jhoots, Walton Street) and a GP surgery (<a href="https://www.gpjerichotwo.co.uk" rel="noreferrer" target="_blank">The Observatory Medical Practice</a>, 01865 429993). The closest A&E department is in the John Radcliffe hospital in Headington, about 15 mins drive from the Andrew Wiles Building.</p>
            <p>First Aid is available at the Mathematical Institute during the conference - just ask us for help.</p>

            </div>
            </div>
            </div>

    )
}