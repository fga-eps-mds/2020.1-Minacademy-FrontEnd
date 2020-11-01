import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../views/Home';
import Tutorial from '../views/Tutorial';
import Login from '../views/Login';
import Register from '../views/Register';
import ForgotPassword from '../views/ForgotPassword';
import Change from '../views/Change';
import Profile from '../views/Profile';
import PrivateRoute from './components/privateRoute';
import PublicRoute from './components/publicRoute';
import Dashboard from '../views/Dashboard';
import Welcome from '../views/Welcome';
import Mentorship from '../views/Mentorship';
import Certificate from '../views/Certificate';
import CourseCertificate from '../views/CourseCertificates';
import Exam from '../views/Exam';

const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <PublicRoute exact path="/login">
          <Login />
        </PublicRoute>
        <PublicRoute exact path="/cadastro">
          <Register />
        </PublicRoute>
        <PrivateRoute exact path="/bem-vindo">
          <Welcome />
        </PrivateRoute>
        <PrivateRoute path="/tutorial">
          <Tutorial />
        </PrivateRoute>
        <PrivateRoute path="/avaliacao">
          <Exam />
        </PrivateRoute>
        <PrivateRoute exact path="/mentoria">
          <Mentorship />
        </PrivateRoute>
        <PublicRoute exact path="/forgotPassword">
          <ForgotPassword />
        </PublicRoute>
        <PublicRoute exact path="/change/:resetLink">
          <Change />
        </PublicRoute>
        <PrivateRoute exact path="/perfil">
          <Profile />
        </PrivateRoute>
        <PrivateRoute exact path="/dashboard">
          <Dashboard />
        </PrivateRoute>
        <PrivateRoute exact path="/certificados/">
          <CourseCertificate />
        </PrivateRoute>
        <Route exact path="/certificados/:_id">
          <Certificate />
        </Route>
      </Switch>
    </>
  );
};

export default Routes;
