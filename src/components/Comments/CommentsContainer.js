import React, { Component ,useEffect } from "react";
import Comment from "./Comment";
import './Comment.css';
import AddComment from './AddComment'

import {Grid, makeStyles,Container, Typography} from "@material-ui/core"


function CommentsContainer(prop) {
   console.log(prop)
   const [comments, setComments] = React.useState([]);
   return (
      <Container>
         <Grid container justify="space-between" >
            <Grid item xs={12}>
            
            <AddComment comments={comments}  setComments={setComments} />
            </Grid>
            <Grid item>
            <Typography  variant="h4" gutterBottom>
               Comments
            </Typography>
            </Grid>
         </Grid>
         <Comments BlogId={prop.id} comments={comments}  setComments={setComments} />
      </Container>
   )
}



const Comments = (props)=> {
   const [isFetching, setFetching] = React.useState(true);
      
    useEffect(() => {
      async function fetchComments() {
         let headers = { 
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+ localStorage.getItem('authorization')
          }
         //  "http://localhost:4000/comment/"+props.BlogId
         let response = await fetch("http://localhost:4000/comment/"+props.BlogId,{headers})
         console.log(response)
         response = await response.json()
         console.log("respodcjkbdshcbhjdsbcbnse",response)
         let commentList = response.comments.slice(0, 10);
         console.log(commentList)
         props.setComments([...commentList]) 
         setFetching(false)
          
      }  
      fetchComments()
    }, [])
   
   return isFetching ? "Loading..." : <Comment comments={props.comments} />;
      
}

export default CommentsContainer