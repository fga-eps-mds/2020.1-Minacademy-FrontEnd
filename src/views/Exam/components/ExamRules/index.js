import React, { useMemo, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { selectCurrentUser } from '../../../../slices/usersSlice';
import { selectValidationAttempts } from '../../../../slices/mentorSlice';
import Button from '../../../../components/Button';
import './style.scss';

/* eslint-disable no-shadow */
function ExamRules({ currentUser, attempts }) {
  return (
    <div className="exam-rules">
      <h4 className="exam-rules__header">
        Essa avaliação tem como objetivo verificar se você possui
        o conhecimento necessário para realizar a mentoria
      </h4>
      {currentUser.isValidated ?
        <div className="exam-rules__content">
          <p>Voĉe já concluiu a avaliação e foi validado como mentor.</p>
        </div>
        : attempts > 0 ? (
          <div className="exam-rules__content">
          <p>Conclua com mais de 70% de acertos para ser validado como mentor(a)</p>
          <p>Não há limite de tempo para realizar a prova</p>
          <p className="emphasis">Você possui {attempts} tentativas</p>
        </div>
        ) : (<p>Voĉe não possui mais tentativas.</p>)
      }
    </div>
  );
}

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state),
  attempts: selectValidationAttempts(state)
});

export default connect(mapStateToProps)(ExamRules);
