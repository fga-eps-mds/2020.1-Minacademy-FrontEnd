import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';
import { registerRequest } from '../../services/usersService';
import Button from '../../components/Button';
import '../../index.css'
import './style.scss';

/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/label-has-associated-control */
function Register({ registerRequest }) {
    const { handleSubmit, register, watch, errors, getValues } = useForm();

    const onSubmit = async (credentials) => {
        await registerRequest(credentials);
    };

    const [gender, setGender] = useState(false);
    const toggle = () => (
        getValues("gender") === "Female" ? setGender(true) : setGender(false)
    );

    const [type, setType] = useState(false);
    const toggleType = () => (
        getValues("userType") === "Learner" ? setType(true) : setType(false)
    );

    return (
    <>
        <div id="register">
            <div className="register__form">
                <h1>Cadastro</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="register__inputs">
                            <label>
                                <p>Nome</p><input type="text" name="name" ref={register({
                                    required: "campo obrigatório",
                                    pattern: {
                                        value: /^[A-Za-z][A-Za-z\s]*$/,
                                        message: "Nome requer apenas letras"
                                    }
                                })} />
                                {(errors.name && <span className="danger">{errors.name.message}</span>) || <br />}
                            </label>
                            <label>
                                <p>Sobrenome</p><input type="text" name="lastname" ref={register({
                                    required: "campo obrigatório",
                                    pattern: {
                                        value: /^[A-Za-z][A-Za-z\s]*$/,
                                        message: "Sobrenome requer apenas letras"
                                    }
                                })} />
                                {(errors.lastname && <span className="danger">{errors.lastname.message}</span>) || <br />}
                            </label>
                            <label>
                                <p>E-mail</p> <input
                                    type="text"
                                    name="email"
                                    placeholder="email@email.com"
                                    ref={register({
                                        required: "campo obrigatório",
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: "email inválido"
                                        },
                                    })}
                                />
                                {(errors.email && <span className="danger">{errors.email.message}</span>) || <br />}
                            </label>
                            <label className="register__gender">
                                <p>Gênero</p>
                                <select name="gender" onChange={toggle} ref={register({
                                    required: true,
                                    pattern: {
                                        value: /^[A-Za-z]+ale$/,
                                        message: "escolha um gênero"
                                    }
                                })}>
                                    <option>Selecione</option>
                                    <option value="Female">Feminino</option>
                                    <option value="Male">Masculino</option>
                                </select>
                                {(errors.gender && <span className="danger">{errors.gender.message}</span>) || <br />}
                            </label>
                            <label>
                                <p>Senha</p> <input
                                    type="password"
                                    name="password"
                                    ref={register({
                                        required: "campo obrigatório",
                                        validate: {
                                            strongpassword: value => {
                                                let message = "";

                                                if (value.length < 8) message += " mais de 8 caracteres;";

                                                const lower = /[a-z]/;
                                                if (!lower.test(value)) message += " letras minúsculas;";

                                                const upper = /[A-Z]/;
                                                if (!upper.test(value)) message += " letras maiúsculas;";

                                                const num = /[0-9]/;
                                                if (!num.test(value)) message += " números;";

                                                return message === "" ? true : `a senha precisa de${  message}`;
                                            }
                                        }
                                    })}
                                />
                                {(errors.password && <span className="danger">{errors.password.message}</span>) || <br />}
                            </label>
                            <label>
                                <p>Confirmar Senha</p> <input
                                    type="password"
                                    name="confirmPassword"
                                    ref={register({
                                        required: "campo obrigatório",
                                        validate: (value) => {
                                            const passwordMatches = value === watch('password');
                                            return passwordMatches || "As senhas não coincidem"
                                        }
                                    })}
                                />
                                {(errors.confirmPassword && <span className="danger">{errors.confirmPassword.message} </span>) || <br />}
                            </label>
                        </div>
                        <div className="register__options">
                            <div className="register__options--user">
                                <p>tipo de cadastro</p>
                                <label htmlFor="Mentor"><input name="userType" value="Mentor" type="radio" ref={register} onChange={toggleType} defaultChecked /> mentor</label>
                                {(gender && <label htmlFor="Learner"><input name="userType" value="Learner" type="radio" onChange={toggleType} ref={register} /> aprendiz</label>)}
                            </div>
                            {type && <div className="register__options--mentorship">
                                <label htmlFor='Mentorship'><input name="mentor_request" value="true" type="checkbox" ref={register} />Solicitar mentor (Também poderá ser solicitado posteriormente)</label>
                            </div>}
                            <label htmlFor="agree"><input name="agree" type="checkbox" ref={register({
                                required: "concorde com os termo de consentimento",
                            })} /> Li e concordo que para se cadastrar nesta plataforma,
                                o usuário que se identifica com gênero masculino só pode se cadastrar como mentor
                                e o usuário que se identifica com gênero feminino pode escolher entre mentor e aprendiz</label>
                            {errors.agree && <span className="danger">{errors.agree.message}</span>}
                        </div>
                        <Button type="submit">REGISTRAR</Button>
                    </form>
            </div>
        </div>
    </>
);
}

Register.propTypes = { 
    registerRequest: PropTypes.func.isRequired,
}

const mapDispatchToProps = (dispatch) => ({
registerRequest: (credentials) => dispatch(registerRequest(credentials))
});

export default connect(null, mapDispatchToProps)(Register);