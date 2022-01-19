import React from "react";

function CarasolItem(props){
    return (
        <div className="itemStyling">
            <h2>{props.heading}</h2>
            <p>{props.description}</p>
            <button type="button" className="btn btn-lg rounded-pill btn-default" style={{paddingLeft:40,paddingRight:40,color: "black",borderColor:"#5E5D8C"}}><a href={props.link}>Know More</a></button>
        </div>
    );
}

export default CarasolItem;