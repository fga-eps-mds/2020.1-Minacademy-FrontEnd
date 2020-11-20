import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { selectCurrentUser } from '../../../../slices/usersSlice';
import { selectValidationAttempts, selectValidationResult } from '../../../../slices/mentorSlice';
import Button from '../../../../components/Button';
import './style.scss';

/* eslint-disable no-shadow */
function ExamRules({ currentUser, attempts, result }) {
  const history = useHistory();

  return (
    <div className="exam-rules">
      <h3 className="exam-rules__header">
        Essa avaliação tem como objetivo verificar se você possui
        o conhecimento necessário para realizar a mentoria
      </h3>
      <div className="exam-rules__content">
      {currentUser.isValidated &&
        <>
          <p className="emphasis">Você já concluiu a avaliação e foi validado como mentor</p>
          <Button inverted shadow onClick={() => history.push(`/dashboard`)}>Retornar a Dashboard</Button>
        </>
      }
      {attempts > 0 && !currentUser.isValidated &&
        <>
          <p>Conclua com mais de 70% de acertos para ser validado como mentor(a)</p>
          <p>Não há limite de tempo para realizar a prova</p>
          {result !== null && <p> Resultado da última tentativa: {result} acertos</p>}
          <p className="emphasis">{`Você possui ${attempts} ${attempts > 1 ? 'tentativas' : 'tentativa'}`}</p>
          <Button shadow onClick={() => history.push(`${history.location.pathname}/atividades/1`)}>Iniciar Avaliação</Button>
        </>
      }
      {attempts === 0 &&
        <>
        <p className="emphasis failure">Você não possui mais tentativas</p>
        <p> Resultado da última tentativa: {result} acertos</p>
        </>
      }
      </div>
    </div>
  );
}

ExamRules.propTypes = {
  currentUser: PropTypes.oneOfType([PropTypes.oneOf([null]), PropTypes.object])
      .isRequired,
  attempts: PropTypes.number.isRequired,
  result: PropTypes.number, // eslint-disable-line react/require-default-props
}

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state),
  attempts: selectValidationAttempts(state),
  result: selectValidationResult(state)
});

export default connect(mapStateToProps)(ExamRules);
