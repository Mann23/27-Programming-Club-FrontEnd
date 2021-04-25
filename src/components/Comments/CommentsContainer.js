import React from 'react'
import Comments from './Comments'
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

export default CommentsContainer
