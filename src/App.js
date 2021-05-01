import React, { lazy, Suspense } from 'react'
import {  Route ,Switch} from 'react-router-dom'
import {Grid, makeStyles} from "@material-ui/core"

import './index.css';
import "./App.css";

import Login from './components/Login/Login';
import ChatBody from "./components/chatBody/ChatBody";
import Header from './components/Header/Header'
import AllEvents from './components/TimeTable/AllEvents'

import CreateBlog from "./blogComponents/create-blog.js";
import ViewBlog from "./blogComponents/view-blog.js";
import EditBlog from "./blogComponents/edit-blog.js";
import BlogMain from './blogComponents/BlogMain';

import history from './history';


// https://www.freecodecamp.org/news/react-router-tutorial/#:~:text=To%20add%20the%20link%20in,link%20if%20it%20is%20active.
const useStyles = makeStyles((theme) => ({
  toolbarUncover: theme.mixins.toolbar,
}));

localStorage.setItem('UserID',201801454);

function App(){
  const {toolbarUncover} = useStyles();
  return (

  <div>  
      <Grid container direction={"column"} spacing={10}>
        <Grid item xs={12} >
          <Header/>
          <div className={toolbarUncover} />
        </Grid>
        <Grid item xs={12}>  
          <Switch> 
            
            { localStorage.getItem('UserID') ? ( 
              <>
              <Route path="/login" component={Login} exact/>
            <Route  path="/events" component={AllEvents} exact/>
            <Route path="/chat">
              <div className="__main">
                <ChatBody />
              </div>
            </Route>
            <Route path="/view-blog" component={ViewBlog} exact/>
            <Route path="/create-blog" component={CreateBlog} exact/>
            <Route path="/edit-blog/:id" component={EditBlog} exact/>
            <Route path="/" component={BlogMain} exact/>
            </>
            ): (<>
              <Route  path="/" component={Login} />
            </>)}
          </Switch>
        </Grid>
      </Grid>
  </div>
  );

}

export default App;