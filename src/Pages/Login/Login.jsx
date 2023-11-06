import Header from "../../Components/Header/Header";
import Button from "../../Components/Buttons/Button";
import Input from "../../Components/Input/Input";
// import { Envelope, Lock } from 'react-bootstrap-icons';

import "./Login.scss";

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