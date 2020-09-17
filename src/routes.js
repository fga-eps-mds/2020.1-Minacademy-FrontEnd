import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Footer from './components/Footer';

import Header from './components/Header';
import Home from './views/Home';
import Tutorial from './views/Tutorial/Tutorial';

const Routes = () => {
  return (
    <>
      <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/tutorial" component={Tutorial} />
        </Switch>
      <Footer />
    </>
  );
}

export default Routes;