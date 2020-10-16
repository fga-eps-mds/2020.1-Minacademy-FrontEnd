import React from 'react';
import { connect } from 'react-redux'
import Mentor from './components/Mentor';
import Learner from './components/Learner'
import { selectCurrentUser } from '../../slices/usersSlice';
import './style.scss'

function Mentoring({ currentUser }) {

  return(
    <div className="mentorship">
      <div className="mentorship__header">
        <h1>Mentoria</h1>
      </div>
      <div className="mentorship__content">
        {currentUser.userType === 'Mentor' && <Mentor/>}
        {currentUser.userType === 'Learner' && <Learner/>}
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  currentUser: selectCurrentUser(state)
})

export default connect(mapStateToProps)(Mentoring);