import React from 'react';
import { loading } from '../../../../slices/mentorshipSlice'
import Card from '../../../../components/Card';
import Button from '../../../../components/Button'
import {mentorRequest} from '../../../../services/learnersService'

function Learner({loading}) {
  return (
    <div className='learner'>
      <div className='learner__content'>
        <Card  title="titulo aaaa" mainContent="Nome real" secodaryContent="failton@email.com"/>
      </div>

      {loading ? 'CARREGANDO...' : 'CARREGOU!!!'}
      <Button
        small
        onClick={mentorRequest}
      >
        teste</Button>
    </div>
  )
}

export default Learner