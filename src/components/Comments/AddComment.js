import React from 'react'
import { TextField ,IconButton,Grid} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import axios from "axios"
function AddComment(prop) {
   const [comment,setComment] =React.useState("")

   const handleChange =(event) => {
      setComment(event.target.value)
      console.log(comment);
   }


   const resetAndSubmit =() => {
        prop.setComments([...prop.commets,comment])
      setComment("")
      axios
            .post("http://localhost:4000/comment/", {
                commentText:comment,
                blogId:prop.match.params.id
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
