import React from 'react';
import './style.scss';
import PropTypes from 'prop-types'


function Button({ children, inverted, shadow , small, color, success, error, ...otherProps }) {
    return (
        /* eslint-disable react/button-has-type */
        <button className={`
        ${inverted ? 'inverted' : ''}
        ${shadow ? 'thin-shadow' : ''}
        ${small ? 'small' : ''}
        ${color ? 'color' : ''}
        ${success ? 'success' : ''}
        ${error ? 'error' : ''}
         custom-button`}
            {...otherProps}
        >
            {children}
        </button>
    );
}

Button.defaultProps = {
    inverted: false,
    shadow: false,
    small: false,
    color: false,
    success: false,
    error: false,
};

Button.propTypes = {
    children: PropTypes.string.isRequired,
    inverted: PropTypes.bool,
    shadow: PropTypes.bool,
    small: PropTypes.bool,
    color: PropTypes.bool,
    success: PropTypes.bool,
    error: PropTypes.bool,
};

export default Button;