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
import { toggleModalVisible } from '../../slices/modalSlice';
import { getMentor, promoteToMentor } from '../../services/learnersService';
import { getLearners } from '../../services/mentorsService';
import Card from '../../components/Card';
import Modal from '../../components/Modal';
import MotionDiv from '../../UI/animation/MotionDiv';
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
  getLearners,
  toggleModalVisible,
  promoteToMentor
}) {
  const progress = useMemo(() => {
    const questions = moduleQuestions.map(question => question._id);
    const correctAnswers = questionResults.filter(
      (result) => result.isCorrect && questions.includes(result.question)
    ).length;
    const totalQuestions = questions.length;
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
    getLearners();
    getModules();

    getProgress({ moduleNumber: currentModule }).then((data) => {
      if (data.payload.totalProgress === 100) setLearnerCertificate(true);
    });
    getQuestions({ moduleNumber: currentModule });
  }, []);

  if (currentUser.userType === "Learner" && learnerCertificate){
    toggleModalVisible();
  }

  /* eslint-disable no-nested-ternary */
  return (
      <div className="dashboard">
        <div className="dashboard__header">
          <h1>Olá, {currentUser.name}</h1>
          {currentUser.userType === 'Learner' && (
            <p>
              Aqui você pode acompanhar seu progresso, solicitar suporte a mentoria 
              e acessar seus certificados.
            </p>
          )}
        </div>
        {currentUser.userType === 'Learner' ? (
          <MotionDiv
            className="dashboard__body"
          >
            <Card
              title={`Módulo ${currentModule}: ${module?.title}`}
              mainContent={`${progress?.moduleProgress || 0}% Completo`}
              secondaryContent={
                progress?.remainingQuestions === 1
                  ? `${progress?.remainingQuestions} atividade restante.`
                  : progress?.remainingQuestions
                    ? `${progress?.remainingQuestions} atividades restantes.`
                    : 'Módulo concluído.'
              }
              linkText="atividades restantes."
              linkPath="/tutorial"
            />
            <Card
              title="certificados"
              mainContent="Certificado de conclusão do tutorial básico."
              linkText={
                learnerCertificate
                  ? 'Visualizar certificado.'
                  : 'Conclua as atividades do tutorial para ter acesso ao certificado.'
              }
              linkPath={learnerCertificate ? `/certificados` : '/tutorial'}
            />
            <Card
              title="mentoria"
              mainContent={
                mentor
                  ? mentor.gender === "Female" ? (`Sua Mentora: ${mentor?.name} ${mentor?.lastname}.`) : (`Seu Mentor: ${mentor?.name} ${mentor?.lastname}.`)
                  : 'Ainda não lhe foi designado nenhum mentor.'
              }
              secondaryContent={
                currentUser.mentor_request &&
                !mentor &&
                'Você receberá um mentor assim que houver um disponível.'
              }
              linkText={
                mentor || currentUser.mentor_request
                  ? 'Mentoria.'
                  : 'Solicitar mentor.'
              }
              linkPath="/mentoria"
            />
          </MotionDiv>
        ) : currentUser.isValidated ? (
          <MotionDiv className="dashboard__body">
            <Card
              title="Mentoria"
              mainContent="Veja as suas aprendizes ou procure por novas."
              linkText="acessar mentoria."
              linkPath="/mentoria"
            />
            <Card
              title="certificados"
              mainContent="Certificado de mentorias"
              secondaryContent="Você receberá um certificado assim que uma de suas aprendizes concluírem o tutorial."
              linkText="visualizar certificados."
              linkPath="/certificados"
            />
          </MotionDiv>
        ) : currentUser.gender === "Female" ? (
          <div className="dashboard__body">
            <Card
              title="Mentoria"
              mainContent="Você ainda não está validada como mentora na plataforma. Faça a avaliação para ter acesso a todas as funcionalidades de mentoria."
              linkText="faça aqui sua avaliação!"
              linkPath="/mentoria"
            />
            <Card
              title="Tutorial"
              mainContent="Aqui você pode conhecer o tutorial que poderá lecionar se for validada."
              secondaryContent="Se for validada, você poderá dar suporte para as aprendizes da plataforma, por isso é importante conhecer bem o tutorial."
              linkText="tutorial."
              linkPath="/tutorial"
            />
          </div>
        ) : (
          <MotionDiv className="dashboard__body">
            <Card
              title="Mentoria"
              mainContent="Você ainda não está validado como mentor na plataforma. Faça a avaliação para ter acesso a todas as funcionalidades de mentoria."
              linkText="faça aqui sua avaliação!"
              linkPath="/mentoria"
            />
            <Card
              title="Tutorial"
              mainContent="Aqui você pode conhecer o tutorial que poderá lecionar se for validado."
              secondaryContent="Se for validado, você poderá dar suporte para as aprendizes da plataforma, por isso é importante conhecer bem o tutorial."
              linkText="tutorial."
              linkPath="/tutorial"
            />
          </MotionDiv>
        )}
        <Modal
            title='Parabéns'
            confirmMessage='Ok'
            onConfirm={() => {
              toggleModalVisible()
              promoteToMentor()
            }}
            closeMessage='Fechar'
            onClose={() => {
              toggleModalVisible()
              promoteToMentor()
            }}
        >
          <p>Agora que você terminou o tutorial, foi promovida a mentora!</p>
          <p>Se você quiser, pode ficar disponível a uma aprendiz na página de mentoria.</p>
        </Modal>
      </div>
  );
}

Dashboard.defaultProps = {
  moduleQuestions: [],
  questionResults: [],
  mentor: null
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
  getLearners: PropTypes.func.isRequired,
  mentor: PropTypes.oneOfType([PropTypes.object]),
  toggleModalVisible: PropTypes.func.isRequired,
  promoteToMentor: PropTypes.func.isRequired,
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
  getLearners: () => dispatch(getLearners()),
  toggleModalVisible: () => dispatch(toggleModalVisible()),
  promoteToMentor: () => dispatch(promoteToMentor()),
});

export default connect(mapStateToProps, mapDispatchToProps, null, { pure: true })(Dashboard);