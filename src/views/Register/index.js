import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { registerRequest } from '../../services/usersService';
import { isLoading } from '../../slices/usersSlice';
import Input from '../../components/FormField/components/Input';
import Select from '../../components/FormField/components/Select';
import Radio from '../../components/FormField/components/Radio';
import Button from '../../components/Button';
import Loader from '../../components/Loader';
import '../../index.css';
import './style.scss';
import MotionDiv from '../../UI/animation/MotionDiv';

/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/label-has-associated-control */
function Register({ registerRequest, isLoading }) {
  const { handleSubmit, register, watch, setValue, errors, setError } = useForm({
    defaultValues: {
      userType: null,
    },
  });
  const history = useHistory();
  const onSubmit = (credentials) => {
    registerRequest(credentials).then(res =>  {
      if (res.payload?.error === 'email') setError('email', {message: 'E-mail já cadastrado'})
    });
    history.push('/login');
  };

  return (
    <div className="register">
      <MotionDiv className="register__content"
        transition={{
            type: 'tween',
            ease: 'easeIn',
            duration: 0.3,
          }}
          variants={{
            initial: {
              opacity: 0,
              scale: 0.6,
            },
            in: {
              opacity: 1,
              scale: 1,
            },
            out: {
              opacity: 0,
              scale: 0.6,
            },
          }}
      >
        <div className="register__content--header">
          <h1>Cadastro</h1>
        </div>
        <div className="register__content--form">
          <form id="register-form" onSubmit={handleSubmit(onSubmit)}>
            <Input
              type="text"
              label="nome"
              name="name"
              placeholder="Nome"
              register={register({
                required: 'Campo obrigatório',
                pattern: {
                  value: /^[A-Za-z][A-Za-z\s]*$/,
                  message: 'Nome inválido',
                },
              })}
              errors={errors}
              autoComplete="off"
            />

            <Input
              type="text"
              label="sobrenome"
              name="lastname"
              placeholder="Sobrenome"
              register={register({
                required: 'Campo obrigatório',
                pattern: {
                  value: /^[A-Za-z][A-Za-z\s]*$/,
                  message: 'Nome inválido',
                },
              })}
              errors={errors}
              autoComplete="off"
            />

            <Input
              type="text"
              label="e-mail"
              name="email"
              placeholder="email@exemplo.com"
              register={register({
                required: 'Campo obrigatório',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'email inválido',
                },
              })}
              errors={errors}
              autoComplete="off"
            />

            <Select
              label="gênero"
              name="gender"
              onChange={() =>
                setValue('userType', null)
              }
              register={register({
                required: 'escolha um gênero',
                pattern: {
                  value: /^[A-Za-z]+ale$/,
                  message: 'Campo obrigatório',
                },
              })}
              errors={errors}
            > 
              <option value="Female">Feminino</option>
              <option value="Male">Masculino</option>
            </Select>

            <Input
              type="password"
              label="senha"
              name="password"
              placeholder="senha"
              register={register({
                required: 'Campo obrigatório',
                validate: (value) =>
                  value === watch('confirmPassword') || 'Senhas não coincidem',
                minLength: {
                  value: 6,
                  message: 'Tamanho mínimo é 6',
                },
              })}
              errors={errors}
              autoComplete="off"
            />

            <Input
              type="password"
              label="confirmar senha"
              name="confirmPassword"
              placeholder="confirmar senha"
              register={register({
                required: 'Campo obrigatório',
                validate: (value) =>
                  value === watch('password') || 'Senhas não coincidem',
                minLength: {
                  value: 6,
                  message: 'Tamanho mínimo é 6',
                },
              })}
              errors={errors}
              autoComplete="off"
            />

            <div className="register__content--form-radios">
              <span>tipo de cadastro</span>
              <Radio
                label="Aprendiz"
                name="userType"
                value="Learner"
                disabled={watch('gender') !== 'Female'}
                disabledMessage="Somente usuárias do gênero feminino"
                register={register({
                  required: 'Campo obrigatório',
                })}
                errors={errors}
              />

              <Radio
                label="Mentor"
                name="userType"
                value="Mentor"
                register={register({
                  required: 'Tipo de cadastro é obrigatório',
                })}
                errors={errors}
              />
              {errors.userType && (
                <div className="user-type-error">{errors.userType.message}</div>
              )}
            </div>
            {watch('userType') === 'Learner' && watch('gender') === 'Female' && (
              <div className="register__content--form-mentor-request">
                <label htmlFor="agree">
                  <input
                    name="mentor_request"
                    value
                    type="checkbox"
                    ref={register}
                  />
                  <span>
                    Solicitar mentor (Também poderá ser solicitado
                    posteriormente)
                  </span>
                </label>
              </div>
            )}

            <div className="register__content--form-agree">
              <label htmlFor="agree">
                <input
                  name="agree"
                  type="checkbox"
                  ref={register({
                    required: 'concorde com os termo de consentimento',
                  })}
                  // onChange={() => trigger()}
                />
                <span>
                  Li e concordo que para se cadastrar nesta plataforma, o
                  usuário que se identifica com gênero masculino só pode se
                  cadastrar como mentor e o usuário que se identifica com gênero
                  feminino pode escolher entre mentor e aprendiz
                </span>
              </label>
            </div>
          </form>
        </div>
        <div className="form-action">
          <Button
            type="submit"
            form="register-form"
            disabled={!watch('agree') || isLoading}
          >
            Cadastrar
          </Button>
          {isLoading && <Loader> Processando informações </Loader>}
        </div>
      </MotionDiv>
    </div>
  );
}

Register.propTypes = {
  registerRequest: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isLoading: isLoading(state),
});

const mapDispatchToProps = (dispatch) => ({
  registerRequest: (credentials) => dispatch(registerRequest(credentials)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
