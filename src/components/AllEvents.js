import React from 'react';
import Event from './Event';
import {Grid} from '@material-ui/core/';


export default function AllEvents() {
  const events = [
   {
      name:"quiz",
      time:"today",
      notexpired:true
   },
   {
      name:"quiz",
      time:"tomorrow",
      notexpired:true
   },
   {
      name:"quiz",
      time:"yesterday",
      notexpired:false
   }
]


  return (
    <Grid
    container
    direction="column"
    alignItems="center"
    alignContent="center"
    >

      {
         events.map( (event) => <Event event={event} /> )
      }

    </Grid>
  );
}


// past contest = no button to participate // ongoing contest = text = ongoing // future should have button
