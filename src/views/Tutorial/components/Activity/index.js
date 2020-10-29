import React, { useMemo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { generateCertificate } from '../../../../services/certificatesServices';
import {
  selectQuestion,
  selectQuestionsResults,
  selectTotalProgress,
} from '../../../../slices/tutorialSlice';
import {
  answerQuestion,
  getProgress,
} from '../../../../services/tutorialServices';
import Button from '../../../../components/Button';
import './style.scss';
import Modal from '../../../../components/Modal';
import { selectCertificate } from '../../../../slices/certificateSlice';

/* eslint-disable no-shadow */
function Activity({
  question,
  questionResults,
  answerQuestion,
  getProgress,
  history,
  totalProgress,
  certificate,
  generateCertificate
}) {
  const { handleSubmit, register, errors } = useForm();

  const [isModalVisible, setIsModalVisible] = useState(false);
 
  useEffect(() => {
    if (totalProgress === 100) {
      generateCertificate()
      setIsModalVisible(true);
    }
  }, [totalProgress]);
  const result = useMemo(
    () => questionResults.find((result) => result.question === question._id),
    [questionResults]
  );

  const onSubmit = async (alternative) => {
    const response = await answerQuestion({
      ...alternative,
      question: question._id,
    });
    if (response.payload.isCorrect) {
      getProgress();
    }
  };

  const descriptionText = question.description.split('\n').map((i) => {
    return <p key={i}>{i}</p>;
  });

  return (
    <div className="activity">
      {isModalVisible && (
        <Modal
          title="Curso concluído"
          confirmMessage="visualizar"
          closeMessage="cancelar"
          onClose={() => {
            setIsModalVisible(false);
          }}
          onConfirm={() => history.push(`/certificados/${certificate.certificate._id}`)}
        >
          <p>Parabéns, você concluiu o tutorial.</p>
          <p>
            Você poderá acessar o certificado a qualquer momento pela Dashboard.
          </p>
          <p>Clique em visualizar para ver seu certificado</p>
        </Modal>
      )}
      <div className="activity__description">{descriptionText}</div>
      <div className="activity__alternatives">
        {result?.isCorrect ? (
          <div className="activity__result">
            <h4>CORRETO!</h4>
            <p>{question.alternatives[result.alternative]}</p>
          </div>
        ) : (
          <>
            <form id="question" onSubmit={handleSubmit(onSubmit)}>
              {Object.keys(question.alternatives).map((item) => (
                <div className="activity__alternatives--item" key={item}>
                  <label htmlFor="alternative">
                    <input
                      name="alternative"
                      value={item}
                      type="radio"
                      ref={register({ required: true })}
                    />
                    {question.alternatives[item]}
                  </label>
                </div>
              ))}
              {result?.isCorrect === false && (
                <div className="activity__alternatives--error">
                  Resposta errada, tente novamente!
                </div>
              )}
              {errors.alternative && (
                <div className="activity__alternatives--error">
                  Escolha uma alternativa
                </div>
              )}
            </form>
          </>
        )}
      </div>

      <div className="activity__buttons">
        <Button
          onClick={() => {
            history.push('/tutorial');
          }}
          shadow
        >
          Voltar
        </Button>
        {!result?.isCorrect && (
          <Button shadow form="question" type="submit">
            Responder
          </Button>
        )}
      </div>
    </div>
  );
}

Activity.defaultProps = {
  questionResults: [],
};

Activity.propTypes = {
  question: PropTypes.shape({
    _id: PropTypes.string,
    description: PropTypes.string.isRequired,
    alternatives: PropTypes.oneOf([PropTypes.object]).isRequired,
  }).isRequired,
  questionResults: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])),
  answerQuestion: PropTypes.func.isRequired,
  getProgress: PropTypes.func.isRequired,
  history: PropTypes.func.isRequired,
  totalProgress: PropTypes.number.isRequired,
};

const mapStateToProps = (state, props) => ({
  question: selectQuestion(state, props),
  questionResults: selectQuestionsResults(state),
  totalProgress: selectTotalProgress(state),
  certificate: selectCertificate(state)
});

const mapDispatchToProps = (dispatch) => ({
  answerQuestion: (answerData) => dispatch(answerQuestion(answerData)),
  getProgress: (questions) => dispatch(getProgress(questions)),
  generateCertificate: () => dispatch(generateCertificate())
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Activity)
);
