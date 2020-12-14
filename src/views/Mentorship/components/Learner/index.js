import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loading as loadingImport, fetchingMentor as fetchingMentorImport, selectMentor, selectMentorRequest } from '../../../../slices/learnerSlice';
import { assignMentor as assignMentorImport, cancelMentorRequest as cancelMentorRequestImport, unassignMentor as unassignMentorImport, getMentor as getMentorImport } from '../../../../services/learnersService';
import Card from '../../../../components/Card';
import Button from '../../../../components/Button';
import Modal from '../../../../components/Modal';
import Loader from '../../../../components/Loader';
import { toggleModalVisible as toggleModalVisibleImport, toggleChatOpen as toggleChatOpenImport } from '../../../../slices/modalSlice';
import MotionDiv from '../../../../UI/animation/MotionDiv';
import './style.scss'

/* eslint-disable no-shadow */
function Learner({ loading, fetchingMentor, mentor, getMentor, assignMentor, unassignMentor, mentorRequest, cancelMentorRequest, toggleModalVisible, toggleChatOpen }) {
  useEffect(() => {
    getMentor()
  }, []);

  const unassign = () => {
    toggleModalVisible()
    unassignMentor()
  };

  return (
    <div className="learner">
      {mentor && <div className="mentor__header">
        <span className="mentor__header-title">Clique em seu mentor para conversar</span>
      </div>}
      {mentor ? (
        <>
          <MotionDiv className="learner__content">
            {fetchingMentor && <Loader big />}
            <Card
              title={mentor.gender === 'Female' ? 'Sua Mentora' : 'Seu Mentor'}
              icon
              mainContent={`${mentor?.name} ${mentor?.lastname}`}
              secondaryContent={mentor?.email}
              selectCard={() => {
                toggleChatOpen(true)
              }}
              deleteActionMessage='Desvincular'
              deleteAction={() => {
                toggleModalVisible()
              }}
            />
            </MotionDiv>
            <Modal
              title={`Desvincular ${mentor.name}`}
              confirmMessage='desvincular'
              closeMessage='cancelar'
              onClose={() => toggleModalVisible()}
              onConfirm={() => unassign()}
            >
              <p>Que pena que essa relação não deu certo.</p>
              <p>Ao se desvincular de um monitor não podemos garantir que haverá outro monitor disponível.</p>
              <p>Você tem certeza que deseja fazer isso?</p>
            </Modal>
          
        </>
      ) : (
          <>
            <MotionDiv className='noMentorContent'>
              {fetchingMentor && <Loader big />}
              {!fetchingMentor && <p>Você não está vinculada a nenhum(a) mentor(a) no momento.</p>}
              {mentorRequest && <p>Será designado a você um(a) mentor(a) assim que disponível.</p>}
              {mentorRequest ?
                <Button onClick={() => cancelMentorRequest()} shadow error>Cancelar solicitação</Button>
                :
                <Button onClick={() => assignMentor()} shadow disabled={mentorRequest}>
                  Solicitar mentor
                </Button>
              }
              {loading && <Loader>Procurando mentor</Loader>}
            </MotionDiv>
          </>
        )}
    </div>
  );
}

Learner.propTypes = {
  fetchingMentor: PropTypes.bool.isRequired,
  mentor: PropTypes.oneOfType([PropTypes.object]).isRequired,
  getMentor: PropTypes.func.isRequired,
  assignMentor: PropTypes.func.isRequired,
  unassignMentor: PropTypes.func.isRequired,
  cancelMentorRequest: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  mentorRequest: PropTypes.func.isRequired,
  toggleModalVisible: PropTypes.func.isRequired,
  toggleChatOpen: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  loading: loadingImport(state),
  fetchingMentor: fetchingMentorImport(state),
  mentor: selectMentor(state),
  mentorRequest: selectMentorRequest(state)
});

const mapDispatchToProps = (dispatch) => ({
  getMentor: () => dispatch(getMentorImport()),
  assignMentor: () => dispatch(assignMentorImport()),
  cancelMentorRequest: () => dispatch(cancelMentorRequestImport()),
  unassignMentor: () => dispatch(unassignMentorImport()),
  toggleModalVisible: () => dispatch(toggleModalVisibleImport()),
  toggleChatOpen: (bool) => dispatch(toggleChatOpenImport(bool))
});

export default connect(mapStateToProps, mapDispatchToProps)(Learner);
