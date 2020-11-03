import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import Mentor from './components/Mentor';
import Learner from './components/Learner';
import { selectCurrentUser } from '../../slices/usersSlice';
import './style.scss';
import Button from '../../components/Button';
import { openWebSocket, closeWebSocket } from '../../services/websocket';

function Mentorship({ currentUser }) {

  return(
    <div className="mentorship">
      <div className="mentorship__header">
        <h1>Mentoria</h1>
        <Button shadow onClick={() => openWebSocket('a')}>ERRADO</Button>
        <Button shadow onClick={() => openWebSocket(sessionStorage.getItem('accessToken'))}>CERTO</Button>
        <Button shadow onClick={() => closeWebSocket('a')}>FECHAR</Button>
      </div>
      <div className="mentorship__content">
        {currentUser.userType === 'Mentor' && <Mentor/>}
        {currentUser.userType === 'Learner' && <Learner/>}
      </div>
    </div>
  );
}

Mentorship.propTypes = {
  currentUser: PropTypes.oneOfType([
    PropTypes.oneOf([null]),
    PropTypes.object
  ]).isRequired
}

const mapStateToProps = state => ({
  currentUser: selectCurrentUser(state)
})

export default connect(mapStateToProps)(Mentorship);