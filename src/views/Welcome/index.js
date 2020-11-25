import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './style.scss';
import Learner from './components/learner';
import Mentor from './components/Mentor';
import { selectCurrentUser } from '../../slices/usersSlice';
import { assignMentor } from '../../services/learnersService'

/* eslint-disable no-shadow */
function Welcome({ currentUser, assignMentor }) {
  /* eslint-disable no-nested-ternary */
  if(currentUser.mentor_request) {
    assignMentor()
  }
  return (
    <div id='welcome' className='welcome'>
      <h1>{currentUser.gender === 'Male'? 'Seja Bem-vindo' : 'Seja Bem-vinda'}</h1>
      <div className='welcome__content'>
        {currentUser 
        ? currentUser.userType === "Learner" ? <Learner /> : <Mentor gender={currentUser.gender} /> 
        : <div>Erro</div>
        }
      </div>
    </div>
  );
}

Welcome.propTypes = {
  currentUser: PropTypes.oneOfType([
    PropTypes.oneOf([null]),
    PropTypes.object
  ]).isRequired,
  assignMentor: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    currentUser: selectCurrentUser(state)
});

const mapDispatchToProps = dispatch => ({
  assignMentor: () =>dispatch(assignMentor())
})

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);
