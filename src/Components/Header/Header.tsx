import './Header.scss';
import { ChevronDown } from 'react-bootstrap-icons';
import Button from '../Buttons/Button';

const Header = () => {
    return (
        <>
            <header className="header">
                <div className="header__wrapper util__wrapper--1_6rem">
                    <a className="header__logo" href="/">
                        <img src="/logo.svg" alt="LOGO" className="logo"/>
                    </a>

                    <div className="link">
                        <Button size="xl" buttonText={"Cursos"} isLink={true} redirects={true} goTo={"/explore"}/>
                        <ChevronDown className="link__icon"></ChevronDown>
                    </div>

                    <div className="link">
                        <Button size="xl" buttonText={"Soluções"} isLink={true} redirects={true}/>
                        <ChevronDown className="link__icon"></ChevronDown>
                    </div>

                    <div className="link">
                        <Button size="xl" buttonText={"Empresa"} isLink={true} redirects={true}/>
                        <ChevronDown className="link__icon"></ChevronDown>
                    </div>

                    <div className="link">
                        <Button size="xl" buttonText={"Instrutores"} isLink={true} redirects={true}/>
                        <ChevronDown className="link__icon"></ChevronDown>
                    </div>
                </div>

                <div className="header__wrapper util__wrapper--1_6rem">
                    <Button size="XL" isLink={true} buttonText="Cadastrar" redirects={true} goTo="/login"/>
                    <Button size="XL" buttonText="Entrar" redirects={true} goTo="/login"/>
                </div>
            </header>
            <div className="header__pusher"></div>
        </>
    )
}

export default Header;

