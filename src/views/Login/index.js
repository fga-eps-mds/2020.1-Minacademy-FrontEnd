import React from 'react';
import { connect } from 'react-redux';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { login } from '../../services/usersService';
import '../../index.css';
import './style.scss';

function Login({ login }) {
    const { handleSubmit, register, errors } = useForm();

    const onSubmit = async (credentials) => {
        login(credentials)
    }
    
    return (
        <>
            <div className="login">
                <div className="login__form">
                    <h1>Entrar</h1>
                    <label>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <p>e-mail</p>
                            <input
                                type="text"
                                name="email"
                                placeholder="email@email.com"
                                ref={register({
                                    required: "campo obrigatório",
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: "email inválido"
                                    }
                                })}
                            />
                            {errors.email && <span className="danger">{errors.email.message}</span>}
                            <p>senha</p>
                            <input type="password" name="password" ref={register({
                                required: "campo obrigatório",
                                minLength: {
                                    value: 6,
                                    message: "tamanho mínimo é 6"
                                }
                            })}
                            />
                            {errors.password && <span className="danger">{errors.password.message}</span>}
                            <Button small>LOGIN</Button>
                        </form>
                    </label>
                    <div className="login__resources">
                        <p>Recuperar senha</p>
                        <p>Não possui conta? <Link to="/cadastro">Cadastre-se</Link></p>
                    </div>
                </div>
            </div>
        </>
    );
}

const mapDispatchToProps = dispatch => ({
    login: credentials => dispatch(login(credentials))
})

export default connect(null, mapDispatchToProps)(Login);