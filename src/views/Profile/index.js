import React from 'react';
import Button from '../../components/Button';
import '../../index.css'
import './style.scss';
import avatar  from '../../assets/images/avatar.svg'
import { useForm } from 'react-hook-form';
import { editUser } from '../../services/usersService';
import { selectCurrentUser, setCurrentUser } from '../../slices/usersSlice';
import { connect, useDispatch } from 'react-redux'


function Profile({ currentUser }) {
    const { handleSubmit, register, errors } = useForm();

    const dispatch = useDispatch();
    const onSubmit = async (data) => {
        data.userType = currentUser.userType
        await editUser(data)
        dispatch(setCurrentUser(data))
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
                        <Button>{currentUser.userType.toUpperCase()}{currentUser.isValidated === false ? " EM ESPERA" : ""}</Button>
                    </div>
                    <label>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="profile__inputs">
                                <label>
                                    <p>nome</p><input
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
                                </label>
                                <label>
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
                                </label>

                                <label>
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
                                </label>

                                <label htmlFor="profileImg">
                                    <span>Link da sua foto</span> <small>(comece com https://)</small>
                                    <input
                                        name="profileImg"
                                        defaultValue={currentUser.profileImg}
                                        type="url"
                                        ref={register} />
                                </label>
                            </div>
                            
                            <Button>ATUALIZAR</Button>

                        </form>
                    </label>
                </div>
            </div>
        </>
    );
}

const mapStateToProps = state => ({
    currentUser: selectCurrentUser(state)
})

const mapDispatchToProps = { setCurrentUser }

export default connect(mapStateToProps, mapDispatchToProps)(Profile)