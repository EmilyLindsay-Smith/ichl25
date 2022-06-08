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
          </div>
         </div>
    );
}

export default Accommodation