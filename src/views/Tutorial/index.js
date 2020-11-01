import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import {
  selectCompletedActivities,
  selectTotalProgress,
} from '../../slices/tutorialSlice';
import { getProgress } from '../../services/tutorialServices';
import Markdown from './components/Markdown';
import ActivitiesList from './components/ActivitiesList';
import TutorialActivity from './components/TutorialActivity';
import './style.scss';

function Tutorial({ completedActivities, getProgress, totalProgress }) {
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
          <p>Total concluído: {totalProgress || 0}%</p>
        </div>
        <div className="tutorial__header--progress">
          {completedActivities} atividades completas
        </div>
      </div>
      <div className="tutorial__body">
        <ActivitiesList />
        <Switch>
          <Route exact path={path}>
            <Markdown />
          </Route>
          <Route path={`${path}/atividades/:activityNumber`} component={() => <TutorialActivity />} />
        </Switch>
      </div>
    </div>
  );
}

Tutorial.propTypes = {
  completedActivities: PropTypes.number.isRequired,
  totalProgress: PropTypes.number.isRequired,
  getProgress: PropTypes.func.isRequired,
  match: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

const mapStateToProps = (state) => ({
  completedActivities: selectCompletedActivities(state),
  totalProgress: selectTotalProgress(state),
});

const mapDispatchToProps = (dispatch) => ({
  getProgress: () => dispatch(getProgress()),
});

export default connect(mapStateToProps, mapDispatchToProps, null, {
  pure: true,
})(Tutorial);
