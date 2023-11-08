import React from "react";
import Header from "../../Components/Header/Header";
import Button from "../../Components/Buttons/Button";
import InputText from "../../Components/Input/InputText";
import { Envelope, Lock } from 'react-bootstrap-icons';

import "./Login.scss";

function Login() {
    return (
    <>
        <Header />

        <section className="container__fullscreen--withheader">
            <div className="login">
                <form className="login__form">
                    <h1 className="page__title">Entrar com sua conta</h1>
                    <div className="login__wrapper">
                        <InputText inputType="email" inputIcon={ <Envelope></Envelope> } inputMessage="Insira seu e-mail" />
                        <InputText inputType="password" inputIcon={ <Lock></Lock> }  inputMessage="Insira sua senha"/>
                        <Button type="XL" buttonText="Entrar" />
                        <Button type="XL" buttonText="Entrar com a Apple" brand="apple" />
                        <Button type="XL" buttonText="Entrar com o Google" brand="google" />
                    </div>
                </form>
            </div>
        </section>
    </>
    )
}

export default Login;