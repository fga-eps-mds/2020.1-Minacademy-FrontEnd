import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import ActivitiesList from '../Tutorial/components/ActivitiesList';
import { selectTotalAnswers } from '../../slices/tutorialSlice';
import { getProgress } from '../../services/tutorialServices';
import { toggleModalVisible } from '../../slices/modalSlice'
import ExamQuestion from './components/ExamQuestion';
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import ExamRules from './components/ExamRules';
import './style.scss';

function Exam({ getProgress, totalAnswers, toggleModalVisible, match }) {
  useEffect(() => {
    getProgress({ exam: true });
  }, []);

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
          {totalAnswers}/10 questões respondidas

            <Button
              disabled={totalAnswers <  10}
              onClick={() => {
                toggleModalVisible();
              }}
              shadow
            >
              Finalizar avaliação
            </Button>

        </div>
      </div>
      <div className="exam__body">
        <ActivitiesList exam={true} />
        <Switch>
          <Route
            path={`${match.path}/atividades/:activityNumber`}
            render={() => <ExamQuestion />}
          />
          <Route path={match.path} component={ExamRules} />
        </Switch>
        <Modal
            title={`Finalizar e enviar?`}
            confirmMessage='sim'
            closeMessage='cancelar'
            onClose={() => toggleModalVisible()}
            onConfirm={() => {}}
        >

        </Modal>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  totalAnswers: selectTotalAnswers(state),
});

const mapDispatchToProps = (dispatch) => ({
  toggleModalVisible: () => dispatch(toggleModalVisible()),
  getProgress: () => dispatch(getProgress())
});

export default connect(mapStateToProps, mapDispatchToProps)(Exam);
