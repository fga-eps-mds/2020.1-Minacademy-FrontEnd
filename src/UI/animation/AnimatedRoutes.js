import React from 'react'
import PropTypes from 'prop-types';
import { AnimatePresence } from 'framer-motion'
import { Switch, useLocation } from 'react-router-dom'

const AnimatedRoutes = ({
  children,
  exitBeforeEnter = true,
  initial = false,
}) => {
  const location = useLocation()
  return (
    <AnimatePresence exitBeforeEnter={exitBeforeEnter} initial={initial}>
      <Switch location={location} key={location.pathname.split('/')[1]}>
        {children}
      </Switch>
    </AnimatePresence>
  )
}

AnimatedRoutes.propTypes = {
  children: PropTypes.element.isRequired,
  exitBeforeEnter: PropTypes.bool.isRequired,
  initial: PropTypes.bool.isRequired,
};

export default AnimatedRoutes