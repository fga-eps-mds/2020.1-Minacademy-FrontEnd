import React, { useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  selectQuestion,
  selectQuestionsResults,
  isLoading
} from '../../slices/tutorialSlice';
import {
  answerQuestion,
  getProgress,
} from '../../services/tutorialServices';
import Button from '../Button';
import Loader from '../Loader'
import './style.scss';

/* eslint-disable no-shadow */
function Question({
  question,
  questionResults,
  answerQuestion,
  getProgress,
  history,
  showResult = true,
  showGoBack = true,
  isLoading
}) {
  const result = useMemo(
    () => questionResults.find((result) => result.question === question._id),
    [questionResults]
  );

  const { handleSubmit, register, errors, setError, clearErrors, watch } = useForm({
    defaultValues: {
      alternative: result?.alternative,
    },
  });

  const previousAlternative = useMemo(() =>
    watch('alternative') === result?.alternative
  , [watch('alternative'), result])

  const onSubmit = async (alternative) => {
    const response = await answerQuestion({
      ...alternative,
      question: question._id,
    });
    if (response.payload.isCorrect === true) {
      getProgress();
    }
    if (result?.isCorrect === false && showResult && !isLoading)
      setError('alternative', {type: 'manual', message: 'Resposta errada, tente novamente!' })
  };

  const descriptionText = useMemo(() => question.description
    .split('\n')
    .map((word, i) => <p key={i}>{word}</p>
  ), [question])

  const questionAlternatives = useMemo(() =>
    Object.keys(question.alternatives).map((item) =>
      <div className="question__alternatives--item" key={item}>
        <label htmlFor="alternative">
          <input
            name="alternative"
            value={item}
            type="radio"
            onChange={() => clearErrors('alternative')}
            ref={register({ required: "Escolha uma alternativa" })}
          />
          <span>{question.alternatives[item]}</span>
        </label>
      </div>
  ), [question])

  return (
    <div className="question">
      <div className="question__description">{descriptionText}</div>
      <div className="question__alternatives">
        {result?.isCorrect && showResult ? (
          <div className="question__result">
            <h4>CORRETO!</h4>
            <p>{question.alternatives[result.alternative]}</p>
          </div>
        ) : (
          <>
            <form id="question" onSubmit={handleSubmit(onSubmit)}>
              {questionAlternatives}
              {isLoading && <Loader> Verificando... </Loader>}
              {errors.alternative && (
                <div className="question__alternatives--error">
                  {errors.alternative.message}
                </div>
              )}
            </form>
          </>
        )}
      </div>

      <div className="question__buttons">
        {showGoBack && <Button
          onClick={() => {
            history.push('/tutorial');
          }}
          shadow
        >
          Voltar
        </Button>}
        {(!result?.isCorrect || !showResult) && (
          <Button shadow form="question" type="submit" disabled={previousAlternative || isLoading}>
            Responder
          </Button>
        )}
      </div>
    </div>
  );
}

// Question.defaultProps = {
//   questionResults: [],
// };

// Question.propTypes = {
//   question: PropTypes.shape({
//     _id: PropTypes.string,
//     description: PropTypes.string.isRequired,
//     alternatives: PropTypes.oneOf([PropTypes.object]).isRequired,
//   }).isRequired,
//   questionResults: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])),
//   answerQuestion: PropTypes.func.isRequired,
//   getProgress: PropTypes.func.isRequired,
//   history: PropTypes.func.isRequired,
// };

const mapStateToProps = (state, props) => ({
  question: selectQuestion(state, props),
  questionResults: selectQuestionsResults(state),
  isLoading: isLoading(state)
});

const mapDispatchToProps = (dispatch) => ({
  answerQuestion: (answerData) => dispatch(answerQuestion(answerData)),
  getProgress: (questions) => dispatch(getProgress(questions)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Question)
);
