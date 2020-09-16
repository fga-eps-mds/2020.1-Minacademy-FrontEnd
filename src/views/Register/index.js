import React from 'react';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';
import '../../index.css'
import './style.css';

function Register() {
    return (
        <>
            <div id="container">
                <div className="register-form">
                    <h1>Cadastro</h1>
                    <label>
                        <form action="/login" >
                            <div className="register-inputs">
                                <div className="register-grid1">
                                    nome<input value="name" type="text" name="email" placeholder="email@email.com" />
                                    email <input value="senha" type="password" name="password" />
                                </div>
                                <div className="register-grid2">
                                    senha<input value="name" type="text" name="email" placeholder="email@email.com" />
                                    confirmar senha <input value="senha" type="password" name="password" />
                                </div>
                            </div>
                            <div className="register-options">
                                <div className="user-type">
                                    <p>tipo de cadastro</p>
                                    <label htmlfor="name"><input name="choice" type="radio" /> mentora</label>
                                    <label htmlfor="learner"><input name="choice" type="radio" /> aprendiz</label>
                                </div>
                                <label htmlFor="agree"><input name="agree" type="checkbox" /> Concordo que este tutorial é somente para aqueles que se identificam com o gênero feminino.</label>
                                <label htmlFor="terms"><input name="terms" type="checkbox" /> Concordo com os termos de uso.</label>
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