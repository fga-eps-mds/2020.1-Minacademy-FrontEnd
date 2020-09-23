import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { Link, useRouteMatch } from 'react-router-dom';
import { selectActivitiesList } from '../../../../slices/tutorialSlice'
import './style.scss';

function ActivitiesList({ activitiesList }) {
  const match = useRouteMatch();

  return (
  <div className="activities-list">
    <div className="activities-list__header">
      <div>
        <h3>Forum</h3>
      </div>
    </div>
    <div className="activities-list__list">
    {activitiesList.map((activity) => (
      <p key={activity.number}>
        <Link to={`${match.path}/atividades/${activity.number}`}>Atividade</Link>
      </p>
      ))}
    </div>
  </div>
  );
}

const mapStateToProps = state => ({
  activitiesList: selectActivitiesList(state)
})

export default connect(mapStateToProps)(ActivitiesList);