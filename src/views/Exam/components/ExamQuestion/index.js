import React, { useMemo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Question from '../../../../components/Question'
import './style.scss';

/* eslint-disable no-shadow */
function ExamQuestion() {
  // TODO: logica para questoẽs. Somente uma resposta por questão? mostrar resultado imediatamente?
  return (
    <div className="exam-activity">
        <Question showResult={false} showGoBack={false}/>
    </div>
  );
}

export default ExamQuestion;
