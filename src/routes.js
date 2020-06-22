import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './pages/login';
import Dashboard from './pages/dashboard';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route component={Dashboard} path="/dashboard" />
      <Route component={Login} exact path="/" />
    </Switch>
  </BrowserRouter>
);

export default Routes;
