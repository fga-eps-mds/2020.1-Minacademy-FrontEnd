import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { selectCurrentUser } from '../../../../slices/usersSlice';
import { selectValidationAttempts } from '../../../../slices/mentorSlice';
import './style.scss';

/* eslint-disable no-shadow */
function ExamRules({ currentUser, attempts }) {
  return (
    <div className="exam-rules">
      <h4 className="exam-rules__header">
        Essa avaliação tem como objetivo verificar se você possui
        o conhecimento necessário para realizar a mentoria
      </h4>
      <div className="exam-rules__content">
      {currentUser.isValidated &&
          <p>Voĉe já concluiu a avaliação e foi validado como mentor.</p>
      }
      {attempts > 0 && !currentUser.isValidated &&
        <>
          <p>Conclua com mais de 70% de acertos para ser validado como mentor(a)</p>
          <p>Não há limite de tempo para realizar a prova</p>
          <p className="emphasis">Você possui {attempts} tentativas</p>
        </>
      }
      {attempts === 0 &&
        <p>Você não possui mais tentativas</p>
      }
      </div>
    </div>
  );
}

ExamRules.propTypes = {
  currentUser: PropTypes.oneOfType([PropTypes.oneOf([null]), PropTypes.object])
      .isRequired,
  attempts: PropTypes.number.isRequired
}

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state),
  attempts: selectValidationAttempts(state)
});

export default connect(mapStateToProps)(ExamRules);
