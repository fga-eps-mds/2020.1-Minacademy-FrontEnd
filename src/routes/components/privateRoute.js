import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { selectCurrentUser } from '../../slices/usersSlice';

export const PrivateRoute = ({ currentUser, component: Component, ...rest }) => (
  <Route {...rest} component={(props) => (
    currentUser ? (
      <Component {...props} />
    ) : (
        <Redirect to="/login" />
      )
  )}
  />
);

const mapStateToProps = state => ({
  currentUser: selectCurrentUser(state)
});


PrivateRoute.defaultProps = {
  currentUser: null,
};

PrivateRoute.propTypes = {
  currentUser: PropTypes.oneOfType([
    PropTypes.oneOf([null]),
    PropTypes.object
  ]),
  component: PropTypes.elementType.isRequired
};


export default connect(mapStateToProps)(PrivateRoute);
