import React, { Component } from 'react';
import Button from '../../../../components/Button';
import { useForm } from 'react-hook-form';
import { registerRequest } from '../../../../services/usersService';

function MaleRegister() {

    const { handleSubmit, register, watch, errors } = useForm();
    const onSubmit = registerRequest

    return (
        <>
            <div id="register">
                <div className="register__form">
                    <h1>Cadastro</h1>
                    <label>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="register__inputs">
                                <label>
                                    <p>nome</p><input type="text" name="name" ref={register({
                                        required: "campo obrigatório",
                                        pattern: {
                                            value: /^[A-Za-z][A-Za-z\s]*$/,
                                            message: "Nome inválido"
                                        }
                                    })} />
                                    {(errors.name && <span className="danger">{errors.name.message}</span>) || <br />}
                                </label>
                                <label>
                                    <p>email</p> <input
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
                                    {(errors.email && <span className="danger">{errors.email.message}</span>) || <br />}
                                </label>

                                <label>
                                    <p>senha</p> <input
                                        type="password"
                                        name="password"
                                        ref={register({
                                            required: "campo obrigatório",
                                            minLength: {
                                                value: 6,
                                                message: "tamanho mínimo é 6"
                                            },
                                            pattern: {
                                                value: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8})$/,
                                                message: "utilize numeros, letras maiusculas e minusculas"
                                            }
                                        })}
                                    />
                                    {(errors.password && <span className="danger">{errors.password.message}</span>) || <br />}
                                </label>

                                <label>
                                    <p>confirmar senha</p> <input
                                        type="password"
                                        name="confirmPassword"
                                        ref={register({
                                            required: "campo obrigatório",
                                            validate: (value) => {
                                                const passwordMatches = value === watch('password');
                                                return passwordMatches ? passwordMatches : "As senhas nao coincidem"
                                            }
                                        })}

                                    />
                                    {(errors.confirmPassword && <span className="danger">{errors.confirmPassword.message} </span>) || <br />}
                                </label>
                            </div>
                            <div className="register__options">
                                <div className="register__options--user">
                                    <p>tipo de cadastro</p>
                                    <label htmlFor="mentor"><input name="userType" value="mentor" type="radio" ref={register} defaultChecked/> Você será cadastrado como mentor, pois a plataforma permite apenas aprendizes que se identificam com o gênero feminino.</label>
                                    </div>
                            </div>
                            <Button>REGISTRAR</Button>
                        </form>
                    </label>
                </div>
            </div>
        </>
    );
}

export default MaleRegister;