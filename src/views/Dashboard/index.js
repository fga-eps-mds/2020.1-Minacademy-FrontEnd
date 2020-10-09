import React, { useEffect, useMemo } from 'react';
import '../../index.css';
import './style.scss';
import { selectCurrentModule } from '../../slices/tutorialSlice';
import { selectCurrentUser } from '../../slices/usersSlice';
import { connect } from 'react-redux';
import { selectModule, selectQuestionsList, selectQuestionsResults } from '../../slices/tutorialSlice';
import { getModules, getProgress, getQuestions } from '../../services/tutorialServices';

function Dashboard({ currentUser, currentModule, getModules, getQuestions, moduleQuestions, getProgress, questionResults, module }) {
  const progress = useMemo(() => {
    const correctAnswers = questionResults.filter(question => question.isCorrect).length
    const totalQuestions = moduleQuestions.length
    return totalQuestions ? { 
      moduleProgress: Math.floor((correctAnswers / totalQuestions)*100),
      remainingQuestions: totalQuestions - correctAnswers
    } : 
    {}
  }, [questionResults])

  useEffect(() => {
    getModules()
    getProgress(currentModule)
    getQuestions(currentModule)
  }, []);

  return (
    <>
      <div className="dashboard">
        <div className="dashboard__header">
          <h1>Olá, {currentUser.name}</h1>
          <p>Aqui você pode acompanhar seu progresso, contatar um mentor ou mentora e acessar seus certificados.</p>
        </div>
        <div className="dashboard__body">
          <div className="dashboard__body--card">
            <p className="dashboard__body--card-title"> Módulo {currentModule}: {module?.title}</p>
            <p className="dashboard__body--card-content emphasis">{ progress?.moduleProgress || 0}% Completo</p>
            {progress?.remainingQuestions ? 
              <p className="dashboard__body--card-content">{progress?.remainingQuestions} atividades restantes</p>
              :
              <p className="dashboard__body--card-content">Módulo concluido</p>
            }
            <a className="dashboard__body--card-link" href="/tutorial">continuar tutorial</a>
          </div>
          <div className="dashboard__body--card">
            <p className="dashboard__body--card-title"> certificados</p>
            <p className="dashboard__body--card-content-emphasis">
              Certificado de conclusão do tutorial <span>básico</span>
            </p>
            <a className="dashboard__body--card-link" href="exemplo">acessar certificados</a>
          </div>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state),
  currentModule: selectCurrentModule(state),
  module: selectModule(state),
  questionResults: selectQuestionsResults(state),
  moduleQuestions: selectQuestionsList(state)
});

const mapDispatchToProps = dispatch => ({
  getModules: () => dispatch(getModules()),
  getProgress: (module) => dispatch(getProgress(module)),
  getQuestions: (module) => dispatch(getQuestions(module))
});
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
