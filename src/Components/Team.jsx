import React from "react";
import ContactCard from "./ContactCard";

function Team(){
    return (
        <div className="teamContainer">
            <h1 className="ourTeamh1">Our Team</h1>
            <div className="row">
                <ContactCard name="Name Of The Person" job="Leader" src="https://i.imgur.com/ZTkt4I5.jpg" linkedin="https://www.linkedin.com/feed/"/>
                <ContactCard name="Name Of The Person" job="Leader" src="https://i.imgur.com/ZTkt4I5.jpg"/>
                <ContactCard name="Name Of The Person" job="Leader" src="https://i.imgur.com/ZTkt4I5.jpg"/>
                <ContactCard name="Name Of The Person" job="Leader" src="https://i.imgur.com/ZTkt4I5.jpg"/>
                <ContactCard name="Name Of The Person" job="Leader" src="https://i.imgur.com/ZTkt4I5.jpg"/>
                <ContactCard name="Name Of The Person" job="Leader" src="https://i.imgur.com/ZTkt4I5.jpg"/>
                <ContactCard name="Name Of The Person" job="Leader" src="https://i.imgur.com/ZTkt4I5.jpg"/>
                <ContactCard name="Name Of The Person" job="Leader" src="https://i.imgur.com/ZTkt4I5.jpg"/>
                <ContactCard name="Name Of The Person" job="Leader" src="https://i.imgur.com/ZTkt4I5.jpg"/>
                <ContactCard name="Name Of The Person" job="Leader" src="https://i.imgur.com/ZTkt4I5.jpg"/>
                <ContactCard name="Name Of The Person" job="Leader" src="https://i.imgur.com/ZTkt4I5.jpg"/>
                <ContactCard name="Name Of The Person" job="Leader" src="https://i.imgur.com/ZTkt4I5.jpg"/>
                <ContactCard name="Name Of The Person" job="Leader" src="https://i.imgur.com/ZTkt4I5.jpg"/>
            </div>
        </div>
    );
}

export default Team;