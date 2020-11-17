import React from 'react';
import { Route } from 'react-router-dom';
import MountTransition from './MountTransition';

const RouteTransition = ({ children, exact = false, path, ...rest }) => {
  return (
    <Route exact={exact} path={path} {...rest}>
      <MountTransition>{children}</MountTransition>
    </Route>
  );
};

export default RouteTransition;
