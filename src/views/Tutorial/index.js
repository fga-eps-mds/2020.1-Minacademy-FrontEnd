import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import Markdown from './components/Markdown';
import ActivitiesList from './components/ActivitiesList';
import TutorialActivity from './components/TutorialActivity'
import { selectCompletedActivities, selectTotalProgress } from '../../slices/tutorialSlice';
import { selectCurrentUser } from '../../slices/usersSlice';
import './style.scss'

function Tutorial({ currentUser, completedActivities, totalProgress }) {
  const match = useRouteMatch();

  return (
  <div className="tutorial">
      <div className="tutorial__header">
        <div>
          <h1>Tutorial</h1>
          <p>Total concluído: { totalProgress || 0 }%</p>
        </div>
        <div className="tutorial__header--progress">
          { completedActivities } atividades completas
        </div>
      </div>
      <div className="tutorial__body">
        <ActivitiesList />
        <Switch>
          <Route path={`${match.path}/atividades/:activityNumber`} component={() => <TutorialActivity />} />
          <Route path={match.path} component={Markdown} />
        </Switch>
      </div>
  </div>
  );
}

Tutorial.propTypes = {
  currentUser: PropTypes.oneOfType([
    PropTypes.oneOf([null]),
    PropTypes.object
  ]).isRequired,
  completedActivities: PropTypes.number.isRequired,
  totalProgress: PropTypes.number.isRequired
};

const mapStateToProps = state => ({
  currentUser: selectCurrentUser(state),
  completedActivities: selectCompletedActivities(state),
  totalProgress: selectTotalProgress(state)
})

export default connect(mapStateToProps)(Tutorial)