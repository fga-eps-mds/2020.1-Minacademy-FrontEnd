import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { selectQuestionsList } from '../../../../slices/tutorialSlice';
import Question from '../../../../components/Question';
import MotionDiv from '../../../../UI/animation/MotionDiv';
import './style.scss';

/* eslint-disable no-shadow */
function ExamQuestion({ questionsList, match, history }) {
  const nextQuestion = useMemo(() => {
    const { activityNumber } = match.params;
    const next = questionsList.find(
      (question) => question.number === parseInt(activityNumber) + 1 // eslint-disable-line radix
    );
    return next?.number || activityNumber;
  }, [history.location.pathname]);

  return (
    <div className="exam-activity">
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
        <Question
          showResult={false}
          onAnswer={() => {
            const path = match.path.replace(/:\w+/gi, nextQuestion);
            history.push(path);
          }}
        />
      </MotionDiv>
    </div>
  );
}

ExamQuestion.propTypes = {
  questionsList: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  history: PropTypes.oneOfType([PropTypes.object]).isRequired,
  match: PropTypes.oneOfType([PropTypes.object]).isRequired
};
const mapStateToProps = (state) => ({
  questionsList: selectQuestionsList(state),
});

export default withRouter(connect(mapStateToProps)(ExamQuestion));
