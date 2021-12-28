import React from 'react';
import ReactDOM from 'react-dom';
// import Header from './Header';
import Header from "./Header";
import MainHome from "./MainHome";

ReactDOM.render(
    <div>
        <Header />
        <hr className="rule-styling"></hr> 
        <MainHome /> 
    </div>
,document.getElementById('root')); 