// src/routes.js
import React from 'react';
import {
  Route,
  Switch
} from 'react-router-dom'

import HomePage from './Pages/HomePage';
import NotFound from './Pages/NotFound';

const Routes = (props) => (
  <div>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route component={NotFound} />
    </Switch>
  </div>
);

export default Routes;
