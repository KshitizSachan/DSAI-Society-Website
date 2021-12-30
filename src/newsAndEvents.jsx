import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import CarasolItem from "./carasoulItem.jsx";

function NewsAnnouncements(){
    return (
        <div className="newsAndAnnouncements">
            <h1 className="newsEventsH1">News And Events</h1>
            <div className="row">
                    <div className="col-lg-6">
                        <h1 style={{textAlign:"center",marginTop:"5%",color:"#D17CFF"}}>Latest News</h1>
                            <div className="divNewsEvents">
                                <ul>
                                    <li>lorem ipsum</li>
                                    <li>lorem ipsum</li>
                                    <li>lorem ipsum</li>
                                    <li>lorem ipsum</li>
                                    <li>lorem ipsum</li>
                                    <li>lorem ipsum</li>
                                    <li>lorem ipsum</li>
                                    <li>lorem ipsum</li>
                                    <li>lorem ipsum</li>
                                    <li>lorem ipsum</li>
                                    <li>lorem ipsum</li>
                                    <li>lorem ipsum</li>
                                    <li>lorem ipsum</li>
                                    <li>lorem ipsum</li>
                                    <li>lorem ipsum</li>
                                    <li>lorem ipsum</li>
                                </ul>
                            </div>
                    </div>
                    <div className="col-lg-6">
                    <h1 style={{textAlign:"center",marginTop:"5%",color:"#D17CFF"}}>Upcoming Events</h1>
                            <div className="divNewsEvents">
                                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active first-item">
                                            <CarasolItem heading="#66 Days Of Code" description="Starting at some date"/>
                                        </div>
                                        <div className="carousel-item second-item">
                                            <CarasolItem heading="#66 Days Of Code" description="Starting at some date"/>
                                        </div>
                                        <div className="carousel-item third-item">
                                            <CarasolItem heading="#66 Days Of Code" description="Starting at some date"/>
                                        </div>
                                    </div>
                                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Previous</span>
                                    </a>
                                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Next</span>
                                    </a>
                                    </div>
                                </div>
                    </div>
            </div>
        </div>
    );
}
 
export default NewsAnnouncements;