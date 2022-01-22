import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTwitter} from "@fortawesome/free-brands-svg-icons";
import {faDiscord} from "@fortawesome/free-brands-svg-icons";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons";

function ContactCard(props){
    return (
            <div className="col-md-6 col-lg-3 ">
                <div className="card" style={{width:'18rem',marginTop:"10%"}}>
                    <img src={props.src} className="card-img-top CardImg" alt="..."/>
                    <div className="card-body cardStyle">
                        <h5 className="card-title">{props.name}</h5>
                        <h6 className="card-subtitle mb-2 text-muted jobH6">{props.job}</h6>
                        <div>
                            <a href={props.linkedin} target='blank'><FontAwesomeIcon className="cardIcons" target="blank" size="2x" icon={faLinkedin} /></a>
                            <a href={props.twitter} target='blank'><FontAwesomeIcon className="cardIcons" target="blank" size="2x" icon={faTwitter} /></a>
                            <a href={props.github} target='blank'><FontAwesomeIcon className="cardIcons" target="blank" size="2x" icon={faGithub} /></a>
                            <a href={props.discord} target='blank'><FontAwesomeIcon className="cardIcons" target="blank" size="2x" icon={faDiscord} /></a>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default ContactCard;