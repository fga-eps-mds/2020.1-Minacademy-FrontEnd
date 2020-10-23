import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  selectCurrentModule,
  selectModule,
  selectQuestionsList,
  selectQuestionsResults,
} from '../../slices/tutorialSlice';
import {
  getModules,
  getProgress,
  getQuestions,
} from '../../services/tutorialServices';
import { selectCurrentUser } from '../../slices/usersSlice';
import { selectMentor } from '../../slices/learnerSlice';
import { getMentor } from '../../services/learnersService';
import Card from '../../components/Card';
import './style.scss';

/* eslint-disable no-shadow */
function Dashboard({
  currentUser,
  currentModule,
  getModules,
  getQuestions,
  moduleQuestions,
  getProgress,
  questionResults,
  module,
  mentor,
  getMentor,
}) {
  const progress = useMemo(() => {
    const correctAnswers = questionResults.filter(
      (question) => question.isCorrect
    ).length;
    const totalQuestions = moduleQuestions.length;
    return totalQuestions
      ? {
          moduleProgress: Math.floor((correctAnswers / totalQuestions) * 100),
          remainingQuestions: totalQuestions - correctAnswers,
        }
      : {};
  }, [questionResults]);

  const [learnerCertificate, setLearnerCertificate] = useState(false);
  useEffect(() => {
    getMentor();
    getModules();

    getProgress(currentModule).then((data) => {
      if (data.payload.totalProgress === 100) setLearnerCertificate(true);
    });
    getQuestions(currentModule);
  }, []);

  /* eslint-disable no-nested-ternary */
  return (
    <>
      <div className="dashboard">
        <div className="dashboard__header">
          <h1>Olá, {currentUser.name}</h1>
          {currentUser.userType === 'Learner' && (
            <p>
              Aqui você pode acompanhar seu progresso, contatar um mentor ou
              mentora e acessar seus certificados.
            </p>
          )}
        </div>
        {currentUser.userType === 'Learner' ? (
          <div className="dashboard__body">
            <Card
              title={`Módulo ${currentModule}: ${module?.title}`}
              mainContent={`${progress?.moduleProgress || 0}% Completo`}
              secondaryContent={
                progress?.remainingQuestions
                  ? `${progress?.remainingQuestions} atividades restantes`
                  : 'Módulo concluido'
              }
              linkText="atividades restantes"
              linkPath="/tutorial"
            />

            <Card
              title="certificados"
              mainContent="Certificado de conclusão do tutorial básico"
              linkText={
                learnerCertificate
                  ? 'Visualizar certificado'
                  : 'Conclua o tutorial para acessar o certificado'
              }
              linkPath={learnerCertificate ? `/certificados` : '/tutorial'}
            />
            <Card
              title="mentoria"
              mainContent={
                mentor
                  ? `Seu Mentor: ${mentor?.name} ${mentor?.lastname}`
                  : 'Ainda não lhe foi designado nenhum mentor'
              }
              secondaryContent={
                currentUser.mentor_request &&
                !mentor &&
                'Você receberá um mentor assim que houver um disponível'
              }
              linkText={
                mentor || currentUser.mentor_request
                  ? 'Monitoria'
                  : 'Solicitar mentor'
              }
              linkPath="/mentoria"
            />
          </div>
        ) : currentUser.isValidated ? (
          <div className="dashboard__body">
            <Card
              title="Mentoria"
              mainContent="Veja os seus aprendizes, ou procure por novos"
              linkText="acesse a mentoria."
              linkPath="/mentoria"
            />
            <Card
              title="certificados"
              mainContent="Certificado de mentorias"
              linkText="Visualizar certificados"
              linkPath="/certificados"
            />
          </div>
        ) : (
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
              secondaryContent="Se for validado, você poderá dar suporte para os aprendizes da platorma, por isso é importante conhecer bem o tutorial."
              linkText="Tutorial"
              linkPath="/tutorial"
            />
          </div>
        )}
      </div>
    </>
  );
}

Dashboard.defaultProps = {
  moduleQuestions: [],
  questionResults: [],
};

Dashboard.propTypes = {
  currentUser: PropTypes.oneOfType([PropTypes.oneOf([null]), PropTypes.object])
    .isRequired,
  currentModule: PropTypes.number.isRequired,
  getModules: PropTypes.func.isRequired,
  getQuestions: PropTypes.func.isRequired,
  moduleQuestions: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])),
  getProgress: PropTypes.func.isRequired,
  questionResults: PropTypes.arrayOf(PropTypes.object),
  module: PropTypes.shape({
    title: PropTypes.string,
  }).isRequired,
  getMentor: PropTypes.func.isRequired,
  mentor: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state),
  currentModule: selectCurrentModule(state),
  module: selectModule(state),
  questionResults: selectQuestionsResults(state),
  moduleQuestions: selectQuestionsList(state),
  mentor: selectMentor(state),
});

const mapDispatchToProps = (dispatch) => ({
  getModules: () => dispatch(getModules()),
  getProgress: (module) => dispatch(getProgress(module)),
  getQuestions: (module) => dispatch(getQuestions(module)),
  getMentor: () => dispatch(getMentor()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
