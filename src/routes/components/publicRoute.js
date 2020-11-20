import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { selectCurrentUser } from '../../slices/usersSlice';
import MotionDiv from '../../UI/animation/MotionDiv';

const smoothRedirect = {
  transition: {
    type: 'tween',
    ease: 'anticipate',
    // transition: 'linear',
    duration: 0.1,
  },
  variants: {
    initial: {
      opacity: 0,
    },
    in: {
      opacity: 1,
    },
    out: {
      opacity: 0,
    },
  },
};

const PublicRoute = ({
  currentUser,
  children,
  exact,
  path,
  dispatch,
  ...otherProps
}) => {
  return (
    <Route exact={exact} path={path} {...otherProps}>
      {currentUser ? (            // eslint-disable-line no-nested-ternary
        otherProps.location.pathname === '/login' ? (
          <MotionDiv
            variants={smoothRedirect.variants}
            transition={smoothRedirect.transition}
          >
            <Redirect push to="/dashboard" />
          </MotionDiv>
        ) : (
          <MotionDiv
            variants={smoothRedirect.variants}
            transition={smoothRedirect.transition}
          >
            <Redirect push to="/bem-vindo" />
          </MotionDiv>
        )
      ) : (
        children
      )}
    </Route>
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
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state),
  dispatch: PropTypes.func.isRequired,
});

export default connect(mapStateToProps)(PublicRoute);
