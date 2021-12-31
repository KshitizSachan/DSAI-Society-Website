import React from "react";
import Header from "./Navbar";
import MainHome from "./MainHome";
import NewsAnnouncements from './newsAndEvents'
import Footer from './Footer';

function Home(){
    return (
        <div>
        <Header />
        <hr className="rule-styling"></hr> 
        <MainHome />
        <NewsAnnouncements/>
        <Footer />
    </div>
    );
}

export default Home;