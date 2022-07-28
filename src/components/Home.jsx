import React from "react";
import {NavLink} from "react-router-dom";

import somerville from '../images/somerville.jpg';
import about from '../images/about.jpg';
import library from '../images/library.jpg';
import mathsinstitutea from '../images/mathsinstitutea.jpg';
import mathsinstitutec from '../images/mathsinstitutec.jpg';
import mathsinstituted from '../images/mathsinstituted.jpg';
import radcliffecamera from '../images/radcliffecamera.jpg';
import mathslecture from '../images/mathslecture.jpg';
import manuscript from '../images/manuscript.jpg';
import people from '../images/people.jpg';

function Home(){
    return (
        <div className="home">
        <div className="container container-pad">
          <h1 id="site-top">Welcome to the Twenty-Fifth International Conference on Historical Linguistics!</h1>
          <div className="row align-items-center my-5">
            <div className="col-lg-6">
              <img
                className="img-fluid rounded mb-4 mb-lg-0"
                src={radcliffecamera}
                alt=""
              />
            </div>
            <div className="col-lg-6">
              
            <p>The Faculty of Linguistics, Philology, and Phonetics at the University of Oxford will be hosting the 25th International Conference on Historical Linguistics (ICHL25), from <strong>1 to 5 August 2022</strong>. This conference has been postponed from the originally planned year of 2021.</p>
            <p>The conference will take place in the <NavLink to="/info">Andrew Wiles Building</NavLink>, part of the Mathematical Institute on Woodstock Road in Oxford. </p>
<p><em>ICHL brings together historical linguists and specialists in related fields to explore advances in areas including methods and practices of linguistic reconstruction; formal approaches to language change; historical sociolinguistics; computational approaches to historical linguistics; contact and areal linguistics; interfaces between historical linguistics and other disciplines; and many other related areas.</em></p>
</div>  
</div>
<div className="row align-items-center my-5">
  <p className="col-lg-1"></p>
<div className="col-lg-10">
  <p>ICHL25 is being <a target="_blank" href="/organisers">organised</a> by Professor Aditi Lahiri, Professor Martin Maiden, Dr Holly Kennard and Dr Emily Lindsay-Smith. 
  We are delighted to welcome Professor Dame Louise Richardson AAAS AcSS FRSE RIIA, Vice Chancellor of the University of Oxford to open the conference on Monday.</p>

  <p>We intend ICHL 2022 to be an exclusively 'live', not 'virtual' or 'hybrid', conference — an occasion for us all to meet again face-to-face!
    Furthermore, ICHL 2022 will be a <em>paperless</em> conference to keep registration costs as low as possible and reduce the conference's carbon footprint, so explore our website for details of:</p>
<ul>
  <li>The full <a target="_blank" href="/programme"> conference programme</a> with abstracts, including <a target="_blank" href="/workshops"> workshops</a> and <a target="_blank" href="/plenaryspeakers"> plenaries</a></li>
  <li>Information about <a target="_blank" href="/accommodation"> available accommodation</a></li>
  <li>Planned <a target="_blank" href="/excursions"> excursions </a> and social events</li>
  <li>Information about our <a target="_blank" href="/info"> venues</a> and how to find them</li>
  <li>Information about <a target="_blank" href="/local-info">local amenities, taxis and health and emergencies</a></li>
  <li>and more - do explore the <em>Presentations</em> and <em>Info</em> <a href="#navigationjump">menus</a> at the top of the page to see the full range of available information</li>
</ul>
<div class="alert alert-primary" role="alert">
<h3 >Covid Policy</h3>
    <p>COVID has unfortunately not disappeared and for everyone’s safety we need to continue to follow some safety measures.</p>
    <ul>
    <li>With regard to the rising infection rate of COVID, we advise participants to do a COVID (lateral flow/rapid antigen) test before attending each morning, even if you do not feel symptomatic.</li>
    <li>Please do not attend if you are positive or displaying symptoms of COVID-19 and believe you may be infectious to others, to avoid transmitting COVID to the other attendees.</li>
    <li>We encourage all attendees to wear masks, and will provide hand sanitiser at the entrance as well as some masks.</li>
    </ul>
    <p>We realise that you will need to take your masks off to eat and drink, but there are plenty of beautiful spaces outside in the Radcliffe Observatory Quarter, and several seating areas where you can take refreshments.</p>
</div>

<p>You can now follow us on Twitter at <a href="https://twitter.com/ICHL25" target="_blank" rel="noreferrer">@ICHL25</a> and use the hashtag #ichl25 to livetweet the conference.</p>

<div class="alert alert-secondary" role="alert">
<h3>Announcements</h3> <hr/>
<h5>Excursions</h5>
<p> We have organised FREE visits to look at linguistics manuscripts in the Bodleian library on wednesday afternoon, and a PAID trip to Mappa Mundi at Hereford Cathedral on Saturday.
  If you'd like to participate in either event, look at our <a target="_blank" href="/excursions">excursions</a> page to book on a first-come-first-served basis </p>
<h5>Travel to Oxford</h5>
<p>If you are coming <strong>via Heathrow or Gatwick</strong>, we recommend catching the <a href="https://www.theairlineoxford.co.uk/" target="_blank"rel="noreferrer">airline bus</a> direct to Oxford rather than catching a train or travelling via London. You do not have to book in advance and can pay by card on the bus. This runs every half an hour, and the return is cheaper than the single.</p>
<p>If you have coming <strong>via London</strong>, you can get the train to Oxford from Marylebone or Paddington station.</p>
<h5>Attendance Certificate</h5>
<p>If you require an attendance certificate, please let us know via <a href="https://forms.gle/oxVmcdQsmCToggQP9" target="_blank" rel="noreferrer">this form</a></p>
<h5>Childcare</h5>
<p> For childcare during the conference, please consult <a href="https://childcare.admin.ox.ac.uk/additional-childcare" rel="noopener noreferrer" target="_blank">https://childcare.admin.ox.ac.uk/additional-childcare</a></p>
</div>
</div>


          
          <div className="container container-pad fluid-containerD">
             
          <NavLink className="nav-link" to="/programme">  
            <div className="card-home">
            <img
                    className="img-fluid rounded mb-4 mb-lg-0"
                    src={library}
                    alt="Taylor Library"
                    />
              <div className="card-content">
                <p>Conference Programme</p>
              </div>
            </div>
          </NavLink>
          <NavLink className="nav-link" to="/workshops">  
            <div className="card-home">
            <img
                  className="img-fluid rounded mb-4 mb-lg-0"
                  src={mathsinstitutec}
                  alt=""
                    />
              <div className="card-content">
                <p>Workshops</p>
              </div>
            </div>
          </NavLink>
          <NavLink className="nav-link" to="/plenaryspeakers">  
            <div className="card-home">
            <img
                    className="img-fluid rounded mb-4 mb-lg-0"
                    src={mathslecture}
                     alt=""
                    />
              <div className="card-content">
                <p>Plenary Speakers</p>
              </div>
            </div>
          </NavLink>
          <NavLink className="nav-link" to="/info">  
            <div className="card-home">
            <img
                    className="img-fluid rounded mb-4 mb-lg-0"
                    src={mathsinstituted}
                     alt=""
                    />
              <div className="card-content">
                <p>Venue Info</p>
              </div>
            </div>
          </NavLink>
          <NavLink className="nav-link" to="/presenter-info">  
            <div className="card-home">
            <img
                    className="img-fluid rounded mb-4 mb-lg-0"
                    src={manuscript}
                     alt=""
                    />
              <div className="card-content">
                <p>Information for Presenters</p>
              </div>
            </div>
          </NavLink>
          <NavLink className="nav-link" to="/people">  
            <div className="card-home">
            <img
                    className="img-fluid rounded mb-4 mb-lg-0"
                    src={people}
                     alt=""
                    />
              <div className="card-content">
                <p>Programme by Presenters</p>
              </div>
            </div>
          </NavLink>
          <NavLink className="nav-link" to="/registration-and-fees">  
            <div className="card-home">
            <img
                    className="img-fluid rounded mb-4 mb-lg-0"
                    src={mathsinstitutea}
                     alt=""
                    />
              <div className="card-content">
                <p>Registration and Fees</p>
              </div>
            </div>
          </NavLink>
          <NavLink className="nav-link" to="/excursions">  
            <div className="card-home">
            <img
                    className="img-fluid rounded mb-4 mb-lg-0"
                    src={about}
                     alt=""
                    />
              <div className="card-content">
                <p>Excursions</p>
              </div>
            </div>
          </NavLink>
          <NavLink className="nav-link" to="/accommodation">  
            <div className="card-home">
            <img
                    className="img-fluid rounded mb-4 mb-lg-0"
                    src={somerville}
                     alt=""
                    />
              <div className="card-content">
                <p>Accommodation</p>
              </div>
            </div>
          </NavLink>
          </div>
          <p> Please <a href="mailto:emily.lindsay-smith@ling-phil.ox.ac.uk">contact us</a> for feedback and comments about this website.</p>
          </div>
        </div>
      </div>
    );
}

export default Home;