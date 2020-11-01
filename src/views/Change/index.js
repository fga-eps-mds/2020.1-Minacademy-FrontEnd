import React from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { changeUserPassword } from '../../services/usersService';
import Button from '../../components/Button';
import Input from '../../components/FormField/components/Input'
import '../../index.css';
import './style.scss';


function Change() {
  const { handleSubmit, register, errors, watch } = useForm();
  const history = useHistory();
  const { resetLink } = useParams();
  const onSubmit = (values) => {
    changeUserPassword({ password: values.password, resetLink });
    history.push('/login')
  }

  return (
    <>
      <div className="change">
        <div className="change__form">
          <h1>Troque sua senha</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <p className='new-password'>nova senha</p>
            <Input
              type="password"
              name="password"
              placeholder="nova senha"
              errors={errors}
              register={register({
                required: 'Campo obrigatório',
                validate: (value) =>
                  value === watch('confirmPassword') || 'Senhas não coincidem',
                minLength: {
                  value: 6,
                  message: "tamanho mínimo é 6"
                },
              })}
              autoComplete="off"
            />
            <p className='confirm-password'>confirme a nova senha</p>
            <Input
              type="password"
              name="confirmPassword"
              placeholder="confirmar senha"
              errors={errors}
              register={register({
                required: 'Campo obrigatório',
                validate: (value) =>
                  value === watch('password') || 'Senhas não coincidem',
                minLength: {
                  value: 6,
                  message: "tamanho mínimo é 6"
                },
              })}
              autoComplete="off"
            />
            <Button small>SALVAR</Button>
            <p className='login-link'>Já tem login e senha? <Link to="/login">Entrar</Link></p>
          </form>
        </div>
      </div>
    </>
  );
}

export default Change;