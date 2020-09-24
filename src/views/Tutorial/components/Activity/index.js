import React from 'react';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import { selectActivity } from '../../../../slices/tutorialSlice'
import './style.scss';
import Button from '../../../../components/Button';

function Activity ({ activity }) {
  const { handleSubmit, register, errors } = useForm();

  const onSubmit = (val) => {
    console.log("ANSWER: ", val);
  }

  return (
    <div className="activity">
      <div className="activity__description">
        <p> { activity.description } </p>
      </div>
      <div className="activity__alternatives">
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
          {errors.alternative && <div className="activity__alternatives--error">Escolha uma alternativa</div>}
        </form>
      </div>
    </div>
  );
}

const mapStateToProps = (state, props) => ({
    activity: selectActivity(state, props)
})

export default withRouter(connect(mapStateToProps)(Activity))