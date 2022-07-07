import React from 'react';
import somerville from '../images/somerville.jpg'

function Accommodation(){
    return(
        <div class="container container-pad">
            <h1 id="site-top">Accommodation</h1>
            <div class="row align-items-center my-5">
                <div class="col-lg-7">
                  <img
                    class="img-fluid rounded mb-4 mb-lg-0"
                    src={somerville}
                     alt=""
                    />
                </div>
            <div class="col-lg-5">
                <p>Accommodation is available at <a href="https://www.some.ox.ac.uk/" rel=" noopener noreferrer" target="_blank">Somerville College</a>, just a couple of minutes' walk from the Mathematical Institute. 
                    Bookings can be made up until 5pm on Friday 15th July.</p>
                <p>Note that Somerville College is now <strong>fully booked</strong> for the Wednesday night, though rooms are still available for the beginning and end of the week. </p>
                <p>To make a booking, please click <a href="https://www.universityrooms.com/en-GB/eventcode?ec=ICHC2022&vid=somervilleoxford" rel=" noopener noreferrer" target="_blank">here</a>.</p>
                </div>
                <div class="row align-items-center my-5">
            <h4>Alternative Options:</h4>
            <p>If you are still looking for accommodation, there may be rooms available via the following. Note that ICHL does not have a particular relationship with any of these institutions unlike Somerville College.</p>
            <h6>University Rooms</h6>
            
                <li><a href="https://www.universityrooms.com" rel="noreferrer" target="_blank">Oxford University Rooms</a>: search for and book a room in an Oxford college. Do note that some rooms are much more central than others.</li>
            
            <h6>Bed and Breakfast</h6>
            
                <li><a href="https://www.towerhouseoxford.co.uk/" rel="noreferrer" target="_blank">Tower House</a> (Ship Street)</li>
                <li><a href="https://www.oldblackhorse.com/" rel="noreferrer" target="_blank">The Old Black Horse</a> (St. Clements Street)</li>
            

            <h6>Hotels</h6>
                <li><a href="https://www.vanbrughhousehotel.co.uk/" rel="noreferrer" target="_blank">Vanbrugh House Hotel</a> (Cornmarket Street, opposite Oxford Union)</li>
                <li><a href="http://www.cotswoldlodgehotel.co.uk/" rel="noreferrer" target="_blank">Cotswold Lodge Hotel</a> (Banbury Road, North Oxford)</li>
                <li><a href="https://www.oldparsonagehotel.co.uk" rel="noreferrer" target="_blank">Old Parsonage Hotel</a> (St Giles)</li>
                <li><a href="https://oxfordspires.vocohotels.com/" rel="noreferrer" target="_blank">Voco Oxford Spires</a> (Abingdon Road)</li>
            
            <h6>Other</h6>
            <li><a href="https://www.hostelworld.com" rel="noreferrer" target="_blank">Hostel World</a> for hostel bookings</li>
            <li><a href="https://www.booking.com" rel="noreferrer" target="_blank">Booking.com</a> for a range of options</li>
            <li><a href="https://www.airbnb.co.uk" rel="noreferrer" target="_blank">Airbnb</a> for a range of options</li>
           </div>
          </div>
         </div>
    );
}

export default Accommodation