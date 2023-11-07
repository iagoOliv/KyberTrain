import Header from "../../Components/Header/Header";
import Button from "../../Components/Buttons/Button";
import Input from "../../Components/Input/Input";
// import { Envelope, Lock } from 'react-bootstrap-icons';

import "./Login.scss";

function Login() {

    return (
    <>
        <Header />

        <section className="login">
            <h1 className="login__title">Entrar com sua conta</h1>
            
            <form className="login__form">
                <div className="login__wrapper">
                    <Input inputType="text" inputText="Insira seu email" inputIcon="media/"/>
                    <Input inputType="text" inputText="Insira sua senha" inputIcon="media/"/>
                    <Button type="XL" buttonText="Entrar" />
                    <Button type="XL" buttonText="Entrar com a Apple" brand="apple" />
                    <Button type="XL" buttonText="Entrar com o Google" brand="google" />
                </div>
            </form>
        </section>
    </>
    )
}

export default Login;