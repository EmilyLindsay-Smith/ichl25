import React from "react";

function Footer(){

    return (
        <div className="footer">
            <p> Please <a href="mailto:emily.lindsay-smith@ling-phil.ox.ac.uk">contact us</a> for feedback and comments about this page. Last update on 08 Apr 2022 17:38</p>
            <footer className="py-2 bg-ox fixed-bottom container fluid-containerB">
                    <div></div>
                    <div className="text-center text-white footer-email">
                        ICHL25 <br/>
                        created by Dr. Emily Lindsay-Smith
                    </div>
                    <div className="text-center">
                        <a href="#navigationjump" className="topreturn">Return to top</a>
                    </div>
            </footer>
        </div>     

   );
}

export default Footer;

