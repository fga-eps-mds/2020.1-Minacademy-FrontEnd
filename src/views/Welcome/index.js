import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import './style.scss';
import Learner from './components/learner';
import FemaleMentor from './components/femaleMentor';
import MaleMentor from './components/maleMentor';
import { selectCurrentUser } from '../../slices/usersSlice';

function Welcome({currentUser}) {
    
  return (
    <>
      <div id='welcome' className='welcome'>{
          currentUser ? (
              currentUser.userType === "learn" ? Learner() : (
                currentUser.gender === "Female" ? FemaleMentor() : MaleMentor()
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

const mapStateToProps = state => ({
    currentUser: selectCurrentUser(state)
});

export default connect(mapStateToProps)(Welcome);
