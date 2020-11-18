import React, { useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { generateCertificate } from '../../../../services/certificatesServices';
import {
  selectTotalProgress,
  selectQuestionsList,
} from '../../../../slices/tutorialSlice';
import { toggleModalVisible } from '../../../../slices/modalSlice';
import Question from '../../../../components/Question';
import MotionDiv from '../../../../UI/animation/MotionDiv';
import Button from '../../../../components/Button';
import './style.scss';

/* eslint-disable no-shadow */
function TutorialActivity({
  history,
  totalProgress,
  toggleModalVisible,
  generateCertificate,
  questionsList,
  match,
}) {
  useEffect(() => {
    if (totalProgress === 100) {
      generateCertificate().then((response) => {
        if (!response?.error) {
          toggleModalVisible()
        }
      })
    }
  }, [totalProgress]);
  /* eslint-disable radix */
  const { nextQuestion } = useMemo(() => {
    const { activityNumber } = match.params;
    const next = questionsList.find(
      (question) => question.number === parseInt(activityNumber) + 1
    );
    const previous = questionsList.find(
      (question) => question.number === parseInt(activityNumber) - 1
    );
    return {
      nextQuestion: next ? next.number : false,
      previousQuestion: previous ? previous.number : false,
    };
  }, [questionsList]);

  return (
      <div className="tutorial-activity">
        <MotionDiv
          transition={{
            type: 'tween',
            ease: 'easeOut',
            transition: 'linear',
            // duration: 0.3,
          }}
          variants={{
            initial: {
              opacity: 0,
              x: '100vh',
              // scale: 1,
            },
            in: {
              opacity: 1,
              x: 0,
              // scale: 1,
            },
            out: {
              opacity: 0,
              x: '-35vh',
              scale: 0.3,
            },
          }}
        >
          <Question showResult>
            {/* {previousQuestion ? ( */}
              {/* <Button
                shadow
                inverted
                disabled={!previousQuestion}
                onClick={() => {
                  const path = match.path.replace(/:\w+/gi, previousQuestion);
                  history.push(path);
                }}
              >
                Anterior
              </Button> */}

              {nextQuestion ? 
              <Button
                shadow
                inverted
                disabled={!nextQuestion}
                onClick={() => {
                  const path = match.path.replace(/:\w+/gi, nextQuestion);
                  history.push(path);
                }}
              >
                Proximo
              </Button>
              : <Button
                shadow
                onClick={() => {
                  history.push('/tutorial');
                }}
              >
                Continuar tutorial
              </Button>
              }
          </Question>
        </MotionDiv>
      </div>
  );
}

TutorialActivity.propTypes = {
  toggleModalVisible: PropTypes.func.isRequired,
  totalProgress: PropTypes.number.isRequired,
  history: PropTypes.oneOfType([PropTypes.object]).isRequired,
  match: PropTypes.oneOfType([PropTypes.object]).isRequired,
  generateCertificate: PropTypes.oneOfType([PropTypes.object]).isRequired,
  questionsList: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired
};

const mapStateToProps = (state) => ({
  totalProgress: selectTotalProgress(state),
  questionsList: selectQuestionsList(state),
});

const mapDispatchToProps = (dispatch) => ({
  toggleModalVisible: () => dispatch(toggleModalVisible()),
  generateCertificate: () => dispatch(generateCertificate()),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(TutorialActivity)
);
