import React from 'react';
import './Footer.scss';

const Footer = () => {

    return (
        <footer>
            <section className="footer">
                <div className="footer__brand">
                    <img className="logo" src="/logo.svg" alt="KyberTrain's logo."/>
                    <span>KyberTrain</span>
                </div>
                <div className="footer__content">
                    <div className="footer__links util__wrappercolumn--1_6rem">
                        <span className="footer__links--title">Cursos</span>
                        <div className="footer__links--wrapper">
                            <span className="footer__links--link">Para estudantes</span>
                            <span className="footer__links--link">Para empresas</span>
                            <span className="footer__links--link">Para instituições</span>
                        </div>
                    </div>
                    <div className="footer__links util__wrappercolumn--1_6rem">
                        <span className="footer__links--title">Empresa</span>
                        <div className="footer__links--wrapper">
                            <span className="footer__links--link">Sobre</span>
                            <span className="footer__links--link">Entrar em contato</span>
                            <span className="footer__links--link">Ética</span>
                        </div>
                    </div>
                    <div className="footer__links util__wrappercolumn--1_6rem">
                        <span className="footer__links--title">Empresa</span>
                        <div className="footer__links--wrapper">
                            <span className="footer__links--link">Sobre</span>
                            <span className="footer__links--link">Entrar em contato</span>
                        </div>
                    </div>
                    <div className="footer__links util__wrappercolumn--1_6rem">
                        <span className="footer__links--title">Cursos</span>
                        <div className="footer__links--wrapper">
                            <span className="footer__links--link">Para estudantes</span>
                            <span className="footer__links--link">Para empresas</span>
                            <span className="footer__links--link">Para instituições</span>
                        </div>
                    </div>
                </div>
            </section>
            <section className="footer__copyright">
                <span className="footer__copyright--text">Copyright &copy; KyberTrain</span>
                <span className="footer__copyright--text">Feito com &hearts; na IFPB pelos alunos de Redes</span>
            </section>
        </footer>
    )
}

export default Footer;