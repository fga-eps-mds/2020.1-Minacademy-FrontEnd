import React from 'react';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';
import '../../index.css'
import './style.css';
import useForm from '../../hooks/useForm';

function Login() {
    const InitialValues = {
        email: '',
        password: '',
    };
    const { handleOnChange, values} = useForm(InitialValues);
    
    return (
        <>
            <div id="container">
                <div className="login-form">
                    <h1>Entrar</h1>
                    <label>
                        <form onSubmit={function handleSubmit(e) {
                            e.preventDefault();
                        }}>
                            e-mail<input value={values.name} type="text" name="email" placeholder="email@email.com" onChange={handleOnChange}/>
                            senha <input value={values.password} type="password" name="password" onChange={handleOnChange}/>
                            <Button>LOGIN</Button>
                        </form>
                    </label>
                    <div className="login-resources">
                        <p>Recuperar senha</p>
                        <p>Não possui conta? <Link to="/cadastro">Cadastre-se</Link></p>
                    </div>
                </div>
            </div>
        </>
    );
}


export default Login;