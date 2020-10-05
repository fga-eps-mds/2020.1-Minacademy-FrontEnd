import React, { Component } from 'react';
import Button from '../../components/Button';
import '../../index.css'
import './style.scss';
import { useForm } from 'react-hook-form';
import { registerRequest } from '../../services/usersService';
import './components/Checkbox/index'

function Register() {

    const { handleSubmit, register, watch, errors } = useForm();
    const onSubmit = registerRequest

    let userGender
    let registerType

    const genderChangeHandler = (event) => {
        userGender = event.target.value
        console.log(userGender)
    }

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
                                            minLength: {
                                                value: 6,
                                                message: "tamanho mínimo é 6",
                                            },
                                            validate: (value) => {
                                                const passwordMatches = value === watch('password');
                                                return passwordMatches || "As senhas nao coincidem"
                                            }
                                        })}

                                    />
                                    {(errors.confirmPassword && <span className="danger">{errors.confirmPassword.message} </span>) || <br />}
                                </label>
                            </div>
                            <div className="register__options">
                                <div className='register__options--gender'>
                                    <p>gênero</p>
                                    <label htmlFor="female"><input name="userGender" value="feminino" type="radio" onChange={genderChangeHandler} defaultChecked/> feminino</label>
                                    <label htmlFor="male"><input name="userGender" value="masculino" type="radio" onChange={genderChangeHandler}/> masculino</label>
                                </div>
                                {/*userGender==='feminino'?(<div className="register__options--user">
                                    <p>tipo de cadastro</p>
                                    <label htmlFor="mentor"><input name="userType" value="mentor" type="radio" ref={register} /> mentor</label>
                                    <label htmlFor="learner"><input name="userType" value="aprendiz" type="radio" ref={register} defaultChecked /> aprendiz</label>
                                    </div>):
                                    (<label htmlFor="genderWarning">Você será cadastrado como mentor, pois a plataforma requer que a aprendiz se identifique com o gênero feminino</label>)*/}
                            </div>
                            <Button>REGISTRAR</Button>
                        </form>
                    </label>
                </div>
            </div>
        </>
    );
}

export default Register;