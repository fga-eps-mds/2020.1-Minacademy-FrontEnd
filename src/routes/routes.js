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
import Welcome from '../views/Welcome'
import Mentorship from '../views/Mentorship'
import Certificate from '../views/Certificate';
import CourseCertificate from '../views/CourseCertificates';
import Exam from '../views/Exam';

const Routes = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <PublicRoute exact path="/login" component={Login} />
        <PublicRoute exact path="/cadastro" component={Register} />
        <PrivateRoute exact path="/bem-vindo" component={Welcome}/>
        <PrivateRoute path="/tutorial" component={Tutorial} />
        <PrivateRoute path="/avaliacao" component={Exam} />
        <PrivateRoute exact path="/mentoria" component={Mentorship} />
        <PublicRoute exact path="/forgotPassword" component={ForgotPassword} />
        <PublicRoute exact path="/change/:resetLink" component={Change} />
        <PrivateRoute exact path="/perfil" component={Profile} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute exact path="/certificados/" component={CourseCertificate} />
        <Route exact path="/certificados/:_id" component={Certificate} />
      </Switch>
    </div>
  );
};

export default Routes;
