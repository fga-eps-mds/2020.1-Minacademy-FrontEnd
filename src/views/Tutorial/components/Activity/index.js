import React, {useEffect} from 'react';
import { connect } from 'react-redux'
import { selectActivity } from '../../../../slices/tutorialSlice'
import { Link } from 'react-router-dom';
import './style.scss';
import Button from '../../../../components/Button';

function Activity ({ activity }) {
  useEffect(() => {
    (async function teste() {
      console.log(activity)
    })()
  });

  return (
    <div className="activity">
      <div className="activity__description">
        <h4> { activity.description } </h4>
      </div>
      <div className="activity__body">
        {Object.keys(activity.alternatives)
          .map(item => (
            <p key={item}><b>{item}</b>. {activity.alternatives[item]}</p>
        ))}
      </div>
      <div className="activity__action-bar">
        <Button inverted shadow>
          Responder
        </Button>
      </div>
    </div>
  );
}

const mapStateToProps = (state, props) => ({
    activity: selectActivity(state, props)
})

export default connect(mapStateToProps)(Activity)