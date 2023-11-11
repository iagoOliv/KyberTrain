import React from "react";
import FooterMini from "../../Components/Footers/FooterMini";
import Button from "../../Components/Buttons/Button";
import InputText from "../../Components/Input/InputText";
import { Envelope, Lock } from 'react-bootstrap-icons';

import "./Login.scss";

const Login = () => {
    return (
    <>
        <section className="login--background container__fullscreen--withheader">
            <div className="login">

                <div className="login__header">
                    <h1 className="login__header--title">Entrar com sua conta</h1>
                </div>

                <form className="login__form">
                    <div className="login__wrapper">
                        <InputText inputType="email" inputIcon={ <Envelope></Envelope> } inputMessage="Insira seu e-mail" />
                        <InputText inputType="password" inputIcon={ <Lock></Lock> }  inputMessage="Insira sua senha"/>
                        
                        <Button size="XL" buttonText="Entrar" />
                        <Button size="XL" buttonText="Entrar com a Apple" brand="apple" />
                        <Button size="XL" buttonText="Entrar com o Google" brand="google" />
                    </div>

                    <div className="separator"></div>

                    <div className="util__wrappercolumn--8rem">
                        <a href="/signup" className="link">Esqueci minha senha</a>
                        <a href="/signup" className="link">Criar uma conta</a>
                    </div>
                </form>

            </div>

            <FooterMini />
        </section>
    </>
    )
}

export default Login;