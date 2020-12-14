import React from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import Button from '../Button';
import { selectModalHidden } from '../../slices/modalSlice'
import './style.scss'
import MotionDiv from '../../UI/animation/MotionDiv';

function Modal({ id='modal', onClose = () => {}, onConfirm = () => {}, title, closeMessage, confirmMessage, children, hidden, ...otherProps }) {

  const handleOutsideClick = event => {
    if (event.target.id === id) onClose()
  }

  return (
    hidden
    ? null
    :
    <div id={id} className="custom-modal" onClick={handleOutsideClick} {...otherProps}>
      <MotionDiv className="custom-modal__container"
        transition={{
            type: 'tween',
            ease: 'easeIn',
            // transition: 'linear',
            duration: 0.4,
          }}
          variants={{
            initial: {
              opacity: 0,
              // x: '100vh',
              // scale: 1,
            },
            in: {
              opacity: 1,
              // x: 0,
              // scale: 1,
            },
            out: {
              opacity: 0,
              x: '-35vh',
              scale: 0.3,
            },
          }}
      >
        <div className="content">
          <h2 className="content--title">{title}</h2>
          <span>{children}</span>
        </div>
        <div className="buttons">
          <Button onClick={onClose} inverted shadow>{closeMessage}</Button>
          {confirmMessage ? <Button onClick={onConfirm} inverted shadow>{confirmMessage}</Button> : null}
        </div>
      </MotionDiv>
    </div>
  );
}

Modal.defaultProps = {
  onConfirm: false,
  confirmMessage: "",
  id: "modal"
};

Modal.propTypes = {
  id: PropTypes.string,
  hidden: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  closeMessage: PropTypes.string.isRequired,
  onClose: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]).isRequired,
  confirmMessage: PropTypes.string,
  onConfirm: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

const mapStateToProps = state => ({
  hidden: selectModalHidden(state)
});

export default connect(mapStateToProps)(Modal);
