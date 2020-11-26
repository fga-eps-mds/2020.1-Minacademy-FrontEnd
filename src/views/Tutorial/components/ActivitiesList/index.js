import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink, useRouteMatch } from 'react-router-dom';
import { selectQuestionsList, selectCurrentModule, selectQuestionsResults, selectModule, isFetchingQuestions as isFetchingQuestionsImport } from '../../../../slices/tutorialSlice';
import { getQuestions as getQuestionsImport } from '../../../../services/tutorialServices';
import { ReactComponent as Book } from '../../../../assets/images/book.svg';
import { ReactComponent as Check } from '../../../../assets/images/checkbox.svg';
import { ReactComponent as Exclamation } from '../../../../assets/images/exclamation.svg';
import Loader from '../../../../components/Loader';
import './style.scss';

/* eslint-disable no-shadow */
function ActivitiesList({ exam = false, questionsList, questionsResults, currentModule, getQuestions, module, isFetchingQuestions }) {
  const {url} = useRouteMatch();

  useEffect(() => {
    if (exam) {
      getQuestions({ exam })
    }
    else  {
      getQuestions({ moduleNumber: currentModule })
    };
  }, [currentModule]);

  const result = activity => questionsResults.find(resultData => resultData.question === activity._id)?.isCorrect

  return (
    <div className="activities-list">
      <div className="activities-list__header">
        <div>
          {url.includes('avaliacao') && <h3>Questões</h3>}
          {url.includes('tutorial') && (
            <>
            {/* <h3>Atividades</h3> */}
            <h3> Módulo {currentModule} </h3>
            <p>{module?.title}</p>
            </>
            )}
        </div>
      </div>
      <div className="activities-list__list">
        <NavLink className="activities-list__list-item answer" exact to="/tutorial">conteúdo</NavLink>
        {isFetchingQuestions
        ? <Loader >Carregando</Loader>
        : questionsList.map(activity => (
          <NavLink
            key={activity._id}
            className={`
            activities-list__list-item
            ${(result(activity) === false) && !exam ? 'wrong':''}
            ${result(activity) && !exam ? 'correct':''}
            ${(result(activity) !== undefined) && exam ? 'answer':''}
          `}
            to={`${url}/atividades/${activity.number}`}
            isActive={(match, location) => {
              const param = location.pathname.split('/')
              return param[param.length - 1] === activity.number.toString()
            }}
          >
            {result(activity) === undefined && <Book className="icon book" />} 
            {result(activity) === false && <Exclamation className="icon exclamation" />} 
            {result(activity) === true && <Check className="icon check" />} 
            Atividade {activity.number}
          </NavLink>
        ))
        }
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
  isFetchingQuestions: PropTypes.bool.isRequired,
  module: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

const mapStateToProps = state => ({
  questionsList: selectQuestionsList(state),
  currentModule: selectCurrentModule(state),
  questionsResults: selectQuestionsResults(state),
  module: selectModule(state),
  isFetchingQuestions: isFetchingQuestionsImport(state)
});

const mapDispatchToProps = dispatch => ({
  getQuestions: moduleNumber => dispatch(getQuestionsImport(moduleNumber)),
});

export default connect(mapStateToProps, mapDispatchToProps, null, { pure: true })(ActivitiesList);
