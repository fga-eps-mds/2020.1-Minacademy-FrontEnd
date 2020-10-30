import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { selectTotalAnswers, selectQuestionsList } from '../../slices/tutorialSlice';
import { getProgress } from '../../services/tutorialServices';
import { validateMentor } from '../../services/mentorsService';
import { selectValidationAttempts } from '../../slices/mentorSlice';
import { toggleModalVisible } from '../../slices/modalSlice';
import { selectCurrentUser } from '../../slices/usersSlice';
import ActivitiesList from '../Tutorial/components/ActivitiesList';
import ExamQuestion from './components/ExamQuestion';
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import ExamRules from './components/ExamRules';
import './style.scss';

function Exam({ validateMentor, currentUser,attempts, getProgress, totalAnswers, questionsList, toggleModalVisible, match }) {
  useEffect(() => {
    getProgress({ exam: 'true' });
  }, [attempts]);

  return (
    <div className="exam">
      <div className="exam__header">
        <div>
          <h1>Avaliação</h1>
          <p>
            Conclua com mais de 70% de acertos para ser validado como mentor
          </p>
        </div>
        <div className="exam__header--progress">
            {attempts > 0 && !currentUser.isValidated ?
              <>
              <span>{totalAnswers}/{questionsList.length} questões respondidas</span>
              <Button
                disabled={totalAnswers < questionsList.length || currentUser.isValidated}
                onClick={() => {
                  toggleModalVisible();
                }}
                shadow
              >
                Finalizar avaliação
              </Button>
              </>
              :
              <>
              <span className="emphasis">Concluída</span>
              <p>Você foi validado como mentor</p>
              </>
            }
        </div>
      </div>
        <div className="exam__body">
        {attempts > 0 && !currentUser.isValidated && <ActivitiesList exam={true} />}
        <Switch>
          {attempts > 0 && !currentUser.isValidated &&
            <Route
              path={`${match.path}/atividades/:activityNumber`}
              render={() => <ExamQuestion />}
            />
          }
          <Route path={match.path} component={ExamRules} />
        </Switch>
        <Modal
            title={`Finalizar e enviar?`}
            confirmMessage='sim'
            closeMessage='cancelar'
            onClose={() => toggleModalVisible()}
            onConfirm={() => {
              validateMentor()
              toggleModalVisible()
            }}
        >
          <p>
            Ao confirmar, suas respostas serão verificadas e
            caso tenha mais de 70% de acertos, voĉe será validado
          </p>
          <p>
            Voĉe ainda possui mais {attempts} tentativas
          </p>
        </Modal>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  totalAnswers: selectTotalAnswers(state),
  questionsList: selectQuestionsList(state),
  attempts: selectValidationAttempts(state),
  currentUser: selectCurrentUser(state)
});

const mapDispatchToProps = (dispatch) => ({
  toggleModalVisible: () => dispatch(toggleModalVisible()),
  getProgress: (query) => dispatch(getProgress(query)),
  validateMentor: () => dispatch(validateMentor())
});

export default connect(mapStateToProps, mapDispatchToProps)(Exam);
