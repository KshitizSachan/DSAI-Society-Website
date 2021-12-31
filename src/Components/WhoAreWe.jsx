import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown} from '@fortawesome/free-solid-svg-icons'

function WhoAreWe(){
    return(
        <section>
        <div className="whoAreWe" >
            <img src="../Images/society-img.png" className="img-style"></img>
            <div className="whoAreWeContent">
                <h1 className="whoAreWeH1">Who Are We ?</h1>
                <div className="row">
                    <div className="col-lg-8">
                        <p className="whoAreWep">We are DSAI society, a unique club to empower data science and AI enthusiasts to conquer the world of data. The society aims at providing guidance, study path, and practical knowledge to the students who are keen to explore the DSAI culture. We offer students a platform to gain real world experience and engage in hands-on, practice with tools and frameworks, covering a broad range of topics from data analytics to neural networks and kaggle competitions to trending projects under one umbrella. Our objective is to learn new skills together and make more and more people aware of the wide scope of opportunities in the new and emerging field of the IT industry. </p>
                    </div>
                    <img src="../Images/aboutImg2.jpg" className="col-lg-4"></img>
                </div>
            </div>
            <FontAwesomeIcon className="arrowIcon" size="4x" icon={faAngleDoubleDown}/>
        </div>
        </section>
    );
}

export default WhoAreWe;