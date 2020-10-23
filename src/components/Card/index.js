import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Button from '../Button';
import './style.scss';

function Card({ title, mainContent, secondaryContent, linkText, linkPath, deleteAction, deleteActionMessage, deleteCard, ...otherProps }) {
  /* eslint-disable jsx-a11y/control-has-associated-label */
  return (
    <div className="custom-card" {...otherProps}>
      <div className="custom-card__delete">
        {deleteCard && <button type="button" className="delete-button" onClick={deleteCard} />}
      </div>
      <p className="custom-card__title">{title}</p>
      <p className="custom-card__content emphasis">{mainContent}</p>
      <p className="custom-card__content">{secondaryContent}</p>
      {linkText &&
        <Link className="custom-card__link" to={linkPath}>{linkText}</Link>
      }
      <div className="custom-card__action">
        {deleteAction &&
          <Button small error onClick={deleteAction}>{deleteActionMessage}</Button>
        }
      </div>
    </div>
  );
}

Card.defaultProps = {
  secondaryContent: "",
  linkText: "",
  linkPath: "",
  deleteAction: false,
  deleteActionMessage: "",
  deleteCard: false
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  mainContent: PropTypes.string.isRequired,
  secondaryContent: PropTypes.string,
  linkText: PropTypes.string,
  linkPath: PropTypes.string,
  deleteAction: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
  deleteActionMessage: PropTypes.string,
  deleteCard:  PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
};

export default Card;