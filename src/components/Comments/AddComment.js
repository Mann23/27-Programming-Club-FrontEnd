import React from 'react'
import { TextField ,IconButton,Grid} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import axios from "axios"
import { useParams } from 'react-router';


axios.interceptors.request.use(
    (config) => {
      config.headers.authorization = `Bearer ${localStorage.getItem("accessToken")}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
 

function AddComment(props) {
   const [comment,setComment] =React.useState("")
   const params  =  useParams()

   const handleChange =(event) => {
      setComment(event.target.value)
      console.log(comment);
   }
   console.log(props.comments)
   const resetAndSubmit =() => {
        props.setComments([...props.comments,comment])
      axios.post("http://localhost:4000/comment/", {
                commentText:comment,
                blogId:params.id
            })
            .then(function (response) {
                console.log("Successfull")
                console.log(response);
                setComment("")
                window.location.reload()
            })
            .catch((err) => {
                console.log(err);
            });
   }
   return (
      <form noValidate autoComplete="off">
         <Grid container>
            <Grid item xs={11}>
            <TextField
               label="Comment"
               variant="outlined"
               color="primary"
               value ={comment}
               onChange={handleChange}
            />
            </Grid>

            <Grid item xs={1}>
                  <IconButton onClick={resetAndSubmit}>
                  <SendIcon fontSize="large" />
                  </IconButton>
            </Grid>
        </Grid>
      </form>
   )
}

export default AddComment
