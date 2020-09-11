import React from 'react';
import '../../index.css';
import './style.css';
import Button from '../Button'
function Footer() {
    return (
        <div className="footer">
            <footer>
                <div className="row">
                <div className="col-4 offset-1 col-sm-2">
                        <p>MINACADEMY</p>
                        <ul>
                            <li><a href="">FAQ</a></li>
                            <li><a href="">Contact</a></li>
                        </ul>
                    </div>
                    <div className="col-4 offset-1 col-sm-2">
                        <p>COMUNIDADE</p>
                        <ul>
                            <li><a href="https://github.com/fga-eps-mds/2020.1-Grupo4/">GitHub</a></li>
                            <li><a href="">Twitter</a></li>
                        </ul>
                    </div>
                    <div className="col-4 offset-1 col-sm-2">
                        <p>RECURSOS</p>
                        <ul>
                            <li><a href="">Cursos</a></li>
                            <li><a href="" >Mentoria</a></li>
                            <li><a href="">login</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;