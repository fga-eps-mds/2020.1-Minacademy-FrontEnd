import React from 'react';
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
      >
    </div>
  </div>
)

export default Loader