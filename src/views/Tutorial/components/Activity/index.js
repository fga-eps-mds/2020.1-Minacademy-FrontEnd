import React, { useState, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { selectActivity, selectActivitiesResults, setActivityResult } from '../../../../slices/tutorialSlice';
import { answerQuestion } from '../../../../services/tutorialServices';
import './style.scss';
import Button from '../../../../components/Button';

function Activity({ activity, activitiesResults, setActivityResult }) {
  const { handleSubmit, register, errors } = useForm();
  const result = useMemo(() => activitiesResults.find(result => result.question === activity._id), [activitiesResults])

  const onSubmit = alternative => {
    answerQuestion({ ...alternative, question: activity._id }).then(async (response) => {
      setActivityResult(response);
    });
  };

  let descriptionText = activity.description.split('\n').map((i) => {
    return <p key={i}>{i}</p>;
  });

  return (
    <div className="activity">
      <div className="activity__description">{descriptionText}</div>
      <div className="activity__alternatives">
        {result?.isCorrect ? (
          <div className="activity__result">
            <h4>CORRETO!</h4>
            <p>{activity.alternatives[result.alternative]}</p>
          </div>
        ) : (
          <>
          <form onSubmit={handleSubmit(onSubmit)}>
            {Object.keys(activity.alternatives).map(item => (
              <div className="activity__alternatives--item" key={item}>
                <label htmlFor="alternative">
                  <input name="alternative" value={item} type="radio" ref={register({ required: true })} />
                  {activity.alternatives[item]}
                </label>
              </div>
            ))}
            <Button inverted shadow>
              Responder
            </Button>
            {result?.isCorrect === false && <div className="activity__alternatives--error">Resposta errada, tente novamente!</div>}
            {errors.alternative && <div className="activity__alternatives--error">Escolha uma alternativa</div>}
          </form>
          </>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state, props) => ({
  activity: selectActivity(state, props),
  activitiesResults: selectActivitiesResults(state)
});

const mapDispatchToProps = dispatch => ({
  setActivityResult: (result) => dispatch(setActivityResult(result))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Activity));
