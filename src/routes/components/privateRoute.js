import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { selectCurrentUser } from '../../slices/usersSlice';

export const PrivateRoute = ({ currentUser, component: Component, ...rest }) => (
  <Route
    {...rest}
    component={(props) => (
      currentUser ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    )}
  />

);

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state),
});

export default connect(mapStateToProps)(PrivateRoute);
