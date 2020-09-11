import React, { Children } from 'react';
import './style.css';


function Button({children}) {
    return (
        <button className="button">
            {children}
        </button>
    );
}


export default Button;