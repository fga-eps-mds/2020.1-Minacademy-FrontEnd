import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Redirect, useLocation } from 'react-router-dom';
import { selectCurrentUser } from '../../slices/usersSlice';

export const PublicRoute = ({ currentUser, children, exact, path, ...rest }) => {
  const location = useLocation();
  return (
    <>
      <Route
        exact={exact}
        path={path}
      >
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

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state),
});

PublicRoute.defaultProps = {
  currentUser: null,
};

PublicRoute.propTypes = {
  currentUser: PropTypes.oneOfType([PropTypes.oneOf([null]), PropTypes.object]),
  component: PropTypes.elementType.isRequired,
};

export default connect(mapStateToProps)(PublicRoute);
