import React from "react";

function Footer(){
    return (
        <div className="footer">
            <footer className="py-2 bg-ox fixed-bottom">
                <div className="container">
                    <div className="row">
                    <div className="col align-self-start"></div>
                    <div className="col align-self-center text-center text-white">
                        ICHL25 <br/>
                        created by Emily Lindsay-Smith
                    </div>
                    <div className="col align-self-end align-text-top text-center">
                        <a href="#site-title" className="topreturn">Return to top</a>
                    </div>
                    </div>
                </div>
            </footer>
        </div>     

   );
}

export default Footer;

