import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Wowdata from "../RecieveData/data";

function Blog(){
    return (
        <div>
            <Navbar />
            <hr className="rule-styling"></hr> 
            <h1>Blog</h1>
            <Wowdata></Wowdata>
            <Footer />
        </div>
    );
}

export default Blog;