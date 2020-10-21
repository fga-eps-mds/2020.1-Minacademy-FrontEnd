import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loading, fetchingMentor, selectMentor, selectMentorRequest }  from '../../../../slices/learnerSlice';
import { assignMentor, cancelMentorRequest, unassignMentor, getMentor  } from '../../../../services/learnersService';
import { selectCurrentUser } from '../../../../slices/usersSlice';
import Card from '../../../../components/Card';
import Button from '../../../../components/Button';
import Modal from '../../../../components/Modal';
import Loader from '../../../../components/Loader';

/* eslint-disable no-shadow */
function Learner({ loading, fetchingMentor, mentor, getMentor, assignMentor, unassignMentor, mentorRequest }) {
  const [isModalVisible, setIsModalVisible] = useState(false)
  useEffect(() => {
    getMentor()
  }, []);

  const unassign = () => {
    setIsModalVisible(false)
    unassignMentor()
  }

  return (
    <div className="learner">
      <div className="learner__content">
        {mentor ? (
        <>
          <Card
            title='Seu Mentor'
            mainContent={`${mentor?.name} ${mentor?.lastname}`}
            secondaryContent={mentor?.email}
            deleteAction={() => {
              setIsModalVisible(true)
            }}
          />
          {isModalVisible ?
            <Modal
              title={`Desvincular ${mentor.name}`}
              confirmMessage='desvincular'
              closeMessage='cancelar'
              onClose={() => setIsModalVisible(false)}
              onConfirm={() => unassign()}
            >
              <p>Que pena que essa relação não deu certo.</p>
              <p>Você tem certeza que deseja fazer isso?</p>
            </Modal>
            :
            null}
        </>
        ) : (
          <>
            {fetchingMentor && <Loader big />}
            {!fetchingMentor && <h5>Você não tem um mentor</h5>}
            {mentorRequest && <p>Será designado á você um mentor(a) assim que houver um disponível</p>}

            {
              <Button onClick={() => assignMentor()} shadow disabled={mentorRequest}>
                Solicitar mentor
              </Button>
            }
            {loading && <Loader>Procurando mentor</Loader>}

          </>
        )}
        {(mentorRequest && !mentor) && <p>Você será designada a um mentor assim que houver um disponível</p>}
      </div>
     
      {mentor ? (
        ''
      ) : (
        <>
          {!(mentorRequest) && <Button small onClick={assignMentor}>
            Solicitar mentor
          </Button>}
          {(mentorRequest) && <Button small onClick={() => cancelMentorRequest()}>Cancelar solicitação</Button>}
          {loading && <Loader>Procurando mentor</Loader>}
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
  cancelMentorRequest: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  mentorRequest: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  loading: loading(state),
  fetchingMentor: fetchingMentor(state),
  mentor: selectMentor(state),
  mentorRequest: selectMentorRequest(state)
});

const mapDispatchToProps = (dispatch) => ({
  getMentor: () => dispatch(getMentor()),
  assignMentor: () => dispatch(assignMentor()),
  cancelMentorRequest: () => dispatch(cancelMentorRequest()),
  unassignMentor: () => dispatch(unassignMentor())
});

export default connect(mapStateToProps, mapDispatchToProps)(Learner);
