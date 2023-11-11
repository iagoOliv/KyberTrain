import React from 'react';
import Button from '../Buttons/Button';
import { ChevronDown } from 'react-bootstrap-icons';
import './Header.scss';

const Header = () => {
    return (
        <header className="header">
            <div className="header__wrapper util__wrapper--1_6rem">
                <a className="header__logo" href="/">
                    <img src="/logo.svg" alt="LOGO" className="logo"/>
                </a>

                <a className="link">
                    <span className="link__text">Cursos</span>
                    <ChevronDown className="link__icon"></ChevronDown>
                </a>

                <a className="link">
                    <span className="link__text">Empresas</span>
                    <ChevronDown className="link__icon"></ChevronDown>
                </a>

                <a className="link">
                    <span className="link__text">Soluções</span>
                    <ChevronDown className="link__icon"></ChevronDown>
                </a>

                <a className="link">
                    <span className="link__text">Instrutores</span>
                    <ChevronDown className="link__icon"></ChevronDown>
                </a>
            </div>

            <div className="header__wrapper util__wrapper--1_6rem">
                <Button goTo="/login" size="XL" isLink={true} buttonText="Cadastrar" />
                <Button goTo="/login" size="XL" buttonText="Login" />
            </div>
        </header>
    )
}

export default Header;

