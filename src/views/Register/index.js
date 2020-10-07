import React, {useState} from 'react';
import Button from '../../components/Button';
import '../../index.css'
import './style.scss';
import { useForm } from 'react-hook-form';
import { registerRequest } from '../../services/usersService';

function Register() {
    const { handleSubmit, register, watch, errors, getValues } = useForm();
    const onSubmit = registerRequest
    const [gender, setGender] = useState(false);
    function toggle (){
        getValues("gender")==="Female"?setGender(true):setGender(false);
    };

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
                            <div className="register__gender">
                                <p>gênero que se identifica</p>
                                <select name="gender" onChange={toggle} ref={register({
                                    required: true,
                                    pattern:{
                                        value: /^[A-Za-z]+ale$/,
                                        message: "campo obrigatorio"
                                    }})}>
                                    <option>Selecione</option>
                                    <option value="Female">Feminino</option>
                                    <option value="Male">Masculino</option>
                                </select>
                                {(errors.gender && <span className="danger">{errors.gender.message}</span>) || <br />}
                            </div>
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
                                                value: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])$/,
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
                                    <label htmlFor="mentor"><input name="userType" value="mentor" type="radio" ref={register} defaultChecked /> mentor</label>
                                    {(gender && <label htmlFor="learner"><input name="userType" value="aprendiz" type="radio" ref={register} /> aprendiz</label>)}
                                </div>
                                <label htmlFor="agree"><input name="agree" type="checkbox" ref={register({
                                    required: "concorde com os termo de consentimento",
                                })} /> Li e concordo que para se cadastrar nesta plataforma,
                                 o usuário que se identifica com gênero masculino só pode se cadastrar como mentor
                                 e o usuário que se identifica com gênero feminino pode escolher entre mentor e aprendiz</label>
                                {errors.agree && <span className="danger">{errors.agree.message}</span>}
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