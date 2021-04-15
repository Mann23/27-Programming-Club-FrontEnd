import React, {useState, useEffect} from 'react'
import CreateEventForm  from "./CreateEventForm";
// import SideMenu  from "./SideMenu";
import { Paper, makeStyles} from "@material-ui/core";


const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    }
}))

export default function CreateEvent(){
    const classes= useStyles();
    return(
        <>
        {/*<SideMenu /> */}
        <paper className={classes.pageContent}><CreateEventForm /> </paper>
        
        </>
    )
}