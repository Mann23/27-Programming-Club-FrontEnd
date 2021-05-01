import React, { Component ,useEffect } from "react";
import Comment from "./Comment";
import './Comment.css';
import AddComment from './AddComment'

import {Grid, makeStyles,Container, Typography} from "@material-ui/core"


function CommentsContainer() {
   return (
      <Container>
         <Grid container justify="space-between" >
            <Grid item xs={12}>
            
            <AddComment />
            </Grid>
            <Grid item>
            <Typography  variant="h4" gutterBottom>
               Comments
            </Typography>
            </Grid>
         </Grid>
         <Comments />
      </Container>
   )
}



const Comments = ()=> {
   const [comments, setComments] = React.useState([]);
   const [isFetching, setFetching] = React.useState(true);
      
    useEffect(() => {
      async function fetchComments() {
         let headers = { 
            // 'authorization':JSON.parse(localStorage.getItem('authorization')),
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+ JSON.parse(localStorage.getItem('authorization'))
          }
         let response = await fetch("https://jsonplaceholder.typicode.com/posts/1/comments",{headers})
         response = await response.json()
         let commentList = response.slice(0, 10);
         console.log(commentList)
         setComments([...commentList]) 
         setFetching(false)
          
      }  
      fetchComments()
    }, [])
   
   return isFetching ? "Loading..." : <Comment comments={comments} />;
      
}

export default CommentsContainer