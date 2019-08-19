import React from 'react';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from './Layouts/Home'
import NewItemForm from './Components/NewItemForm';
import LoadPlans from './Components/LoadPlans';
import LoadPlan from './Components/LoadPlan';
import Catalog from './Layouts/Catalog'
import About from './Layouts/About'

import './App.scss';

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/create" component={NewItemForm} />
          <Route exact path="/load" component={LoadPlans} />
          <Route exact path="/load/:planId" component={LoadPlan} />
          <Route path="/catalog" component={Catalog} />
          <Route path="/about" component={About} />
          <Route render={() => (<h1 style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} >Stránka nenalezen</h1>)} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
