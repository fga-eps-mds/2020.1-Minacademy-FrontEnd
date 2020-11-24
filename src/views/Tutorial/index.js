import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Switch, useRouteMatch, useLocation, useHistory } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion'
import { selectCurrentUser } from '../../slices/usersSlice';
import {
  selectCompletedActivities,
  selectTotalProgress,
} from '../../slices/tutorialSlice';
import { toggleModalVisible } from '../../slices/modalSlice';
import { getProgress } from '../../services/tutorialServices';
import Markdown from './components/Markdown';
import ActivitiesList from './components/ActivitiesList';
import TutorialActivity from './components/TutorialActivity';
import Modal from '../../components/Modal';
import './style.scss';
import MotionDiv from '../../UI/animation/MotionDiv';
import RouteTransition from '../../UI/animation/RouteTransition.jsx' // eslint-disable-line import/extensions

 /* eslint-disable no-shadow */
function Tutorial({
  completedActivities,
  getProgress,
  totalProgress,
  currentUser,
  toggleModalVisible
}) {

  const match = useRouteMatch();
  const location = useLocation();
  const history = useHistory();
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
      <MotionDiv className="tutorial__body">
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
      <Modal
        title="Curso concluído"
        confirmMessage="visualizar"
        closeMessage="cancelar"
        onClose={() => {
          toggleModalVisible();
        }}
        onConfirm={() => history.push(`/certificados`)}
      >
        <p>Parabéns, você concluiu o tutorial.</p>
        <p>
          Você poderá acessar o certificado a qualquer momento pela Dashboard.
        </p>
        <p>Clique em visualizar para ver seu certificado</p>
      </Modal>
    </div>
  );
}

Tutorial.propTypes = {
  completedActivities: PropTypes.number.isRequired,
  totalProgress: PropTypes.number.isRequired,
  getProgress: PropTypes.func.isRequired,
  toggleModalVisible: PropTypes.bool.isRequired,
  currentUser: PropTypes.oneOfType([PropTypes.object]).isRequired
};

const mapStateToProps = (state) => ({
  completedActivities: selectCompletedActivities(state),
  totalProgress: selectTotalProgress(state),
  currentUser: selectCurrentUser(state),
});

const mapDispatchToProps = (dispatch) => ({
  getProgress: () => dispatch(getProgress()),
  toggleModalVisible: () => dispatch(toggleModalVisible()),
});

export default connect(mapStateToProps, mapDispatchToProps, null, {
  pure: true,
})(Tutorial);
