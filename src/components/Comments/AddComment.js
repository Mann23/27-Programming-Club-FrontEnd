import React from 'react'
import { TextField ,IconButton,Grid} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import axios from "axios"
function AddComment() {
   const [comment,setComment] =React.useState("")

   const handleChange =(event) => {
      setComment(event.target.value)
      console.log(comment);
   }


   const resetAndSubmit =() => {
      setComment("")
      axios
            .post("https://jsonplaceholder.typicode.com/posts/1/comments", {
                ...comment,
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