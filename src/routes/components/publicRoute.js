import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect} from 'react-router-dom';
import { selectCurrentUser } from '../../slices/usersSlice';
import RouteTransition from '../../UI/animation/RouteTransition'

const PublicRoute = ({ currentUser, children, exact, path, dispatch, ...otherProps }) => {
   return (
     <RouteTransition exact={exact} path={path} {...otherProps}>
      {currentUser
      ? otherProps.location.pathname === '/login'
      ? <Redirect push to="/dashboard" />
      : <Redirect push to="/bem-vindo" />
      : children
      }
     </RouteTransition>
   );
};

PublicRoute.defaultProps = {
  currentUser: null,
  exact: false,
};

PublicRoute.propTypes = {
  currentUser: PropTypes.oneOfType([PropTypes.oneOf([null]), PropTypes.object]),
  children: PropTypes.elementType.isRequired,
  exact: PropTypes.bool,
  path: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state),
});

export default (connect(mapStateToProps)(PublicRoute));
