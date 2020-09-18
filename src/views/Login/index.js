import React from 'react';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';
import '../../index.css'
import './style.scss';
import { useForm } from 'react-hook-form';

function Login() {

    const { handleSubmit, register, errors } = useForm();
    const onSubmit = values => console.log(values);

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
                                    required: "required",
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: "email inválido"
                                    }
                                })}
                            />
                            {errors.email && <span className="danger">{errors.email.message}</span>}
                            <p>senha</p>
                            <input type="password" name="password" ref={register({
                                required: "required",
                                minLength: {
                                    value: 6,
                                    message: "tamanho mínimo é 6"
                                }
                            })}
                            />
                            {errors.password && <span className="danger">{errors.password.message}</span>}
                            <Button>LOGIN</Button>
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


export default Login;