import React from 'react';
import '../../index.css';
import './style.scss';
import { selectCurrentModule } from '../../slices/tutorialSlice';
import { selectCurrentUser } from '../../slices/usersSlice';
import { connect } from 'react-redux';

function Dashboard({ currentUser, currentModule }) {
  return (
    <>
      <div className="dashboard">
        <div className="dashboard__header">
          <h1>Olá, {currentUser.name}</h1>
          <p>Aqui você pode acompanhar seu progresso, contatar um mentor ou mentora e acessar seus certificados.</p>
        </div>
        <div className="dashboard__body">
          <div className="dashboard__body--card">
            <p className="dashboard__body--card-title"> 12% completo</p>
            <p  className="dashboard__body--card-content-emphasis">Módulo {currentModule}: Introdução a linha de comando</p>
            <p  className="dashboard__body--card-content">3 atividades restantes</p>
            <a className="dashboard__body--card-link" href="/tutorial">continuar tutorial</a>
          </div>
          <div className="dashboard__body--card">
            <p className="dashboard__body--card-title"> certificados</p>
            <p className="dashboard__body--card-content-emphasis">
              Certificado de conclusão do tutorial <span>básico</span>
            </p>
            <a className="dashboard__body--card-link" href="exemplo">acessar certificados</a>
          </div>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state),
  currentModule: selectCurrentModule(state),
});

export default connect(mapStateToProps)(Dashboard);
