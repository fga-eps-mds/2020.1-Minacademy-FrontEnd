import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { generateCertificate } from '../../../../services/certificatesServices';
import {
  selectTotalProgress,
} from '../../../../slices/tutorialSlice';
import Modal from '../../../../components/Modal';
import { toggleModalVisible } from '../../../../slices/modalSlice'
import Question from '../../../../components/Question';
import './style.scss';

/* eslint-disable no-shadow */
function TutorialActivity({
  history,
  totalProgress,
  toggleModalVisible,
}) {
  const [certificate, setCertificate] = useState(null);

  useEffect(() => {
    if (totalProgress === 100) {
      generateCertificate().then((data) => setCertificate(data._id));
      toggleModalVisible()
    }
  }, [totalProgress]);

  return (
    <div className="learner-activity">
      <Question showResult={true} />

      <Modal
        title="Curso concluído"
        confirmMessage="visualizar"
        closeMessage="cancelar"
        onClose={() => {
          toggleModalVisible();
        }}
        onConfirm={() => history.push(`/certificados/${certificate}`)}
      >
        <p>Parabéns, você concluiu o tutorial.</p>
        <p>
          Você poderá acessar o certificado a qualquer momento pela Dashboard.
        </p>
        <p>Clique em visualizar para ver seu certificado</p>
      </Modal>
    </div>
  );
}

const mapStateToProps = (state, props) => ({
  totalProgress: selectTotalProgress(state),
});

const mapDispatchToProps = dispatch => ({
  toggleModalVisible: () => dispatch(toggleModalVisible())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TutorialActivity));
