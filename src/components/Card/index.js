import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '../Button';
import { ReactComponent as Chat } from '../../assets/images/chat-icon.svg';
import './style.scss';


function Card({
  title,
  mainContent,
  secondaryContent,
  linkText,
  linkPath,
  deleteAction,
  deleteActionMessage,
  icon,
  selectCard = false,
  disabled, /* eslint react/prop-types: 0 */
  defaultChecked = false,
  ...otherProps
}) {
  /* eslint-disable jsx-a11y/label-has-associated-control */
  /* eslint-disable jsx-a11y/control-has-associated-label */
  return (
      <label className={`card-label ${selectCard ? 'selectable' : ''}`} >
        <input type="radio" name="card" disabled={!selectCard} className="card-input-element" defaultChecked={defaultChecked} />
        <div
          className="custom-card"
          {...otherProps}
          onClick={selectCard}
        >
          <div className="custom-card__icon">
            {icon && (
              <Chat className="icon" />
            )}
          </div>
          <p className="custom-card__title">{title}</p>
          <p className="custom-card__content emphasis">{mainContent}</p>
          <p className="custom-card__content">{secondaryContent}</p>
          {linkText && (
            <Link className="custom-card__link" to={linkPath}>
              {linkText}
            </Link>
          )}
          <div className="custom-card__action">
            {deleteAction && (
              <Button small error onClick={deleteAction}>
                {deleteActionMessage}
              </Button>
            )}
          </div>
        </div>
      </label>
  );
}

Card.defaultProps = {
  secondaryContent: '',
  linkText: '',
  linkPath: '',
  deleteAction: false,
  deleteActionMessage: '',
  icon: false,
  selectCard: false,
  defaultChecked: false
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  mainContent: PropTypes.string.isRequired,
  secondaryContent: PropTypes.string,
  linkText: PropTypes.string,
  linkPath: PropTypes.string,
  deleteAction: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
  deleteActionMessage: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
  selectCard: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
  defaultChecked: PropTypes.bool,
};

export default Card;
