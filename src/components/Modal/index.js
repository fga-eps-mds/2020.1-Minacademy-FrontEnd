import React from 'react';
import Button from '../Button';
import './style.scss'

function Modal({ id='modal', onClose = () => {}, onConfirm = () => {}, title, closeMessage, confirmMessage, children }) {

  const handleOutsideClick = event => {
    if (event.target.id === id) onClose()
  }

  return (
    <div id={id} className="custom-modal" onClick={handleOutsideClick}>
      <div className="custom-modal__container">
        <div className="content">
          <h3 className="content--title">{title}!</h3>
          <span>{children}</span>
        </div>
        <div className="buttons">
          <Button onClick={onClose} inverted shadow>{closeMessage}</Button>
          {confirmMessage ? <Button onClick={onConfirm} inverted shadow>{confirmMessage}</Button> : null}
        </div>
      </div>
    </div>
  );
};

export default Modal;
