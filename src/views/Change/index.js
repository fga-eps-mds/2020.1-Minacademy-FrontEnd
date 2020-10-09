import React, {useEffect} from 'react';
import Button from '../../components/Button';
import '../../index.css'
import './style.scss';
import { Link, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { changeUserPassword  } from '../../services/usersService';
import {forgotPassword} from '../../services/usersService';

function Change() {
    const { handleSubmit, register, watch, errors } = useForm();
    const {resetLink} = useParams();
    const onSubmit = (values)=>{
        console.log(resetLink);
        changeUserPassword({password: values.password, resetLink: resetLink});
    }

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