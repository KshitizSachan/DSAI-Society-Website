import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Blog(){
    return (
        <div>
            <Navbar />
            <hr className="rule-styling"></hr> 
            <h1>Blog</h1>
            <Footer />
        </div>
    );
}

export default Blog;