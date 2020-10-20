import React from 'react';
import PropTypes from 'prop-types'
import './style.scss'

const Loader = ({ children, big }) => (
  <div  className="loader">
    <span className="loader__text">{children}</span>
    <div 
      className={
        `
        loader__dual-ring
        ${big ? 'big' : ''}
        `
      }
       />
  </div>
)

Loader.defaultProps = {
  children: '',
  big: false
};

Loader.propTypes = {
  children: PropTypes.string,
  big: PropTypes.bool
};

export default Loader