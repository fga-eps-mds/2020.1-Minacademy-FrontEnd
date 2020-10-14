import React, { useEffect, useMemo } from 'react';
import Card from '../../components/Card';
import '../../index.css';
import './style.scss';
import { connect } from 'react-redux';
import { selectCurrentModule, selectModule, selectQuestionsList, selectQuestionsResults } from '../../slices/tutorialSlice';
import { selectCurrentUser } from '../../slices/usersSlice';
import {mentorRequest} from '../../services/learnersService'

import { getModules, getProgress, getQuestions } from '../../services/tutorialServices';

function Dashboard({ currentUser, currentModule, getModules, getQuestions, moduleQuestions, getProgress, questionResults, module }) {
  const progress = useMemo(() => {
    const correctAnswers = questionResults.filter(question => question.isCorrect).length
    const totalQuestions = moduleQuestions.length
    return totalQuestions ? {
      moduleProgress: Math.floor((correctAnswers / totalQuestions) * 100),
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
          {currentUser.userType == "Learner" && <p>Aqui você pode acompanhar seu progresso, contatar um mentor ou mentora e acessar seus certificados.</p>}
        </div>
        {currentUser.userType == "Learner" ? <div className="dashboard__body">
          <Card
            title={`Módulo ${currentModule}: ${module?.title}`}
            mainContent={`${progress?.moduleProgress || 0}% Completo`}
            secodaryContent={progress?.remainingQuestions ? `${progress?.remainingQuestions} atividades restantes` : 'Módulo concluido'}
            linkText="atividades restantes"
            linkPath="/tutorial"
          />
          <Card title="certificados"
            mainContent="Certificado de conclusão do tutorial básico"
            linkText="Visualizar certificados"
            linkPath="/certificados"
          />
          <Card title="mentoria"
            mainContent={'Ainda não lhe foi designado nenhum mentor'}
            linkText="Solicitar mentor"
            linkPath='/mentoria'
          />
        </div>:
        
        currentUser.isValidated ?
        <div className="dashboard__body">
          <Card
            title="Mentoria"
            mainContent="Veja os seus aprendizes, ou procure por novos"
            linkText="acesse a mentoria."
            linkPath="/mentoria"
          />
          <Card title="certificados"
            mainContent="Certificado de mentorias"
            linkText="Vizualizar certificados"
            linkPath="/certificados"
          />
        </div> :
        
        <div className="dashboard__body">
          <Card
            title="Validação"
            mainContent="Você ainda não está validado como mentor na plataforma, para poder fazer mentoria, primeiro você precisa se validar."
            linkText="Faça aqui sua validação!"
            linkPath="/"
          />
          <Card
            title="Tutorial"
            mainContent="Aqui você conhecer o tutorial que poderá lecionar se for validado."
            secodaryContent="Se for validado, você poderá dar suporte para os aprendizes da platorma, por isso é importante conhecer bem o tutorial."
            linkText="Tutorial"
            linkPath="/tutorial"
          />
        </div>}
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
