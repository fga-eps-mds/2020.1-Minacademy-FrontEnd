import React from 'react';
import '../../index.css';
import './style.scss';
import { Link } from 'react-router-dom';
function Footer() {
    return (
        <div className="footer">
            <footer>
                <div className="footer__body">
                    <div className="footer__body--mina">
                        <p>CONTRIBUA</p>
                        <ul>
                            <li><a target="_blank" href="https://fga-eps-mds.github.io/2020.1-Minacademy-Wiki/documentos/doc_arqui/">Documentação</a></li>
                            <li><a target="_blank" href="https://github.com/fga-eps-mds/2020.1-Minacademy-FrontEnd">Frontend</a></li>
                            <li><a target="_blank" href="https://github.com/fga-eps-mds/2020.1-Minacademy-BackEnd">Backend</a></li>
                        </ul>
                    </div>
                    <div className="footer__body--resources">
                        <p>RECURSOS</p>
                        <ul>
                            <li><Link to="/tutorial">Tutorial</Link></li>
                            <li><Link to="/login">Login</Link></li>
                            <li><Link to="/cadastro">Cadastro</Link></li>
                        </ul>
                    </div>
                    <div className="footer__body--django">
                        <p>DJANGO GIRLS</p>
                        <ul>
                            <li><a target="_blank" href="https://djangogirls.org/">Conheça</a></li>
                            <li><a target="_blank" href="https://github.com/djangogirls" >Github</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;