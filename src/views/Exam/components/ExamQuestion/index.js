import React from 'react';
import Question from '../../../../components/Question'
import './style.scss';

/* eslint-disable no-shadow */
function ExamQuestion() {
  return (
    <div className="exam-activity">
        <Question showResult={false} showGoBack={false}/>
    </div>
  );
}

export default ExamQuestion;
