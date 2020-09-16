import React, { Children } from 'react';
import './style.css';


function Button({ children, ...otherProps }) {
    return (
        <button className="button" {...otherProps}>
            {children}
        </button>
    );
}


export default Button;
