import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, useRouteMatch } from 'react-router-dom';
import { selectActivitiesList, selectCurrentModule, selectActivitiesResults } from '../../../../slices/tutorialSlice';
import { getQuestions, getQuestionsResults } from '../../../../services/tutorialServices';
import './style.scss';

function ActivitiesList({ activitiesList, activitiesResults, currentModule, getQuestions, getQuestionsResults }) {
  const match = useRouteMatch();

  useEffect(() => {
    getQuestionsResults()
  }, [])

  useEffect(() => {
    getQuestions(currentModule);
  }, [currentModule]);

  return (
    <div className="activities-list">
      <div className="activities-list__header">
        <div>
          <h3>Forum</h3>
          <p>
            Modulo <b>{currentModule}</b>
          </p>
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
  currentModule: selectCurrentModule(state),
  activitiesResults: selectActivitiesResults(state)
});

const mapDispatchToProps = dispatch => ({
  getQuestions: moduleNumber => dispatch(getQuestions(moduleNumber)),
  getQuestionsResults: () => dispatch(getQuestionsResults())
});

export default connect(mapStateToProps, mapDispatchToProps)(ActivitiesList);
