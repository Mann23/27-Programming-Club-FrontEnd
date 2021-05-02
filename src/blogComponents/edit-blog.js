import React, { useState, useEffect } from "react";
import axios from "axios";
import "./edit-blog.css";
import history from '../history';

export default function EditBlog(prop) {

    const [blog, setBlog] = useState({
        titleOfBlog: "",
        abstractOfBlog: "",
        contentOfBlog: "",
    });

    useEffect(() => {
        console.log("propseditblog>>",prop)
        const edit_blog_id = prop.match.params.id;
        console.log("edit_blog_id",edit_blog_id);
        axios
            .get("http://localhost:4000/blog/viewblog/"+ edit_blog_id)
            .then((res) => {
                console.log(res);
                setBlog({
                    titleOfBlog: res.data.title,
                    abstractOfBlog: "yes",
                    contentOfBlog: res.data.body,
                })
            })
            .catch((err) => {
                console.log(err);
            });
    },[]);

    const mySubmitHandler = (event) => {
        event.preventDefault();
        console.log(event,blog);
        alert('You are submitting "' + JSON.stringify(blog) + '" ');
        

         axios
            .put("http://localhost:4000/blog/updateblog/"+prop.match.params.id, {
                ...blog,
            },
            {
                headers:{
                    "Authorization":"Bearer "+localStorage.getItem('accessToken')
                }
            })
            .then(function (response) {
                console.log("inside reponce promise");
                console.log(response);
            })
            .catch((err) => {
                console.log(err);
            });

        history.push('/');
        window.location.reload(false);
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
                            autocomplete="off"
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
                            autocomplete="off"
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
                            autocomplete="off"
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
