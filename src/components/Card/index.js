import React from 'react';
import './style.scss';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';


function Card({ title, mainContent, secondaryContent, linkText, linkPath, deleteAction, ...otherProps }) {
  return (
    <div className="card" {...otherProps}>
      {deleteAction &&  <button type="button" className="card-delete" onClick={deleteAction}>X</button>}
      <p className="card-title">{title}</p>
      <p className="card-content emphasis">{mainContent}</p>
      <p className="card-content">{secondaryContent}</p>
      {linkText &&
        <Link className="card-link" to={linkPath}>{linkText}</Link>
      }
    </div>
  );
}

Card.defaultProps = {
  secondaryContent: "",
  linkText: "",
  linkPath: "",
  deleteAction: false,
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  mainContent: PropTypes.string.isRequired,
  secondaryContent: PropTypes.string,
  linkText: PropTypes.string,
  linkPath: PropTypes.string,
  deleteAction: PropTypes.oneOfType([PropTypes.bool, PropTypes.func])
};



export default Card;