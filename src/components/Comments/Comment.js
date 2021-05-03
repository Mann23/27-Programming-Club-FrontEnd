//header make using programming member 

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  List,
  ListItem,
  Divider,
  ListItemText,
  Typography,
  IconButton
} from "@material-ui/core";
import axios from "axios"

import DeleteIcon from '@material-ui/icons/Delete';
const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper
  },
  fonts: {
    fontWeight: "bold"
  },
  inline: {
    display: "inline"
  }
}));

const deleteComment =(clickedId)=>{
   console.log(clickedId,"events")

   axios
        .delete("http://localhost:4000/comment/"+clickedId,
        {
            headers:{
                "Authorization":"Bearer "+localStorage.getItem('accessToken')
            }
        })
        .then((res) => {
            console.log(res);
            console.log("inside reponce promise");
        })
        .catch((err) => {
            console.log(err);
        });

        window.location.reload(false);
}


const Comment = ({ comments }) => {
  const classes = useStyles();
  return (
    <List className={classes.root}>
      {comments.map(comment => <CommentRow key={comment.id} comment={comment} />)}
    </List>
  );
};


const CommentRow = ({comment}) => {
  const classes = useStyles();

return (
  <>
    <ListItem key={comment.id} alignItems="flex-start">
      <ListItemText
        primary={
          <Typography className={classes.fonts}>
            {comment.name}
          </Typography>
        }
        secondary={
          <>
            <Typography
              component="span"
              variant="body2"
              className={classes.inline}
              color="textPrimary"
            >
              {comment.email}
            </Typography>
            {` - ${comment.commentText}`}
          </>
        }
      />
      <IconButton onClick={()=> deleteComment(comment.id)}>
          <DeleteIcon color="secondary"/>
      </IconButton>
    </ListItem>
    <Divider />
    
  </>
);

}


export default Comment;