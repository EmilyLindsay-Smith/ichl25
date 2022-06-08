import React from 'react';
import about from '../images/about.jpg';

function Excursions(){
    return(
        <div class="container container-pad">
        <h1 id="site-top">Excursions and Social Events</h1>
        <p>We hope you are looking forward to ICHL this summer. There are many wonderful places to visit within driving distance of Oxford, not to mention a wide variety of options within the city itself. </p>
        <p> If there is sufficient interest, we will organise coach trips on Wednesday and Saturday - booking details to come soon.</p>

        <div className="row align-items-top my-5">
            <div className="col-lg-5">
            <img
                className="img-fluid rounded mb-4 mb-lg-0"
                src={about}
                alt=""
              />
            </div>
            <div className="col-lg-7">       
   
    <h4>Organised Wednesday Afternoon Trip</h4>
        <p> If there is sufficient interest, we will organise a coach for a trip to <a href="https://www.blenheimpalace.com/" target="_blank" rel="noreferrer noopener">Blenheim Palace</a>. </p>

    <h4>Organised Saturday Trips</h4>
        <p> If there is sufficient interest, we will organise a coach for a trip to <a href="https://www.themappamundi.co.uk" target="_blank" rel="noreferrer noopener">Mappa Mundi at Hereford Cathedral</a> and <a href="https://bletchleypark.org.uk/" target="_blank" rel="noreferrer noopener">Bletchley Park</a></p>
        <ul>
            <li>The <a href="https://www.themappamundi.co.uk" target="_blank" rel="noreferrer noopener">Mappa Mundi</a> at Hereford Cathedral dates from the early 14th Century. The Cathedral also features a Magna Carta and the Chained Library, a historic library with texts dating back to the early 9th Century. </li> 
            <li> <a href="https://bletchleypark.org.uk/" target="_blank" rel="noreferrer noopener">Bletchley Park</a> was home to Alan Turing's codebreaking team that decoded the Enigma Machine during World War II. </li>  
        </ul>
     
     </div>
     <div>
        <h4> Suggestions of Places to Visit </h4> 
        <p> There is plenty of things you can do within and near Oxford during ICHL.</p>
        
    <h5> Within Oxford </h5>
    <div className="row align-items-top my-5">
        <p className="col-lg-1"> </p>
            <div className="col-lg-4">
            <h6>To Visit:</h6>
    <ul>
        <li>Oxford University Museum of Natural History</li>
        <li>Pitt Rivers Museum</li>
        <li>Ashmolean Museum of Art and Archaeology</li>
        <li>Bodleian Library</li>
        <li>Modern Art Oxford</li>
        <li>History of Science Museum</li> 
    </ul>
    </div>
    <p className="col-lg-1"> </p>
    <div className="col-lg-4">
    <h6>To Wander:</h6>
    <ul>
        <li>Oxford Botanic Garden</li>
        <li> ChristChurch Meadows</li>
        <li> University Parks</li> 
        <li> Port Meadow</li>
        <li> Iffley Lock </li>
        <li> Oxford Canal </li>
        <li> Shotover Country Park</li>
    </ul>
        </div>
        </div>
    <h5> Within Driving Distance </h5>
        <p><strong><a href="https://www.nationaltrust.org.uk/basildon-park" target="_blank" rel="noreferrer noopener">Basildon Park</a></strong>
        <br/>
        Basildon Park features a historic house and gardens and was used extensively during the filming of the Netflix series Bridgerton.</p>

        <p><strong><a href="https://www.nationaltrust.org.uk/lacock-abbey-fox-talbot-museum-and-village" target="_blank" rel="noreferrer noopener">Lacock Abbey, Fox Talbot Museum</a></strong>
        <br/>
        A visit to Lacock Abbey features the Fox Talbot Museum, dedicated to one of the pioneers of early photography.
        </p>

        <p><strong><a href="https://www.obga.ox.ac.uk/visit-arboretum" target="_blank" rel="noreferrer noopener">University of Oxford Harcourt Arboretum </a></strong></p>

<p>Further recommendations can be found on the <a href="https://oxfordcity.co.uk/" target="_blank" rel="noreferrer noopener">Oxford City Visitor Information site</a>.</p>
<p>The entrance cost for each location is available on their websites. The National Trust properties are accessible without charge to members of the National Trust as well as members from other organisations abroad. Please consult their <a href="https://www.nationaltrust.org.uk/features/overseas-organisations" target="_blank" rel="noreferrer noopener">website</a> for more information.</p>
</div>
</div>
</div>
    );
}

export default Excursions;