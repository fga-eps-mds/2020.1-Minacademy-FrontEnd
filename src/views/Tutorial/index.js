import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import './style.scss'
import Markdown from './components/Markdown';
import ActivitiesList from './components/ActivitiesList';
import Activity from './components/Activity';

function Tutorial() {
  const match = useRouteMatch();

  return (
  <div className="tutorial">
    <div className="tutorial__content">
      <div className="tutorial__content--header">
        <div>
          <h1>Tutorial</h1>
          <p>0% total concluído</p>
        </div>
        <div className="tutorial__content--header--progress">
          0 atividades completas
        </div>
      </div>
      <div className="tutorial__content--body">
        <ActivitiesList />
        <Switch>
          <Route path={`${match.path}/atividades/:activityNumber`} component={Activity}>
          </Route>
          <Route path={match.path} component={Markdown}>
          </Route>
        </Switch>
      </div>
    </div>
  </div>
  );
}

export default Tutorial;