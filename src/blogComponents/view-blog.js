import React,{useState,useEffect} from "react";
import "./view-blog.css";
import axios from 'axios'
import CommentsContainer from '../components/Comments/CommentsContainer'

const ViewBlog = (prop) => {
    const [blog, setBlog] = useState({
        titleOfBlog: "",
        abstractOfBlog: "",
        contentOfBlog: "",
    });

    useEffect(() => {
        console.log("props>>",prop)
        const edit_blog_id = prop.match.params.id;
        console.log("edit_blog_id",edit_blog_id);
        axios
            .get("http://localhost:4000/blog/viewblog/"+ edit_blog_id,
            {
                headers:{
                    "Authorization":"Bearer "+localStorage.getItem('accessToken')
                }
            })
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


    return(
            <div className="WholeBody">
                <div className="TitleInfo">
                    <h1>{blog.titleOfBlog}</h1>
                </div>

                <div className="DateInfo">
                    <p> {blog.date}</p>
                </div>

                <div className="AbstractInfo">
                    <p>{blog.abstractOfBlog}</p>
                </div>

                <div className="ContentInfo">
                    <p>{blog.contentOfBlog}</p>
                </div>

                <div className="AuthorInfo">
                    <blockquote>
                        <p>Created by</p>
                        <p className="AuthorName"> - {blog.author} </p>
                    </blockquote>
                </div>
                <CommentsContainer />
            </div>
        );
}

export default ViewBlog
// import ViewBlog from './view-blog.js';
