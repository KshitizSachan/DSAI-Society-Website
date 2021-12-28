import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTwitter} from "@fortawesome/free-brands-svg-icons";
import {faFacebook} from "@fortawesome/free-brands-svg-icons";
import {faInstagram} from "@fortawesome/free-brands-svg-icons";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons";

function header() {
	return (
		<nav className="navbar navbar-dark color-style ">
			<a className="navbar-brand" href="#">DSAI Website</a>
				<div className="iconLayout ml-auto">
					<FontAwesomeIcon className="iconSpacing" size="2x" icon={faLinkedin} />
					<FontAwesomeIcon className="iconSpacing" size="2x" icon={faInstagram} />
					<FontAwesomeIcon className="iconSpacing" size="2x" icon={faFacebook} />
					<FontAwesomeIcon className="iconSpacing" size="2x" icon={faTwitter} />
				</div>
		</nav>
	);
}

export default header;