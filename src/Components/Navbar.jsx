import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTwitter} from "@fortawesome/free-brands-svg-icons";
import {faFacebook} from "@fortawesome/free-brands-svg-icons";
import {faInstagram} from "@fortawesome/free-brands-svg-icons";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons";

function header() {
	return (
		<nav className="navbar navbar-expand-md navbar-dark color-style">
			{/* <a className="navbar-brand" href="#">Dark</a> */}
			<li class="nav-item dropdown navbar-brand">
				<a class="nav-link dropdown-toggle dropDownLink" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >Dark
				</a>
				<div class="dropdown-menu" aria-labelledby="navbarDropdown">
				<a class="dropdown-item" href="#">Light</a>
				</div>
			</li>

			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01"
				aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>


			<div class="collapse navbar-collapse" id="navbarTogglerDemo01">
				<ul className="navbar-nav ml-auto mr-auto">
					<li className="nav-item">
						<a className="nav-link link-color" href="/">Home</a>
					</li>
					<li className="nav-item">
						<a className="nav-link link-color" href="/about">About</a>
					</li>
					<li className="nav-item">
						<a className="nav-link link-color" href="/blog">Blogs</a>
					</li>
				</ul>

				<div className="iconLayout">
					<FontAwesomeIcon className="iconSpacing" size="2x" icon={faLinkedin} />
					<FontAwesomeIcon className="iconSpacing" size="2x" icon={faInstagram} />
					<FontAwesomeIcon className="iconSpacing" size="2x" icon={faFacebook} />
					<FontAwesomeIcon className="iconSpacing" size="2x" icon={faTwitter} />
				</div>
			</div>
		</nav>
	);
}

export default header;