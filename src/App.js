import AllEvents from './components/AllEvents'
import Header from './components/Header'
import AllEventsTrial from './components/AllEventsTrial'
import { BrowserRouter as Router,Route} from 'react-router-dom'
import React, { lazy, Suspense } from 'react'

// https://www.freecodecamp.org/news/react-router-tutorial/#:~:text=To%20add%20the%20link%20in,link%20if%20it%20is%20active.


const App = ()=> {
  return (
  <div>
    <Router>
      {/* <Header/> */}
    <AllEvents/>

    <AllEventsTrial/>
    </Router>

  </div>
  );
}

export default App;
