import React from 'react';
import Button from '../../components/Button';
import '../../index.css'
import './style.css';
import useForm from '../../hooks/useForm';


function Register() {
    const InitialValues = {
        name: '',
        email: '',
        password: '',
        confirmPassword:'',
    };
    const { handleOnChange, values} = useForm(InitialValues);



    return (
        <>
            <div id="container">
                <div className="register-form">
                    <h1>Cadastro</h1>
                    <label>
                        <form onSubmit={function handleSubmit(e){
                            e.preventDefault();
                        }}>
                            <div className="register-inputs">
                                <div className="register-grid1">
                                    nome<input value={values.name} type="text" name="name" onChange={handleOnChange}/>
                                    senha <input value={values.password} type="password" name="password" onChange={handleOnChange} />
                                </div>
                                <div className="register-grid2">
                                    email<input value={values.email} type="text" name="email" placeholder="email@email.com" onChange={handleOnChange}/>
                                    confirmar senha <input value={values.confirmPassword} type="password" name="confirmPassword" onChange={handleOnChange}/>
                                </div>
                            </div>
                            <div className="register-options">
                                <div className="user-type">
                                    <p>tipo de cadastro</p>
                                    <label htmlFor="name"><input name="choice" type="radio" /> mentora</label>
                                    <label htmlFor="learner"><input name="choice" type="radio" /> aprendiz</label>
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