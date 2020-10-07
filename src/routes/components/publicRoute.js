import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { selectCurrentUser } from '../../slices/usersSlice';

export const PublicRoute = ({ currentUser, component: Component, ...rest }) => (
  <Route
    {...rest}
    component={(props) => (
      currentUser ? (
        <Redirect to="/dashboard" />
      ) : (
        <Component {...props} />
      )
    )}
  />
);

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state),
});

export default connect(mapStateToProps)(PublicRoute);
