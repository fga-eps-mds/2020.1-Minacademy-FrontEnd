import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import ActivitiesList from '../Tutorial/components/ActivitiesList';
import { selectCompletedActivities, selectTotalProgress } from '../../slices/tutorialSlice';
import ExamQuestion from './components/ExamQuestion'
import ExamRules from './components/ExamRules'
import './style.scss'

function Exam({ completedActivities, totalProgress }) {
  const match = useRouteMatch();

  return (
  <div className="exam">
      <div className="exam__header">
        <div>
          <h1>Avaliação</h1>
            <p>Conclua com mais de 70% de acertos para ser validado como mentor</p>
        </div>
        <div className="exam__header--progress">
          0/10 questões respondidas
        </div>
      </div>
      <div className="exam__body">
        <ActivitiesList fetchQuestions={'exam'} />
        <Switch>
          <Route path={`${match.path}/atividades/:activityNumber`} component={() => <ExamQuestion />} />
          <Route path={match.path} component={ExamRules} />
        </Switch>
      </div>
  </div>
  );
}

const mapStateToProps = state => ({
  completedActivities: selectCompletedActivities(state),
  totalProgress: selectTotalProgress(state)
})

export default connect(mapStateToProps)(Exam)