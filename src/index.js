import React from 'react';
import ReactDOM from 'react-dom';
import Header from "./Navbar";
import MainHome from "./MainHome";
import NewsAnnouncements from './newsAndEvents'
import Footer from './Footer';

ReactDOM.render(
    <div>
        <Header />
        <hr className="rule-styling"></hr> 
        <MainHome />
        <NewsAnnouncements/>
        <Footer />
    </div>
,document.getElementById('root')); 