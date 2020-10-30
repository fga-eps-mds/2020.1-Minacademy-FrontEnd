import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink, useRouteMatch } from 'react-router-dom';
import { selectQuestionsList, selectCurrentModule, selectQuestionsResults } from '../../../../slices/tutorialSlice';
import { getQuestions } from '../../../../services/tutorialServices';
import './style.scss';

/* eslint-disable no-shadow */
function ActivitiesList({ exam = false, questionsList, questionsResults, currentModule, getQuestions }) {
  const match = useRouteMatch();

  useEffect(() => {
    if (exam) {
      getQuestions({ exam })
    }
    else  {
      getQuestions({ moduleNumber: currentModule })
    };
  }, [currentModule]);

  const result = activity => questionsResults.find(result => result.question === activity._id)?.isCorrect

  return (
    <div className="activities-list">
      <div className="activities-list__header">
        <div>
          {match.path.includes('avaliacao') && <h3>Questões</h3>}
          {match.path.includes('tutorial') && (
            <>
            <h3>Forum</h3>
            <p> Modulo <b>{currentModule}</b> </p>
            </>
            )}
        </div>
      </div>
      <div className="activities-list__list">
        {questionsList.map(activity => (
          <NavLink
            key={activity._id}
            className={`
            activities-list__list-item
            ${(result(activity) === false) && !exam ? 'wrong':''}
            ${result(activity) && !exam ? 'correct':''}
            ${(result(activity) !== undefined) && exam ? 'answer':''}
          `}
            to={`${match.path}/atividades/${activity.number}`}
            isActive={(match, location) => {
              const param = location.pathname.split('/')
              return param[param.length - 1] === activity.number.toString()
            }}
          >
            Atividade {activity.number}
          </NavLink>
        ))}
      </div>
    </div>
  );
}

ActivitiesList.defaultProps = {
  questionsResults: [],
  exam: false
}

ActivitiesList.propTypes = {
  questionsList: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])).isRequired,
  questionsResults: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])),
  currentModule: PropTypes.number.isRequired,
  getQuestions: PropTypes.func.isRequired,
  exam: PropTypes.bool,
};

const mapStateToProps = state => ({
  questionsList: selectQuestionsList(state),
  currentModule: selectCurrentModule(state),
  questionsResults: selectQuestionsResults(state),
});

const mapDispatchToProps = dispatch => ({
  getQuestions: moduleNumber => dispatch(getQuestions(moduleNumber)),
});

export default (connect(mapStateToProps, mapDispatchToProps)(ActivitiesList));
