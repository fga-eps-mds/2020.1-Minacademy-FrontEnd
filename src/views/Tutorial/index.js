import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import Markdown from './components/Markdown';
import ActivitiesList from './components/ActivitiesList';
import Activity from './components/Activity';
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
          {currentUser.userType === "Learner" && <p>Total concluído: { totalProgress || 0 }%</p>}
        </div>
        {currentUser.userType === "Learner" && <div className="tutorial__header--progress">
          { completedActivities } atividades completas
        </div>}
      </div>
      <div className="tutorial__body">
        {currentUser.userType === "Learner" && <ActivitiesList />}
        <Switch>
          {currentUser.userType === "Learner" && <Route path={`${match.path}/atividades/:activityNumber`} component={() => <Activity />} />}
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