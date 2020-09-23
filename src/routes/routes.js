import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Home from '../views/Home';
import Tutorial from '../views/Tutorial';
import Login from '../views/Login';
import Register from '../views/Register';
import Profile from '../views/Profile';
import PrivateRoute from './privateRoute'
import DashBoard from '../views/Dashboard'


const Routes = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/cadastro" component={Register} />
          <PrivateRoute exact path="/tutorial" component={Tutorial} />
          <PrivateRoute exact path="/perfil" component={Profile} />
          
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default Routes;