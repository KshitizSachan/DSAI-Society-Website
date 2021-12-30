import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function Footer(){
    return (
        <div className="footerStyle">
            <div className="row">
                <div className="col-lg-9">
                    <a className="footerATags">Phone</a>
                    <a className="footerATags">Address</a>
                    <a className="footerATags">Enquiries</a>
                    <a className="footerATags">Follow Us</a>
                </div>
                <div className="col-lg-3">

                </div>
            </div>
        </div>
    );
}

export default Footer;