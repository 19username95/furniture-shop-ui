import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';

import './App.scss';
import { Navigation } from '../components'
import {
    NotFound,
    Home,
    Goods,
    Login
} from '../pages'

function App() {
  return (
      <Router>
        <Navigation />
        <Switch>
            <Route path='/home' component={Home}/>
            <Route path='/goods/:category' component={Goods}/>
            <Route path='/profile' component={Login}/>
            <Route path='/404' component={NotFound}/>
            <Route path='/*'>
                <Redirect to='/404' />
            </Route>
            <Redirect from='/' to='/home'/>
        </Switch>
      </Router>
  );
}

export default App;
