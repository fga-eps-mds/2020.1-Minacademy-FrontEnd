import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Home from '../views/Home';
import Tutorial from '../views/Tutorial';
import Login from '../views/Login';
import Register from '../views/Register';
import Profile from '../views/Profile';
import PrivateRoute from './components/privateRoute';
import PublicRoute from './components/publicRoute';
import Dashboard from '../views/Dashboard';

const Routes = () => (
  <>
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <PublicRoute exact path="/login" component={Login} />
        <PublicRoute exact path="/cadastro" component={Register} />
        <PrivateRoute path="/tutorial" component={Tutorial} />
        <PrivateRoute exact path="/perfil" component={Profile} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
      </Switch>
      <Footer />
    </BrowserRouter>
  </>
);

export default Routes;
