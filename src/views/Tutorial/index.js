import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Switch, useRouteMatch, useLocation } from 'react-router-dom';
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

import MotionDiv from '../../UI/animation/MotionDiv';
import RouteTransition from '../../UI/animation/RouteTransition.jsx'
import { AnimatePresence, AnimateSharedLayout } from 'framer-motion'

function Tutorial({
  completedActivities,
  getProgress,
  totalProgress,
  currentUser,
}) {
  // eslint-disable-line no-shadow
  const match = useRouteMatch();
  const location = useLocation();

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
      <MotionDiv layout className="tutorial__body">
        {currentUser.userType === 'Learner' && <ActivitiesList />}
        <div className="custom-animation">
          <AnimatePresence exitBeforeEnter inital={false}>
            <Switch location={location} key={location.pathname} >
              <RouteTransition exact path={match.url}>
                <Markdown />
              </RouteTransition>
              <RouteTransition
                path={`${match.url}/atividades/:activityNumber`}
              ><TutorialActivity /></RouteTransition>
            </Switch>
          </AnimatePresence>
        </div>
      </MotionDiv>

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
