import React, { useState, useEffect } from "react";
import axios from "axios";
import "./create-blog.css";

export default function CreateBlog() {
    // const [titleOfBlog, setTitleOfBlog] = useState('')
    // const [abstractOfBlog, setAbstractOfBlog] = useState('')
    // const [contentOfBlog, setContentOfBlog] = useState('')

    const [blog, setBlog] = useState({
        titleOfBlog: "",
        abstractOfBlog: "",
        contentOfBlog: "",
    });

    const mySubmitHandler = (event) => {
        // event.preventDefault();
        alert('You are submitting "' + blog.titleOfBlog + '" ');

        axios
            .post("https://jsonplaceholder.typicode.com/posts", {
                // userId: 1,
                // id: 1000,
                // title: "qwertyuiop",
                // body: "asdfghjkl",
                ...blog,
            })
            .then(function (response) {
                console.log("inside reponce promise");
                console.log(response);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        if (nam === "titleOfBlog") {
            setBlog({ ...blog, titleOfBlog: val });
        }
        if (nam === "abstractOfBlog") {
            setBlog({ ...blog, abstractOfBlog: val });
        }
        if (nam === "contentOfBlog") {
            setBlog({ ...blog, contentOfBlog: val });
        }
    };

    return (
        <div className="container">
            <form onSubmit={mySubmitHandler}>
                <div className="row">
                    <div className="col-25">
                        <label>Title:</label>
                    </div>
                    <div className="col-75">
                        <input
                            type="text"
                            name="titleOfBlog"
                            value={blog.titleOfBlog}
                            onChange={myChangeHandler}
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="col-25">
                        <label>Abstract:</label>
                    </div>
                    <div className="col-75">
                        <textarea
                            name="abstractOfBlog"
                            value={blog.abstractOfBlog}
                            onChange={myChangeHandler}
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="col-25">
                        <label>Content:</label>
                    </div>
                    <div className="col-75">
                        <textarea
                            name="contentOfBlog"
                            value={blog.contentOfBlog}
                            onChange={myChangeHandler}
                            style={{ height: "300px" }}
                        />
                    </div>
                </div>

                <div className="row">
                    <input type="submit" value="SUBMIT" />
                </div>
            </form>
        </div>
    );
}
