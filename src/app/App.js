import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import { Provider } from 'react-redux'
import axios from 'axios'

import { API_URL } from '../global/constants'
import './App.scss';
import { Navigation } from '../components'
import {
    NotFound,
    Home,
    Goods,
    Login
} from '../pages'
import { store } from '../redux/store'

function App() {
  axios.defaults.baseURL = API_URL

  return (
      <Provider store={store}>
          <Router>
            <Navigation />
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/goods/:category' component={Goods}/>
                <Route path='/profile' component={Login}/>
                <Route path='/*' component={NotFound}/>
            </Switch>
          </Router>
      </Provider>
  );
}

export default App;
