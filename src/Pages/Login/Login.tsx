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
                <h1 className="login__title">Entrar com sua conta</h1>

                <form className="login__form">
                    <div className="login__wrapper">
                        <InputText inputText="Insira seu email" inputIcon={ <Envelope></Envelope> }/>
                        <InputText inputText="Insira sua senha" inputIcon={ <Lock></Lock> }/>
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