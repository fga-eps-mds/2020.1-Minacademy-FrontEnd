import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { selectCurrentUser } from '../../slices/usersSlice';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export const PrivateRoute = ({
  currentUser,
  children,
  exact,
  path,
}) => (
  <>
  <Header />
    <Route
      exact={exact}
      path={path}
    >
    {currentUser ? <div className="animation">{children}</div> : <Redirect to="/login" />}
    </Route>
  <Footer />
  </>
);

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state),
});

PrivateRoute.defaultProps = {
  currentUser: null,
};

PrivateRoute.propTypes = {
  currentUser: PropTypes.oneOfType([PropTypes.oneOf([null]), PropTypes.object]),
  component: PropTypes.elementType.isRequired,
};

export default connect(mapStateToProps, null, null, { pure: true })(PrivateRoute);
