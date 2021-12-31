import React from "react";
import Navbar from "./Navbar";
import Footer from './Footer';
import WhoAreWe from "./WhoAreWe";
import Team from './Team';

function About(){
    return (
        <div>
            <Navbar />
            <hr className="rule-styling"></hr>
            <WhoAreWe />
            <Team />
            <Footer />
        </div>
    );
}

export default About;