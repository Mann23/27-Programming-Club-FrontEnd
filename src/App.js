import Header from './components/Header/Header'
import { BrowserRouter as Router,Route} from 'react-router-dom'
import React, { lazy, Suspense } from 'react'
import {Grid} from "@material-ui/core"
// https://www.freecodecamp.org/news/react-router-tutorial/#:~:text=To%20add%20the%20link%20in,link%20if%20it%20is%20active.


const App = ()=> {
  return (
  <div>
    <Router>
      <Grid container>
        <Grid item xs={12} spacing={10}>
          <Header/>
        </Grid>
        <Grid item xs={12}>
          <div>Random para </div><div>Random para </div><div>Random para </div><div>Random para </div><div>Random para </div>
        </Grid>
      </Grid>
    </Router>

  </div>
  );
}

export default App;
