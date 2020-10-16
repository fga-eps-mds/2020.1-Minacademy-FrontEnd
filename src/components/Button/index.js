import React from 'react';
import './style.scss';


function Button({ children, inverted, shadow , small, color, success, error,...otherProps }) {
    return (
        <button className={`
        ${inverted ? 'inverted' : ''}
        ${shadow ? 'thin-shadow' : ''}
        ${small ? 'small' : ''}
        ${color ? 'color' : ''}
        ${success ? 'success' : ''}
        ${error ? 'error' : ''}
         button`}
            {...otherProps}
        >
            {children}
        </button>
    );
}


export default Button;