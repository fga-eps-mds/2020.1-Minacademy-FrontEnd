import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import { Switch, Route, BrowserRouter} from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './views/Home';
import Tutorial from './views/Tutorial';
import Login from './views/Login';
import Register from './views/Register';

=======
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './views/Home';
import Login from './views/Login';
import Register from './views/Register';
>>>>>>> desenvolvimento da tela de registro e ajustes na tela de login
=======
import { Switch, Route } from 'react-router-dom';

import Home from './views/Home';
import Login from './views/Login';
import Register from './views/Register';
import Header from './components/Header'
import Footer from './components/Footer'
>>>>>>> implementacao dos campos do formulario

const Routes = () => {
  return (
    <>
<<<<<<< HEAD
<<<<<<< HEAD
    <Header/>
    <BrowserRouter>
=======
    <Header/>
>>>>>>> implementacao dos campos do formulario
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/cadastro" component={Register} />
<<<<<<< HEAD
      <Route exact path="/tutorial" component={Tutorial} />
    </Switch>
    </BrowserRouter>
    <Footer/>
=======
      <BrowserRouter>
      <Header/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/cadastro" component={Register} />
        </Switch>
        <Footer/>
      </BrowserRouter>
>>>>>>> desenvolvimento da tela de registro e ajustes na tela de login
=======
    </Switch>
    <Footer/>
>>>>>>> implementacao dos campos do formulario
    </>
  );
}

export default Routes;