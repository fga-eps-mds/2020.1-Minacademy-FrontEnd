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
import { getMentor, promoteToMentor } from '../../services/learnersService';
import Card from '../../components/Card';
import Modal from '../../components/Modal';
import './style.scss';
import { toggleModalVisible } from '../../slices/modalSlice';

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
    getModules();
    
    getProgress({ moduleNumber: currentModule }).then((data) => {
      if (data.payload.totalProgress === 100) setLearnerCertificate(true);
    });
    getQuestions({ moduleNumber: currentModule });
  }, []);

  if (currentUser.userType === "Learner" && currentUser.courseCertificates.length){
    toggleModalVisible();
  }

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
              secondaryContent="Você reberá um certificado assim que um de seus aprendizes concluirem o tutorial"
              linkText="Visualizar certificados"
              linkPath="/certificados"
            />
          </div>
        ) : (
          <div className="dashboard__body">
            <Card
              title="Mentoria"
              mainContent="Você ainda não está validado como mentor na plataforma. Faça a avaliação para ter acesso a todas as funcionalidades de monitoria"
              linkText="Faça aqui sua avaliação!"
              linkPath="/mentoria"
            />
            <Card
              title="Tutorial"
              mainContent="Aqui você pode conhecer o tutorial que poderá lecionar se for validado."
              secondaryContent="Se for validado, você poderá dar suporte para os aprendizes da platorma, por isso é importante conhecer bem o tutorial."
              linkText="Tutorial"
              linkPath="/tutorial"
            />
          </div>
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
          <p>Se você quiser, pode ficar disponível a um aprendiz na página de mentoria.</p>
        </Modal>
      </div>
    </>
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
  mentor: PropTypes.oneOfType([PropTypes.object]),
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
  toggleModalVisible: () => dispatch(toggleModalVisible()),
  promoteToMentor: () => dispatch(promoteToMentor()),
});

export default connect(mapStateToProps, mapDispatchToProps, null, { pure: true })(Dashboard);