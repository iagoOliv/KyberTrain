import Header from "../../Components/Header/Header";
import Button from "../../Components/Buttons/Button";
//importar os icons de email e cadeado do bootstrap icons
import { Envelope, Lock } from 'react-bootstrap-icons';

import "./style.css";

function Login() {

    return (
    <div className="container">
        <Header />

        <center><h1 className="login__wrapper--title">Entrar com sua conta</h1></center>

        <form className="login__wrapper--form">

                    
                    {/* <Button type="XL" buttonText="Entrar" id="btn__login" /><br/>
                    <Button type="M" buttonText="Entrar com o Google" id="btn__google" /><br/>
                    <Button type="Brand" buttonText="Entrar com Apple" id="btn__apple" /> */}
        </form>
    </div>
    )
}

export default Login;