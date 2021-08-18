import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../screens/web/Home';

const RouterApplication = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </BrowserRouter>
);

export default RouterApplication;
