import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { selectCurrentUser } from '../../slices/usersSlice';

const PrivateRoute = ({ currentUser, children, exact, path }) => (
  <>
    <Route exact={exact} path={path}>
      {currentUser ? (
        <div className="animation">{children}</div>
      ) : (
        <Redirect to="/login" />
      )}
    </Route>
  </>
);

PrivateRoute.defaultProps = {
  currentUser: null,
  exact: false
};

PrivateRoute.propTypes = {
  currentUser: PropTypes.oneOfType([PropTypes.oneOf([null]), PropTypes.object]),
  children: PropTypes.elementType.isRequired,
  exact: PropTypes.bool,
  path: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state),
});

export default connect(mapStateToProps, null, null, { pure: true })(
  PrivateRoute
);
