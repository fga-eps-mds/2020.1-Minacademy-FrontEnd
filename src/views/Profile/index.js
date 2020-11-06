import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { selectCurrentUser, isLoading } from '../../slices/usersSlice';
import { editUser } from '../../services/usersService';
import Button from '../../components/Button';
import Input from '../../components/FormField/components/Input';
import Loader from '../../components/Loader';
import '../../index.css';
import './style.scss';
import {useHistory} from 'react-router-dom'; // useHistory

/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/label-has-associated-control */
function Profile({ currentUser, editUser, isLoading }) {
  const { handleSubmit, register, errors, formState, reset } = useForm();
  const history = useHistory();

  const onSubmit = async (data) => {
    const payload = { ...formState.dirtyFields };
    Object.keys(payload).forEach((field) => (payload[field] = data[field])); // eslint-disable-line no-return-assign
    await editUser(payload);
    //if(currentUser.showMessageConfirm) history.push('/dashboard');
    reset()
  };

  return (
    <div className="profile">
      <div className="profile__header">
        <h1>Perfil</h1>
      <h5>{(currentUser.userType === "Learner")? "Aprendiz" : "Mentor"}</h5>
        <p>Adicione ou edite suas informações</p>
      </div>
      <div className="profile__content">
        <div className="profile__content--form">
          <form id="profile-form" onSubmit={handleSubmit(onSubmit)}>
            <Input
              type="text"
              label="nome"
              name="name"
              placeholder="Nome"
              defaultValue={currentUser.name}
              register={register({
                required: 'Campo obrigatório',
                pattern: {
                  value: /^[A-Za-z][A-Za-z\s]*$/,
                  message: 'Nome inválido',
                },
              })}
              errors={errors}
              autoComplete="off"
            />

            <Input
              type="text"
              label="sobrenome"
              name="lastname"
              placeholder="Sobrenome"
              defaultValue={currentUser.lastname}
              register={register({
                required: 'Campo obrigatório',
                pattern: {
                  value: /^[A-Za-z][A-Za-z\s]*$/,
                  message: 'Nome inválido',
                },
              })}
              errors={errors}
              autoComplete="off"
            />

            <Input
              type="text"
              label="e-mail"
              name="email"
              placeholder="email@exemplo.com"
              defaultValue={currentUser.email}
              register={register({
                required: 'Campo obrigatório',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'email inválido',
                },
              })}
              errors={errors}
              autoComplete="off"
            />
          </form>
        </div>
        <div className="form-action">
          <Button type="submit" form="profile-form" disabled={!formState.isDirty || isLoading}>
            ATUALIZAR
          </Button>
          {isLoading && <Loader> Atualizando informações </Loader>}
        </div>
          {currentUser.showMessageConfirm && (
            <div>Um email foi enviado para seu endereço de email atual. Verifique sua caixa de emails e siga as instruções para confirmar a alteração do email.</div>
          )
          }
      </div>
    </div>
  );
}

Profile.propTypes = {
  currentUser: PropTypes.oneOfType([PropTypes.oneOf([null]), PropTypes.object])
    .isRequired,
  editUser: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state),
  isLoading: isLoading(state),
});

const mapDispatchToProps = (dispatch) => ({
  editUser: (data) => dispatch(editUser(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
