import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTwitter} from "@fortawesome/free-brands-svg-icons";
import {faFacebook} from "@fortawesome/free-brands-svg-icons";
import {faInstagram} from "@fortawesome/free-brands-svg-icons";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons";

function header() {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<a className="navbar-brand" href="#">DSAI Website</a>
			<ul className="navbar-nav ml-auto ">
				<li className="nav-item">
					<a className="nav-link" href="#">Home</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="#">About</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="#">Blogs</a>
				</li>
			</ul>
			<ul className="navbar-nav ml-auto">
				<li className="nav-item">
					<FontAwesomeIcon className="iconSpacing" size="2x" icon={faLinkedin} />
				</li>
				<li className="nav-item">
					<FontAwesomeIcon className="iconSpacing" size="2x" icon={faInstagram} />
				</li>
				<li className="nav-item">
					<FontAwesomeIcon className="iconSpacing" size="2x" icon={faFacebook} />
				</li>
				<li className="nav-item">
					<FontAwesomeIcon className="iconSpacing" size="2x" icon={faTwitter} />
				</li>
			</ul>
		</nav>
	);
}

export default header;