import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loading, fetchingMentor, selectMentor }  from '../../../../slices/learnerSlice';
import { assignMentor, getMentor  } from '../../../../services/learnersService';
import { selectCurrentUser } from '../../../../slices/usersSlice';
import Card from '../../../../components/Card';
import Button from '../../../../components/Button';
import Loader from '../../../../components/Loader';

/* eslint-disable no-shadow */
function Learner({ loading, fetchingMentor, mentor, getMentor, assignMentor, currentUser }) {
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
        {currentUser.mentor_request && <p>Você será designada a um mentor assim que houver um disponível</p>}
      </div>
     
      {mentor ? (
        ''
      ) : (
        <>
          {!(currentUser.mentor_request) && <Button small onClick={assignMentor}>
            Solicitar mentor
          </Button>}
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
  loading: PropTypes.bool.isRequired,
  currentUser: PropTypes.oneOfType([
    PropTypes.oneOf([null]),
    PropTypes.object
  ]).isRequired
};

const mapStateToProps = (state) => ({
  loading: loading(state),
  currentUser: selectCurrentUser(state),
  fetchingMentor: fetchingMentor(state),
  mentor: selectMentor(state)
});

const mapDispatchToProps = (dispatch) => ({
  getMentor: () => dispatch(getMentor()),
  assignMentor: () => dispatch(assignMentor())
});

export default connect(mapStateToProps, mapDispatchToProps)(Learner);
