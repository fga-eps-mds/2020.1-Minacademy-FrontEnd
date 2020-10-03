import React from 'react';
import './style.scss';


function Button({ children, inverted, shadow , small, color, ...otherProps }) {
    return (
        <button className={`
        ${inverted ? 'inverted' : ''}
        ${shadow ? 'thin-shadow' : ''}
        ${small ? 'small' : ''}
        ${color ? 'color' : ''}
         button`}
            {...otherProps}
        >
            {children}
        </button>
    );
}


export default Button;