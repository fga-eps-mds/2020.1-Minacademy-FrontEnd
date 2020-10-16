import React from 'react';
import './style.scss';
import {Link} from 'react-router-dom'

function Card({ title, mainContent, secodaryContent, linkText, linkPath, deleteAction }) {
  return (
    <div className="card">
      {deleteAction &&  <p className="X" onClick={deleteAction}>X</p>}
      <p className="card-title"> {title}</p>
      <p className="card-content emphasis">{mainContent}</p>
      <p className="card-content">{secodaryContent}</p>
      {linkText &&
        <Link className="card-link" to={linkPath}>{linkText}</Link>
      }
    </div>
  );
}


export default Card;