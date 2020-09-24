import React from 'react';
import '../../index.css'
import './style.scss';
import { selectCurrentModule } from '../../slices/tutorialSlice';
import { selectCurrentUser} from '../../slices/usersSlice';
import { connect } from 'react-redux'


function Dashboard({ currentUser, currentModule}) {

    return (
        <>
            <div id="profile">
                <div className="dashboard__container">
                    <div className="dashboard__container--head">
                        <h1>Olá {currentUser.name}</h1>
                        <p>Aqui você pode acompanhar seu progresso, contatar um mentor ou mentora e acessar seus certificados</p>
                    </div>
                    <div className="dashboard__container--body" >
                        <div className="dashboard__container--info">
                            <p> 12% completo</p>
                            <p>Módulo {currentModule}: Introdução a linha de comando</p>
                            <p>3 atividades restantes</p>
                            <a href="/tutorial">continuar tutorial</a>

                        </div>
                        <div className="dashboard__container--info">
                            <p> ultima tentativa no fórum</p>
                            <p>o mentor joãozinho respondeu a sua dúvida ontem!</p>
                            <p>tópico:instalação</p>
                            <a href="exemplo">ir para o fórum</a>
                        </div>
                        <div className="dashboard__container--info">
                            <p> certificados</p>
                            <p>Certificado de conclusão do tutorial <span>básico</span></p>
                            <a href="exemplo">acessar certificados</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

const mapStateToProps = state => ({
    currentUser: selectCurrentUser(state),
    currentModule: selectCurrentModule(state)
});


export default connect(mapStateToProps)(Dashboard)