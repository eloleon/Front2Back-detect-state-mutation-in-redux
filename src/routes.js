// src/routes.js
import React from 'react';
import {
  Route,
  Switch
} from 'react-router-dom'

import HomePage from './Pages/HomePage';
import Page1 from './Pages/Page1';
import Page2 from './Pages/Page2';
import Page3 from './Pages/Page3';
import NotFound from './Pages/NotFound';

const Routes = (props) => (
  <div>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/page1" component={Page1} />
      <Route path="/page2" component={Page2} />
      <Route path="/page3/:id" component={Page3} />
      <Route component={NotFound} />
    </Switch>
  </div>
);

export default Routes;
