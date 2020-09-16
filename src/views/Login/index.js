import React from 'react';
import Button from '../../components/Button';
import {Link} from 'react-router-dom';
import '../../index.css'
import './style.css';

function Login() {
    return (
        <>
            <div id="container">
                <div className="login-form">
                    <h1>Entrar</h1>
                    <label>
                        <form onSubmit={function (e) {
                            e.preventDefault()
                        }}>
                            e-mail<input value="name" type="text" name="email" placeholder="email@email.com" />
                            senha <input value="senha" type="password" name="password" />
                            <Button>LOGIN</Button>
                        </form>
                    </label>
                    <div className="login-resources">
                        <p>Recuperar senha</p>
                        <p>Não possui conta? <Link to="/cadastro">Cadastra-se</Link></p>
                    </div>
                </div>
            </div>
        </>
    );
}


export default Login;