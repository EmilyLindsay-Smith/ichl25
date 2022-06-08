import React from "react";

function Footer(){

    return (
        <div className="footer">
            <p>hi</p>
            <footer>
                <div className="py-2 bg-ox fixed-bottom container fluid-containerB">
                    <div></div>
                    <div className="text-center text-white footer-email">
                        ICHL25 <br/>
                        created by <span className="text-white"><a href="mailto:emily.lindsay-smith@ling-phil.ox.ac.uk">Dr. Emily Lindsay-Smith </a></span>
                    </div>
                    <div className="text-center">
                        <a href="#navigationjump" className="topreturn">Return to top</a>
                    </div>
                 </div>
            </footer>
        </div>     

   );
}

export default Footer;

