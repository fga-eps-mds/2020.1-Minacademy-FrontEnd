import React from 'react';
import PropTypes from 'prop-types';
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
          <h3 className="content--title">{title}</h3>
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

Modal.defaultProps = {
  onConfirm: false,
  confirmMessage: ""
}

Modal.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  closeMessage: PropTypes.string.isRequired,
  onClose: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]).isRequired,
  confirmMessage: PropTypes.string,
  onConfirm: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
  children: PropTypes.element.isRequired
};

export default Modal;
