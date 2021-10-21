import React from 'react'
import { Route, Switch, withRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import AllProjects from './components/AllProjects';
import Landing from './components/Landing';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/allProjects" component ={AllProjects} />
      </Switch>
    </div>
  );
}

export default withRouter(App);
