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

const deleteComment =()=>{
   //delete request
}


const Comment = ({ comments }) => {
  const classes = useStyles();
  return (
    <List className={classes.root}>
      {comments.map(comment => {
        console.log("Comment", comment);
        return (
          <React.Fragment key={comment.id}>
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
            </ListItem>
                  <IconButton onClick={deleteComment}>
                     <DeleteIcon color="secondary"/>
                  </IconButton>
            <Divider />
            
          </React.Fragment>
        );
      })}
    </List>
  );
};

export default Comment;