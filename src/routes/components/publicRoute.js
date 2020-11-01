import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Redirect, useLocation } from 'react-router-dom';
import { selectCurrentUser } from '../../slices/usersSlice';

const PublicRoute = ({ currentUser, children, exact, path }) => {
  const location = useLocation();
  return (
    <>
      <Route exact={exact} path={path}>
        {currentUser ? ( // eslint-disable-line no-nested-ternary
          location.pathname === '/login' ? (
            <Redirect to="/dashboard" />
          ) : (
            <Redirect to="/bem-vindo" />
          )
        ) : (
          <div className="animation">{children}</div>
        )}
      </Route>
    </>
  );
};

PublicRoute.defaultProps = {
  currentUser: null,
  exact: false
};

PublicRoute.propTypes = {
  currentUser: PropTypes.oneOfType([PropTypes.oneOf([null]), PropTypes.object]),
  children: PropTypes.elementType.isRequired,
  exact: PropTypes.bool,
  path: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state),
});

export default connect(mapStateToProps)(PublicRoute);
