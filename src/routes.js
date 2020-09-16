import React from 'react';
import moduleName from 'react-redux';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Home from './views/Home';
import Tutorial from './views/Tutorial/Tutorial';

const Routes = () => {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/tutorial" component={Tutorial} />
    </Switch>
    </BrowserRouter>
  );
}

export default Routes;