import './BlogMain.css';
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import BlogCard from './blog-card.js'
import ViewBlog from './view-blog.js';
import CreateBlog from './create-blog.js';
import apidata from '../APIdata/apidata.js'



export default class BlogMain extends React.Component {

    constructor() {
        super();
        // var temp =  apidata

        this.state = {
            ApiD: { apidata },
        }
        this.myFunction = this.myFunction.bind(this);

    }

    myFunction() {
        console.log("writing")
    }

    render() {

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
                    direction="row"
                    justify="space-evenly"
                    alignItems="flex-start">
                    
                    {/* <Grid item xl={3}> <BlogCard titleBlog={this.state.ApiD.apidata[0].title} abstractBlog={this.state.ApiD.apidata[0].abstract} /> </Grid> */}
                    
                    {this.state.ApiD.apidata.map((value, index)=>{
                        return (<Grid item xl={3}> <BlogCard titleBlog={value.title} abstractBlog={value.abstract} /> </Grid>)
                    })}

                </Grid>

            </div>

        );
    }

}









// {
//     this.state.ApiD.apidata.map((value, index)=>{
//         return <Grid item xl={3}> <BlogCard titleBlog={value.title} abstractBlog={value.abstract} /> </Grid>
//     })
// }

