import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Redirect, useLocation } from 'react-router-dom';
import { selectCurrentUser } from '../../slices/usersSlice';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export const PublicRoute = ({ currentUser, component: Component, ...rest }) => {
  const location = useLocation();
  return (
    <>
      <Header />
      <Route
        {...rest}
        component={(props) =>
          currentUser ? ( // eslint-disable-line no-nested-ternary
            location.pathname === '/login' ? (
              <Redirect to="/dashboard" />
            ) : (
              <Redirect to="/bem-vindo" />
            )
          ) : (
            <Component {...props} />
          )
        }
      />
      <Footer />
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
