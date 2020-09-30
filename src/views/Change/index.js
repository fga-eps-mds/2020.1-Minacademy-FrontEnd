import React from 'react';
import Button from '../../components/Button';
import '../../index.css'
import './style.scss';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
<<<<<<< HEAD
import { changeUserPassword  } from '../../services/usersService';
=======
import { changePassword } from '../../services/usersService';
>>>>>>> Implementaçao das Telas de Recuperaçao e Alteraçao de Senha

function Change() {

    const { handleSubmit, register, watch, errors } = useForm();
<<<<<<< HEAD
    const onSubmit = changeUserPassword 
=======
    const onSubmit = changePassword
>>>>>>> Implementaçao das Telas de Recuperaçao e Alteraçao de Senha

    return (
        <>
        <div className="change">
            <div className="change__form">
                <h1>Troque sua senha</h1>
                <label>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <p>Nova senha</p>
                        <input 
                            type="password" 
                            name="password" 
                            placeholder="●●●●●●●●"
                            ref={register({
                            required: "campo obrigatório",
                            minLength: {
                                value: 6,
                                message: "tamanho mínimo é 6"
                            }
                        })}
                        />
                        {errors.password && <span className="danger">{errors.password.message}</span>}
                        <p>Confirme a nova senha</p>
                        <input 
                            type="password" 
                            name="password" 
                            placeholder="●●●●●●●●"
                            ref={register({
                            required: "campo obrigatório",
                            minLength: {
                                value: 6,
                                message: "tamanho mínimo é 6"
                            }
                        })}
                        />
                        {errors.password && <span className="danger">{errors.password.message}</span>}
                        <Button small>SALVAR</Button>
                        <p>Já tem login e senha? <Link to="/login">Entrar</Link></p>
                    </form>
                </label>
            </div>
        </div>
        </>
    );
}

export default Change;