import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Input from '../../components/FormField/components/Input';
import Button from '../../components/Button';
import { login } from '../../services/usersService';
import { isLoading } from '../../slices/usersSlice';
import { openWebSocket } from '../../services/websocket'
import Loader from '../../components/Loader';
import '../../index.css';
import './style.scss';
import MotionDiv from '../../UI/animation/MotionDiv';

/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/label-has-associated-control */
function Login({ login, isLoading }) {
  const { handleSubmit, register, errors } = useForm();

  const onSubmit = (credentials) => {
    login(credentials).then(res =>  openWebSocket(res.payload?.accessToken));
  };

  return (
    <>
      <div className="login">
        <MotionDiv className="login__body"
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
          <h1>Entrar</h1>
          <form id="login-form" className="login__body--form" onSubmit={handleSubmit(onSubmit)}>
            <Input
              type="text"
              label="e-mail"
              name="email"
              placeholder="email@exemplo.com"
              register={register({
                required: 'Campo obrigatório',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Email inválido',
                },
              })}
              errors={errors}
              autoComplete="on"
            />

            <Input
              type="password"
              label="senha"
              name="password"
              placeholder="senha"
              register={register({
                required: 'Campo obrigatório',
                minLength: {
                  value: 6,
                  message: 'Tamanho mínimo é 6',
                },
              })}
              errors={errors}
              autoComplete="off"
            />

          </form>
          <div className="form-action">
            <Button
              type="submit"
              form="login-form"
              shadow
              disabled={isLoading}
            >
              Login
            </Button>
            {isLoading && <Loader> Aguarde... </Loader>}
          </div>
          <div className="login__resources">
              <Link to="/forgotPassword">Recuperar senha</Link>
            <p>
              Não possui conta? <Link to="/cadastro">Cadastre-se</Link>
            </p>
          </div>
        </MotionDiv>
      </div>
    </>
  );
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isLoading: isLoading(state),
});

const mapDispatchToProps = (dispatch) => ({
  login: (credentials) => dispatch(login(credentials)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
