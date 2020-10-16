import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import Card from '../../../../components/Card';
import { assignLearner, unassignLearner } from '../../../../services/mentorsService';
import { selectLearners, loading, removeLearner } from '../../../../slices/mentorshipSlice'
import Button from '../../../../components/Button'
import './style.scss';

function Mentor({ assignLearner, removeLearner, learnersList, loading }) {

  return (
    <div className="mentor">
      <div className="mentor__header">
        <h5>Meus aprendizes</h5>
        <span>disponível</span>
      </div>
      <div className="mentor__content">
        {learnersList ?
          <>
            {learnersList.map(learner =>
              <Card
                key={learner._id}
                title={learner.name + ' ' + learner.lastname}
                mainContent={learner.email}
                deleteAction={() => {
                  unassignLearner(learner._id)
                  removeLearner(learner._id)
                }}
                secodaryContent={`Módulos concluídos: ${learner.completedModules.length}`} />
            )}
          </>
          :
          <p>Voçê não possui nenhum aprendiz</p>
        }
      </div>

      <div className="mentor__action">
        <Button
          shadow
          onClick={assignLearner}
        >
          Solicitar aprendiz
        </Button>
        {loading && <p>Procurando aprendiz...</p>}
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  learnersList: selectLearners(state),
  loading: loading(state)
})

const mapDispatchToProps = dispatch => ({
  assignLearner: () => dispatch(assignLearner()),
  removeLearner: learnerID => dispatch(removeLearner(learnerID))
})

export default connect(mapStateToProps, mapDispatchToProps)(Mentor);
