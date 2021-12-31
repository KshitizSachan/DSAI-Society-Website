import React from "react";

function Footer(){
    return (
        <div className="footerStyle">
            <div className="row">
                <div className="col-lg-9 col-md-9 col-sm-9">
                    <a className="footerATags"  href="#">Phone</a>
                    <a className="footerATags" href="#">Address</a>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <a className="footerATags" href="#">Enquiries</a>
                    <a className="footerATags" href="#">Follow Us</a>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3">
                <img src="../Images/society-img.png" className="img-style-footer"></img>
                </div>
            </div>
        </div>
    );
}

export default Footer;