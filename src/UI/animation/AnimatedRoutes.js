import React from 'react'
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

export default AnimatedRoutes