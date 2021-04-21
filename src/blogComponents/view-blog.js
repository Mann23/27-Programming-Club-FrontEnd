import React from "react";
import "./view-blog.css";

export default class ViewBlog extends React.Component {
    render() {
        return (
            <div className="WholeBody">
                <div className="TitleInfo">
                    <h1>{this.props.titleBlog}</h1>
                </div>

                <div className="DateInfo">
                    <p> {this.props.date}</p>
                </div>

                <div className="AbstractInfo">
                    <p>{this.props.abstractBlog}</p>
                </div>

                <div className="ContentInfo">
                    <p>{this.props.contentBlog}</p>
                </div>

                <div className="AuthorInfo">
                    <blockquote>
                        <p>Created by</p>
                        <p className="AuthorName"> - {this.props.author} </p>
                    </blockquote>
                </div>
            </div>
        );
    }
}

// import ViewBlog from './view-blog.js';
