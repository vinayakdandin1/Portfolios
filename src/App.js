import React from 'react'
import { Route, Switch, withRouter } from 'react-router-dom';

import AllProjects from './components/AllProjects';
import Landing from './components/Landing';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/allProjects" component ={AllProjects} />
      </Switch>
    </div>
  );
}

export default withRouter(App);
