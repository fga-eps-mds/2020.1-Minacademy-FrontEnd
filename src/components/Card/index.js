import React from 'react';
import './style.scss';
import {Link} from 'react-router-dom'

function Card({ title, mainContent, secodaryContent, linkText, linkPath }) {
  return (
    <div className="card">
      <p className="card-title"> {title}</p>
      <p className="card-content emphasis">{mainContent}</p>
      <p className="card-content">{secodaryContent}</p>
      <Link className="card-link" to={linkPath}>{linkText}</Link>
    </div>
  );
}


export default Card;