import React from 'react';
import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux'
import { selectCurrentUser } from '../../slices/usersSlice';
import { editUser } from '../../services/usersService';
import avatar  from '../../assets/images/avatar.svg'
import Button from '../../components/Button';
import '../../index.css'
import './style.scss';

/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/label-has-associated-control */
function Profile({ currentUser, editUser }) {
    const { handleSubmit, register, errors } = useForm();

    const onSubmit = data => {
        editUser(data)
    }

    return (
        <>
            <div id="profile">
                <div className="profile__form">
                    <div className="profile__form--infos">
                        <img src={currentUser.profileImg || avatar} alt="" />
                        <div>
                            <h1>Perfil</h1>
                            <p>Adicione ou edite suas informações</p>
                        </div>
                        <Button>{`${currentUser.userType.toUpperCase()}${currentUser.isValidated ? ' EM ESPERA':''}`}</Button>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="profile__inputs">
                            <label htmlFor="name">nome</label>
                                <input
                                    type="text"
                                    name="name"
                                    defaultValue={currentUser.name}
                                    ref={register({
                                        required: "campo obrigatório",
                                        pattern: {
                                            value: /^[A-Za-z][A-Za-z\s]*$/,
                                            message: "Nome inválido"
                                        }
                                    })} />

                                {(errors.name && <span className="danger">{errors.name.message}</span>) || <br />}
                
                            <label htmlFor="email">email</label>
                                <p>email</p> <input
                                    type="text"
                                    name="email"
                                    placeholder="email@email.com"
                                    defaultValue={currentUser.email}
                                    ref={register({
                                        required: "campo obrigatório",
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: "email inválido"
                                        }
                                    })}
                                />
                                {(errors.email && <span className="danger">{errors.email.message}</span>) || <br />}

                            <label htmlFor="about">sobre você</label>
                                <p>sobre você</p> <textarea
                                    type="textarea"
                                    name="about"
                                    placeholder="Digite aqui uma mensagem sobre vocẽ"
                                    defaultValue={currentUser.about}
                                    ref={register({
                                        maxLength: {
                                            value: 300,
                                            message: "máximo de caracteres: 300"
                                        }
                                    })}
                                />
                                {(errors.about && <span className="danger">{errors.about.message}</span>) || <br />}

                            <label htmlFor="profileImg">
                                <span>Link da sua foto</span> <small>(comece com https://)</small>
                                <input
                                    name="profileImg"
                                    defaultValue={currentUser.profileImg}
                                    type="url"
                                    ref={register} />
                            </label>
                        </div>
                        <Button type="submit">ATUALIZAR</Button>
                    </form>
                </div>
            </div>
        </>
    );
}

Profile.propTypes = {
    currentUser: PropTypes.oneOfType([
        PropTypes.oneOf([null]),
        PropTypes.object
      ]).isRequired,
      editUser: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    currentUser: selectCurrentUser(state)
})

const mapDispatchToProps = dispatch => ({
    editUser: (data) => dispatch(editUser(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile)