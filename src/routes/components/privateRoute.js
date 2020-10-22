import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { selectCurrentUser } from '../../slices/usersSlice';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export const PrivateRoute = ({
  currentUser,
  component: Component,
  ...rest
}) => (
  <>
    <Header />
    <Route
      {...rest}
      component={(props) =>
        currentUser ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
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

export default connect(mapStateToProps)(PrivateRoute);
