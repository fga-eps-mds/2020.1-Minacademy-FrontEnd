import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './views/Home';
import Tutorial from './views/Tutorial/Tutorial';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/tutorial" component={Tutorial} />
    </Switch>
  );
}

export default Routes;