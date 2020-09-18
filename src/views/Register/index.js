import React from 'react';
import Button from '../../components/Button';
import '../../index.css'
import './style.scss';
import api from '../../services/api';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';



function Register() {
    const history = useHistory()
    const { handleSubmit, register, errors } = useForm();
    const onSubmit = async (values) => {
        try {
            const headers = {
                headers: {
                    'Content-Type': 'application/json',
                }
            };
            await api.post('users', values, headers);
            history.push('/');
        } catch (err) {
            alert('Erro no cadastro, tente novamente.')
        }
        console.log(values)
    }
    return (
        <>
            <div id="register">
                <div className="register__form">
                    <h1>Cadastro</h1>
                    <label>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="register__inputs">
                                <div className="register__grid1">
                                    <p>nome</p><input type="text" name="name" ref={register({
                                        required: "campo obrigatório",
                                        pattern: {
                                            value: /^[a-z][a-z\s]*$/,
                                            message: "Nome inválido"
                                        }
                                    })} />
                                    {(errors.name && <span className="danger">{errors.name.message}</span>) || <br/>}
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
                                    {errors.email && <span className="danger">{errors.email.message}</span>}
                                </div>
                                <div className="register__grid2">
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

                                    <p>confirmar senha</p> <input
                                        type="password"
                                        name="confirmPassword"
                                        ref={register({
                                            required: "required",
                                            minLength: {
                                                value: 6,
                                                message: "tamanho mínimo é 6"
                                            }
                                        })}
                                    />
                                    {errors.confirmPassword && <span className="danger">{errors.confirmPassword.message}</span>}
                                </div>
                            </div>
                            <div className="register__options">
                                <div className="register__options--user">
                                    <p>tipo de cadastro</p>
                                    <label htmlFor="mentor"><input name="personType" value="mentor" type="radio" ref={register} /> mentora</label>
                                    <label htmlFor="learner"><input name="personType" value="learner" type="radio" ref={register} /> aprendiz</label>
                                </div>
                                <label htmlFor="agree"><input name="agree" type="checkbox" ref={register({
                                    required: "concorde com os termos de uso",

                                })} /> Concordo que este tutorial é somente para aqueles que se identificam com o gênero feminino.</label>
                                <label htmlFor="terms"><input name="terms" type="checkbox" ref={register({
                                    required: "concorde com os termos de uso",
                                })} /> Concordo com os termos de uso.</label>
                                {errors.terms && <span className="danger">{errors.terms.message}</span>}
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