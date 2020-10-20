import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
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
                    <form
                        className="login__body--form"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <label htmlFor='email' >e-mail</label>
                        <input
                            className="login__body--form-input"
                            type="text"
                            name="email"
                            placeholder="email@email.com"
                            ref={register({
                                required: 'campo obrigatório',
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: 'email inválido',
                                },
                            })}
                        />
                        {errors.email && <span className="danger">{errors.email.message}</span>}
                        <label htmlFor='email'>senha</label>
                        <input
                            className="login__body--form-input"
                            type="password"
                            name="password"
                            ref={register({
                                required: 'campo obrigatório',
                                minLength: {
                                    value: 6,
                                    message: 'tamanho mínimo é 6',
                                },
                            })}
                        />
                        {errors.password && <span className="danger">{errors.password.message}</span>}
                        <Button type="submit" small>Login</Button>
                    </form>
                    <div className="login__resources">
                        <p><Link to ="/forgotPassword">Recuperar senha</Link></p>
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