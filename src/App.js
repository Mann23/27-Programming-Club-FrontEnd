import AllEvents from './components/TimeTable/AllEvents'

import Header from './components/Header/Header'
import { BrowserRouter as Router,Route} from 'react-router-dom'
import React, { lazy, Suspense } from 'react'
import {Grid, makeStyles} from "@material-ui/core"
// https://www.freecodecamp.org/news/react-router-tutorial/#:~:text=To%20add%20the%20link%20in,link%20if%20it%20is%20active.
const useStyles = makeStyles((theme) => ({
  toolbarUncover: theme.mixins.toolbar,
}));

const App = ()=> {
  const { toolbarUncover } = useStyles();

  return (
  <div>
    <Router>
      <Grid container direction={"column"}>
        <Grid item xs={12} spacing={10}>
          <Header/>
          <div className={toolbarUncover} />
        </Grid>
        <Grid item xs={12}>
      <AllEvents/>
        </Grid>
      </Grid>
    </Router>

  </div>
  );
}

export default App;
