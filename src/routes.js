import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Login from './containers/Login';
import Signup from './containers/Signup';
import Dashboard from './containers/Dashboard';
import Daggett from './components/Daggett';

export default (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' render={ () =>  loggedIn() ? <Dashboard /> : <Redirect to="/login"/> }/>
      <Route path='/login' component={ () => loggedIn() ? <Redirect to="/"/> : <Login/> }/>
      <Route path='/logout' component={ () => logout() }/>
      <Route path='/signup' component={ () => loggedIn() ? <Redirect to="/"/> : <Signup/> }/>
      <Route path='/dashboard' component={ () => loggedIn() ? <Dashboard/> : <Login/> }/>
      <Route path='/daggett' component={ () => loggedIn() ? <Daggett/> : <Login/> }/>
    </Switch>
  </BrowserRouter>
);

const loggedIn = () => !!sessionStorage['accountId'];

const logout = () => {
  if(sessionStorage['accountId']) sessionStorage.removeItem('accountId');
  return <Redirect to="/login"/>;
};
