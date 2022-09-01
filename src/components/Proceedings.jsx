import React from 'react';
import manuscript from '../images/manuscript.jpg';

function Proceedings(){
    return(
        <div class="container container-pad">
            <h1 id="site-top">ICHL 25 Proceedings</h1>
            <div class="row align-items-center my-5">
                <div class="col-lg-7">
                  <img
                    class="img-fluid rounded mb-4 mb-lg-0"
                    src={manuscript}
                     alt=""
                    />
                </div>
            <div class="col-lg-5">
                <p>Thank you for joining us at Oxford and for making it a wonderful conference. It is time to discuss the ICHL 25 Proceedings (provisionally to be published in the Benjamins CILT series). </p>
                <p>We now request from you a ‘show of interest’ in publishing your paper in the proceedings.</p>
                <p> All papers presented in the general sessions and all posters are eligible for submission and as always, only a selection of papers will be published.</p>
                </div>
                <div class="row align-items-center my-5">
            <p>At this stage we require not a full article, but a two-page extended abstract (excluding references). 
                This will allow participants to expand on their original submission and incorporate any comments they might have received at the conference. 
                The guidelines for the extended abstract are as follows:</p>
            
            <li>Title of the paper and author name(s)</li>
            <li>Length: two pages of A4 paper (not including references), 2cm margins on all sides</li>
            <li>Font: Times New Roman or Arial, size 12</li>
            <li>Format: pdf</li>

            <p> Extended abstracts should be submitted via <strong>EasyAbs</strong> at <a href="http://linguistlist.org/confservices/ICHL25Proc" rel="noreferrer" target="_blank">http://linguistlist.org/confservices/ICHL25Proc</a><br/>
            Note that the deadline for submission of 2-page abstract is <strong>Monday 31st October 2022</strong></p>

            <p>We plan to be in touch regarding acceptance of the extended abstracts no later than early December. The full papers (preferably no longer than 8000 words) are likely to be requested by late January.</p>
           </div>
          </div>
         </div>
    );
}

export default Proceedings;