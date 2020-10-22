import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Input from '../../components/FormField/components/Input';
import Button from '../../components/Button';
import { login } from '../../services/usersService';
import '../../index.css';
import './style.scss';

/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/label-has-associated-control */
function Login({ login }) {
  const { handleSubmit, register, errors } = useForm();

  const onSubmit = (credentials) => {
    login(credentials);
  };

  return (
    <>
      <div className="login">
        <div className="login__body">
          <h1>Entrar</h1>
          <form className="login__body--form" onSubmit={handleSubmit(onSubmit)}>
            <Input
              type="text"
              label="e-mail"
              name="email"
              placeholder="email@email.com"
              register={register}
              required="Campo obrigatório"
              pattern={{
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'email inválido',
              }}
              errors={errors}
            />

            <Input
              type="password"
              label="senha"
              name="password"
              register={register}
              required="campo obrigatório"
              minLength={{
                value: 6,
                message: 'tamanho mínimo é 6',
              }}
              errors={errors}
            />

            <Button type="submit" small>
              Login
            </Button>
          </form>
          <div className="login__resources">
            <p>
              <Link to="/forgotPassword">Recuperar senha</Link>
            </p>
            <p>
              Não possui conta? <Link to="/cadastro">Cadastre-se</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  login: (credentials) => dispatch(login(credentials)),
});

export default connect(null, mapDispatchToProps)(Login);
