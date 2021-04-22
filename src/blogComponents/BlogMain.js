import "./BlogMain.css";
import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import BlogCard from "./blog-card.js";
import ViewBlog from "./view-blog.js";
import CreateBlog from "./create-blog.js";
// import apidata from "../APIdata/apidata.js";
import axios from "axios";

export default function BlogMain(prop) {
    const [blogs, setBlogs] = useState([]);

    let userid = localStorage.getItem("userid");
    console.log(userid);
    let fetchedid = 23456789;

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/posts")
            .then((res) => {
                console.log(res);
                setBlogs(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div className="App">
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className="Blogs-appbar-title">
                        Blogs
                    </Typography>
                    <div className="Create-blog-btn">
                        <Button color="inherit">Create Blog</Button>
                    </div>
                </Toolbar>
            </AppBar>

            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
            >
                {blogs.map((value, index) => {
                    return (
                        <Grid item xl={12}>
                            <BlogCard
                                key={value.id}
                                titleBlog={value.title}
                                abstractBlog={value.body}
                                contentBlog={value.body}
                                uid={userid}
                                feid={fetchedid}
                                dummyid={789789}
                            />
                        </Grid>
                    );
                })}
            </Grid>

            {/* <CreateBlog /> */}
            <ViewBlog />
        </div>
    );
}
