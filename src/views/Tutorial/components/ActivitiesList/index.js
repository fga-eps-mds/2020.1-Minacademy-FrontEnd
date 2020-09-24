import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { Link, useRouteMatch } from 'react-router-dom';
import { selectActivitiesList, selectCurrentModule } from '../../../../slices/tutorialSlice';
import { getQuestions } from '../../../../services/modulesServices';
import './style.scss';

function ActivitiesList({ activitiesList, currentModule, getQuestions }) {
  const match = useRouteMatch();

  useEffect(() => {
    getQuestions(currentModule)
  }, [currentModule]);


  return (
  <div className="activities-list">
    <div className="activities-list__header">
      <div>
        <h3>Forum</h3>
      </div>
    </div>
    <div className="activities-list__list">
    {activitiesList.map((activity) => (
      <p key={activity._id}>
        <Link to={`${match.path}/atividades/${activity.number}`}>Atividade {activity.number}</Link>
      </p>
      ))}
    </div>
  </div>
  );
}

const mapStateToProps = state => ({
  activitiesList: selectActivitiesList(state),
  currentModule: selectCurrentModule(state)
})

const mapDispatchToProps = dispatch => ({
  getQuestions: (moduleNumber) => dispatch(getQuestions(moduleNumber))
})

export default connect(mapStateToProps, mapDispatchToProps)(ActivitiesList);