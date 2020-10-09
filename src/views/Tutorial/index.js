import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import './style.scss'
import Markdown from './components/Markdown';
import ActivitiesList from './components/ActivitiesList';
import Activity from './components/Activity';
import { selectCompletedActivities, selectTotalProgress } from '../../slices/tutorialSlice';

function Tutorial({ completedActivities, totalProgress }) {
  const match = useRouteMatch();

  return (
  <div className="tutorial">
    <div className="tutorial__content">
      <div className="tutorial__content--header">
        <div>
          <h1>Tutorial</h1>
          <p>Total concluído: { totalProgress || 0 }%</p>
        </div>
        <div className="tutorial__content--header--progress">
          { completedActivities } atividades completas
        </div>
      </div>
      <div className="tutorial__content--body">
        <ActivitiesList />
        <Switch>
          <Route path={`${match.path}/atividades/:activityNumber`} component={() => <Activity />}>
          </Route>
          <Route path={match.path} component={Markdown}>
          </Route>
        </Switch>
      </div>
    </div>
  </div>
  );
}

const mapStateToProps = state => ({
  completedActivities: selectCompletedActivities(state),
  totalProgress: selectTotalProgress(state)
})

export default connect(mapStateToProps)(Tutorial)