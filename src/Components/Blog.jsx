import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import TopBog from './TopBlog'
import BlogMain from "./BlogMain";

function Blog(){
    return (
        <div>
            <Navbar />
            <hr className="rule-styling"></hr>
            <TopBog />
            <BlogMain />
            <Footer />
        </div>
    );
}

export default Blog;