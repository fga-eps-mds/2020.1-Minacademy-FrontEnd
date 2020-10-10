import React, { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { selectQuestion, selectQuestionsResults } from '../../../../slices/tutorialSlice';
import { answerQuestion, getProgress } from '../../../../services/tutorialServices';
import './style.scss';
import Button from '../../../../components/Button';

function Activity({ question, questionResults, answerQuestion, getProgress, history}) {
  const { handleSubmit, register, errors } = useForm();

  const result = useMemo(() => questionResults.find(result => result.question === question._id), [questionResults]);

  const onSubmit = async alternative => {
    const response = await answerQuestion({ ...alternative, question: question._id })
    if (response.payload.isCorrect) {
      getProgress()
    }

  };

  const descriptionText = question.description.split('\n').map((i) => {
    return <p key={i}>{i}</p>;
  });

  return (
    <div className="activity">
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
                    <input name="alternative" value={item} type="radio" ref={register({ required: true })} />
                    {question.alternatives[item]}
                  </label>
                </div>
              ))}
              {result?.isCorrect === false && <div className="activity__alternatives--error">Resposta errada, tente novamente!</div>}
              {errors.alternative && <div className="activity__alternatives--error">Escolha uma alternativa</div>}
            </form>
          </>
        )}
        </div>
        <div className="activity__buttons">
          {!result?.isCorrect &&
            <Button
              shadow
              form='question'
              type="submit"
            >
              Responder
            </Button> }
            <Button
              onClick={() => history.push('/tutorial')}
              shadow
            >
              Voltar
            </Button>
        </div>
    </div>
  );
}

const mapStateToProps = (state, props) => ({
  question: selectQuestion(state, props),
  questionResults: selectQuestionsResults(state),
});

const mapDispatchToProps = dispatch => ({
  answerQuestion: answerData => dispatch(answerQuestion(answerData)),
  getProgress: questions => dispatch(getProgress(questions))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Activity));
