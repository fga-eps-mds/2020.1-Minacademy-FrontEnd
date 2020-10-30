import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Question from '../../../../components/Question'
import './style.scss';
import Button from '../../../../components/Button'

/* eslint-disable no-shadow */
function ExamQuestion() {
  const history = useHistory()
  const params = useParams()
  let next = (parseInt(params.activityNumber, 10) + 1)
  if (next === 11){
    next = 1
  }
  return (
    <div className="exam-activity">
        <Question showResult={false} showGoBack={false}/>
        <div className='next-button'>
          <Button shadow onClick={() => history.push(`/avaliacao/atividades/${next}`)}>Próximo</Button>
        </div>
    </div>
  );
}

export default ExamQuestion;
