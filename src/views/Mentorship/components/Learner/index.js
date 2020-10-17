import React, { useEffect } from 'react';
import { fetchingMentor, selectMentor, setMentor}  from '../../../../slices/mentorshipSlice';
import { connect } from 'react-redux'
import Card from '../../../../components/Card';
import Button from '../../../../components/Button';
import Loader from '../../../../components/Loader'
import { mentorRequest, getMentor  } from '../../../../services/learnersService';
import { selectCurrentUser } from '../../../../slices/usersSlice'

function Learner({ currentUser, fetchingMentor, mentorData, mentor, getMentor, mentorRequest }) {
  
  useEffect(() => {
    getMentor()
  }, [mentor]);

  console.log("MENTOR REQUEST", mentorRequest)
  
  return (
    <div className="learner">
      <div className="learner__content">
        {mentor  ? ( 
          <Card
            title={'Seu Mentor'}
            mainContent={mentorData?.name + ' ' + mentorData?.lastname}
            secodaryContent={mentorData?.email}
          />
        ) : (
          <p>Não lhe foi designado um mentor ainda.</p>
        )}
      </div>
      
     
      {mentor ? (
        ''
      ) : (
        <Button small onClick={mentorRequest}>
          Solicitar mentor
        </Button>
      )}
      {fetchingMentor && <Loader> Procurando mentor </Loader>}
    </div>
  );
}

const mapStateToProps = (state) => ({
  mentorData: selectMentor(state),
  currentUser: selectCurrentUser(state),
  mentor: setMentor(state),
  fetchingMentor: fetchingMentor(state)
});

const mapDispatchToProps = (dispatch) => ({
  getMentor: () => dispatch(getMentor()),
  mentorRequest: () => dispatch(mentorRequest()),
  setMentor: () => dispatch(setMentor()),

});

export default connect(mapStateToProps, mapDispatchToProps)(Learner);
