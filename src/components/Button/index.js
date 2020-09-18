import React from 'react';
import './style.scss';


function Button({ children, inverted, shadow, small, color, ...otherProps }) {
    return (
        <button className={`
        ${inverted ? 'inverted' : ''}
        ${shadow ? 'shadow' : ''}
        ${small ? 'small' : ''}
        ${color ? 'color' : ''}
         button`}
<<<<<<< HEAD
         {...otherProps}
=======
            {...otherProps}
>>>>>>> implementacao dos campos do formulario
        >
            {children}
        </button>
    );
}


export default Button;