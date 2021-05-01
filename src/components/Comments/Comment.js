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
        .delete("url"+clickedId)
        .then((res) => {
            console.log(res);
            console.log("inside reponce promise");
            // setBlogs(res.data);
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
      {comments.map(comment => <CommentRow comment={comment} />)}
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
            {` - ${comment.body}`}
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