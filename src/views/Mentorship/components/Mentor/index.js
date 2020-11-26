import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Card from '../../../../components/Card';
import {
  getLearners as getLearnersImport,
  assignLearner as assignLearnerImport,
  unassignLearner as unassignLearnerImport,
  changeAvailability as changeAvailabilityImport,
} from '../../../../services/mentorsService';
import {
  selectLearners,
  selectAvailability,
  loading as loadingImport,
  fetchingLearners as fetchingLearnersImport,
  removeLearner as removeLearnerImport,
} from '../../../../slices/mentorSlice';
import { selectCurrentUser } from '../../../../slices/usersSlice';
import { setCurrentChat as setCurrentChatImport } from '../../../../slices/chatSlice'
import Button from '../../../../components/Button';
import Loader from '../../../../components/Loader';
import Modal from '../../../../components/Modal';
import { toggleModalVisible as toggleModalVisibleImport, toggleChatOpen as toggleChatOpenImport } from '../../../../slices/modalSlice';
import './style.scss';
import MotionDiv from '../../../../UI/animation/MotionDiv';

/* eslint-disable no-shadow */
function Mentor({
  getLearners,
  unassignLearner,
  isAvailable,
  changeAvailability,
  assignLearner,
  removeLearner,
  learnersList,
  loading,
  fetchingLearners,
  currentUser,
  toggleModalVisible,
  toggleChatOpen,
  setCurrentChat
}) {
  const [learnerToRemoval, setLearnerToRemoval] = useState();

  useEffect(() => {
    getLearners();
  }, []);

  const unassign = (learner) => {
    toggleModalVisible();
    unassignLearner(learner._id);
    removeLearner(learner._id);
  };

  return (
    <div className="mentor">
      {currentUser.isValidated ? (
        <>
          <div className="mentor__header">
            <span className="mentor__header-title">Clique em um aprendiz para conversar</span>
          </div>
          <MotionDiv className="mentor__content">
            {learnersList.length ? (
              <>
                {fetchingLearners && <Loader big />}
                {learnersList.map((learner) => (
                  <>
                    <Card
                      key={learner._id}
                      title={`${learner.name} ${learner.lastname}`}
                      icon
                      mainContent={learner.email}
                      selectCard={() => {
                        setCurrentChat(learner)
                        toggleChatOpen(true)
                      }}
                      deleteActionMessage="Desvincular"
                      deleteAction={() => {
                        setLearnerToRemoval(learner);
                        toggleModalVisible();
                      }}
                      defaultChecked
                      secondaryContent={`Módulos concluídos: ${learner.completedModules.length}`}
                    />
                  </>
                ))}
              </>
            ) : (
              <>
                {fetchingLearners && <Loader big />}
                {!fetchingLearners && <h3>Você não possui nenhuma aprendiz</h3>}
              </>
            )}
          </MotionDiv>

          <Modal
            title={`Desvincular ${learnerToRemoval?.name}`}
            confirmMessage="desvincular"
            closeMessage="cancelar"
            onClose={() => {
              setLearnerToRemoval(null);
              toggleModalVisible();
            }}
            onConfirm={() => unassign(learnerToRemoval)}
          >
            <p>Que pena que essa relação não deu certo.</p>
            <p>Você tem certeza que deseja fazer isso?</p>
          </Modal>

          <div className="mentor__action">
            <Button
              shadow
              small
              error={isAvailable}
              success={!isAvailable}
              onClick={() => {
                if (isAvailable) changeAvailability();
                else assignLearner();
              }}
            >
              {isAvailable ? 'Ficar indisponível' : 'Aceitar novos aprendizes'}
            </Button>
            {loading && <Loader> Procurando aprendiz </Loader>}
          </div>
        </>
      ) : (
        <span className="mentor__header-title">
        {currentUser.gender === 'Female' ? 'Você ainda não foi validada como monitora. ' : 'Você ainda não foi validado como monitor. '}
        Faça a sua <Link to='/avaliacao'>avaliação</Link> e
        tenha acesso a todas as funcionalidades de mentoria.
          </span>
        )}
    </div>
  );
}

Mentor.propTypes = {
  currentUser: PropTypes.oneOfType([PropTypes.oneOf([null]), PropTypes.object])
    .isRequired,
  isAvailable: PropTypes.bool.isRequired,
  getLearners: PropTypes.func.isRequired,
  assignLearner: PropTypes.func.isRequired,
  unassignLearner: PropTypes.func.isRequired,
  fetchingLearners: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  learnersList: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object]))
    .isRequired,
  changeAvailability: PropTypes.func.isRequired,
  removeLearner: PropTypes.func.isRequired,
  toggleModalVisible: PropTypes.func.isRequired,
  toggleChatOpen: PropTypes.func.isRequired,
  setCurrentChat: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  isAvailable: selectAvailability(state),
  learnersList: selectLearners(state),
  loading: loadingImport(state),
  fetchingLearners: fetchingLearnersImport(state),
  currentUser: selectCurrentUser(state),
});

const mapDispatchToProps = (dispatch) => ({
  getLearners: () => dispatch(getLearnersImport()),
  assignLearner: () => dispatch(assignLearnerImport()),
  removeLearner: (learnerID) => dispatch(removeLearnerImport(learnerID)),
  unassignLearner: (learnerID) => dispatch(unassignLearnerImport(learnerID)),
  changeAvailability: () => dispatch(changeAvailabilityImport()),
  toggleModalVisible: () => dispatch(toggleModalVisibleImport()),
  setCurrentChat: (learnerID) => dispatch(setCurrentChatImport(learnerID)),
  toggleChatOpen: (bool) => dispatch(toggleChatOpenImport(bool))
});

export default connect(mapStateToProps, mapDispatchToProps)(Mentor);