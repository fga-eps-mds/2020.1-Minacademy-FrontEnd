import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { selectCurrentUser } from '../../slices/usersSlice';
import RouteTransition from '../../UI/animation/RouteTransition'

const PrivateRoute = ({ currentUser, children, exact=false, path, dispatch, ...rest }) => {
  return (
  <RouteTransition exact={exact} path={path} {...rest}>
    {currentUser
    ? children
    : <Redirect push to="/login" />}
  </RouteTransition>
)};

PrivateRoute.defaultProps = {
  currentUser: null,
  exact: false,
};

PrivateRoute.propTypes = {
  currentUser: PropTypes.oneOfType([PropTypes.oneOf([null]), PropTypes.object]),
  children: PropTypes.elementType.isRequired,
  exact: PropTypes.bool,
  path: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state),
});

export default (
  connect(mapStateToProps)(PrivateRoute)
);
