import React from 'react';
import Button from '../../components/Button';
import '../../index.css'
import './style.scss';
import useForm from '../../hooks/useForm';
import api from '../../services/api';
import { useHistory } from 'react-router-dom';



function Register() {
    const InitialValues = {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        personType: '',
    };
    const { handleOnChange, values } = useForm(InitialValues);

    const history = useHistory();

    async function handleRegister(e) {
        e.preventDefault();
        const data = {
            email: values.email,
            name: values.name,
            password: values.password,
            confirmPassword: values.confirmPassword,
            personType: values.personType,
        };
        try {
            const headers = {
                headers: {
                    'Content-Type': 'application/json',
                }
            };
            await api.post('users', data, headers);
            history.push('/');
        } catch (err) {
            alert('Erro no cadastro, tente novamente.')
        }


    }

    return (
        <>
            <div id="register">
                <div className="register__form">
                    <h1>Cadastro</h1>
                    <label>
                        <form onSubmit={handleRegister}>
                            <div className="register__inputs">
                                <div className="register__grid1">
                                    nome<input value={values.name} type="text" name="name" onChange={handleOnChange} />
                                    email
                                    <input value={values.email} type="text" name="email" placeholder="email@email.com" onChange={handleOnChange} />

                                </div>
                                <div className="register__grid2">
                                    senha <input value={values.password} type="password" name="password" onChange={handleOnChange} />
                                    confirmar senha
                                    <input value={values.confirmPassword} type="password" name="confirmPassword" onChange={handleOnChange} required />
                                </div>
                            </div>
                            <div className="register__options">
                                <div className="register__options--user">
                                    <p>tipo de cadastro</p>
                                    <label htmlFor="mentor"><input name="personType" value="mentor" type="radio" onChange={handleOnChange} /> mentora</label>
                                    <label htmlFor="learner"><input name="personType" value="learner" type="radio" onChange={handleOnChange} /> aprendiz</label>
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