import React from "react";

function BlogContentCard(props){
    return (
        <div>
            <div className="row individualBlog">
                <img src={props.img} alt="blog image" className="col-lg-4" />
                <div className="col-lg-8">
                    <h1 className="blogtitle">{props.title}</h1>
                    <p className="blogdescription">{props.content}</p>
                </div>
            </div>
            <br />
            <br />
            <br />
        </div>
    );
}

export default BlogContentCard;