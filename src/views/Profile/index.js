import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux'; 
import { toast } from 'react-toastify';
import { selectCurrentUser, isLoading } from '../../slices/usersSlice';
import { editUser } from '../../services/usersService';
import Button from '../../components/Button';
import Input from '../../components/FormField/components/Input';
import Loader from '../../components/Loader';
import '../../index.css';
import './style.scss';

/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/label-has-associated-control */
function Profile({ currentUser, editUser, isLoading }) {
  const { handleSubmit, register, errors, reset } = useForm();

  const onSubmit = (data) => {
    if (data.email === currentUser.email && data.name === currentUser.name && data.lastname === currentUser.lastname) {
      toast.error('Você não alterou nenhum campo!')
    } else {
      editUser(data);
      reset();
    }
  };

  let emailLabel = 'e-mail';
  if (currentUser.changeEmail) emailLabel = 'e-mail: Aguardando confimação de alteração'
  
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
              label={emailLabel}
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
          <Button type="submit" form="profile-form" disabled={isLoading}>
            ATUALIZAR
          </Button>
          {isLoading && <Loader> Atualizando informações </Loader>}
        </div>
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
