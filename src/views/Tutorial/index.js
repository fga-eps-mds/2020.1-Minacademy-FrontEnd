import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { selectCurrentUser } from '../../slices/usersSlice';
import {
  selectCompletedActivities,
  selectTotalProgress,
} from '../../slices/tutorialSlice';
import { getProgress } from '../../services/tutorialServices';
import Markdown from './components/Markdown';
import ActivitiesList from './components/ActivitiesList';
import TutorialActivity from './components/TutorialActivity';
import './style.scss';

function Tutorial({
  completedActivities,
  getProgress,
  totalProgress,
  currentUser,
}) {
  // eslint-disable-line no-shadow
  const { path } = useRouteMatch();

  useEffect(() => {
    getProgress();
  }, [getProgress]);

  return (
    <div className="tutorial">
      <div className="tutorial__header">
        <div>
          <h1>Tutorial</h1>
          {currentUser.userType === 'Learner' ? (
            <p>Total concluído: {totalProgress || 0}%</p>
          ) : (
            <p>Tutorial destinado aos aprendizes</p>
          )}
        </div>
        {currentUser.userType === 'Learner' && (
          <div className="tutorial__header--progress">
            <span>{completedActivities} atividades completas</span>
          </div>
        )}
      </div>
      <div className="tutorial__body">
        {currentUser.userType === 'Learner' && <ActivitiesList />}
        <Switch>
          <Route exact path={path}>
            <Markdown />
          </Route>
          <Route
            path={`${path}/atividades/:activityNumber`}
            component={() => <TutorialActivity />}
          />
        </Switch>
      </div>
    </div>
  );
}

Tutorial.propTypes = {
  completedActivities: PropTypes.number.isRequired,
  totalProgress: PropTypes.number.isRequired,
  getProgress: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  completedActivities: selectCompletedActivities(state),
  totalProgress: selectTotalProgress(state),
  currentUser: selectCurrentUser(state),
});

const mapDispatchToProps = (dispatch) => ({
  getProgress: () => dispatch(getProgress()),
});

export default connect(mapStateToProps, mapDispatchToProps, null, {
  pure: true,
})(Tutorial);
