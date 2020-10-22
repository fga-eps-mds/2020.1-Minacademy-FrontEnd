import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loading, fetchingMentor, selectMentor, selectMentorRequest }  from '../../../../slices/learnerSlice';
import { assignMentor, cancelMentorRequest, getMentor  } from '../../../../services/learnersService';
import Card from '../../../../components/Card';
import Button from '../../../../components/Button';
import Loader from '../../../../components/Loader';

/* eslint-disable no-shadow */
function Learner({ loading, fetchingMentor, mentor, getMentor, assignMentor, cancelMentorRequest, mentorRequest }) {
  useEffect(() => {
    getMentor()
  }, []);
  
  return (
    <div className="learner">
      <div className="learner__content">
        {mentor ? ( 
          <Card
            title='Seu Mentor'
            mainContent={`${mentor?.name} ${mentor?.lastname}`}
            secondaryContent={mentor?.email}
          />
        ) : (
          <>
            {fetchingMentor && <Loader big />}
            {!fetchingMentor && <h5>Você ainda não tem um mentor</h5>}
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
  cancelMentorRequest: () => dispatch(cancelMentorRequest())
});

export default connect(mapStateToProps, mapDispatchToProps)(Learner);
