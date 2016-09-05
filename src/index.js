import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import './style.css'

import store from './store'

import Layout from './components/Layout'
import Splash from './components/Splash'
import BeerReview from './components/BeerReview';
import Register from './components/UserProfile/Register';
import LoginForm from './components/UserProfile/LoginForm';
import ViewProfile from './components/UserProfile/ViewProfile';

render(
 <Provider store ={store}>
  <Router history = {browserHistory}>
    <Route path ='/' component = {Layout}>
     <IndexRoute component={Splash}/>
     <Route path = '/register' component ={Register}/>
     <Route path = '/login' component ={LoginForm}/>
     <Route path = '/profile' component ={ViewProfile}/>
     <Route path = '/reviews' component ={BeerReview}/>
    </Route>
  </Router>
  </Provider>,
  document.getElementById('root')
);
