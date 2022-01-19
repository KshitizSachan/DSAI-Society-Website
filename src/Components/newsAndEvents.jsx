import React from "react";
import CarasolItem from "./carasoulItem.jsx";
import { useEffect, useState } from "react";
import axios from "axios";

function NewsAnnouncements() {

    const [news, changenewsdata] = useState([])
    const [announcements, changeannoucedata] = useState([])

    useEffect(async () => {
        try {
            await axios({
                method: "get",
                url: "https://dsai-serverside-code.herokuapp.com/news",
                headers: {},
            }).then(function (response) {
                changenewsdata(response.data)
            });
        } catch (error) {
            console.error(error);
        }
    }, []);

    useEffect(async function getUser() {
        try {
            await axios({
                method: "get",
                url: "https://dsai-serverside-code.herokuapp.com/home/announcements",
                headers: {},
            }).then(function (response) {
                changeannoucedata(response.data);
            });
        } catch (error) {
            console.error(error);
        }
    }, [])

    useEffect(() => { })

    return (
        <div className="newsAndAnnouncements">
            <h1 className="newsEventsH1">News And Events</h1>
            <div className="row">
                <div className="col-lg-6">
                    <h1 style={{ textAlign: "center", marginTop: "5%", color: "#D17CFF" }}>Latest News</h1>
                    <div className="divNewsEvents">
                        <ul>
                            {news.map((newsitem) => <li>{newsitem.title}</li>)}
                        </ul>
                    </div>
                </div>
                <div className="col-lg-6">
                    <h1 style={{ textAlign: "center", marginTop: "5%", color: "#D17CFF" }}>Upcoming Events</h1>
                    <div className="divNewsEvents">
                        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                            <ol class="carousel-indicators">
                                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                            </ol>
                            <div className="carousel-inner">
                                {announcements.map((announcement) => {
                                    if (announcements[0] === announcement) {
                                        return <div className="carousel-item active">
                                            <CarasolItem heading={announcement.title} description={announcement.date} link={announcement.link} />
                                        </div>
                                    }
                                    return <div className="carousel-item">
                                        <CarasolItem heading={announcement.title} description={announcement.date} link={announcement.link} />
                                    </div>
                                })}
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