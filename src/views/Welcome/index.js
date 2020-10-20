import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import './style.scss';
import Learner from './components/learner';
import FemaleMentor from './components/femaleMentor';
import MaleMentor from './components/maleMentor';
import { selectCurrentUser } from '../../slices/usersSlice';
import { assignMentor } from '../../services/learnersService'

/* eslint-disable no-shadow */
function Welcome({ currentUser, assignMentor }) {
  /* eslint-disable no-nested-ternary */
  if(currentUser.mentor_request){
    assignMentor()
  }
  return (
    <>
      <div id='welcome' className='welcome'>{
          currentUser ? (
              currentUser.userType === "Learner" ? <Learner/> : (
                currentUser.gender === "Female" ? <FemaleMentor/> : <MaleMentor/>
              )
          ) : (
            <>
                <div>Erro</div>
            </>
          )}
          <div className='links'>
            <Link to='/dashboard'>Prosseguir para a dashboard</Link>
          </div>
      </div>
    </>
  );
};

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
