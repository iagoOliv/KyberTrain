import Button from '../Buttons/Button';
import './style.css';

const Header = () => {
    return (
        <div className="header">
            <div className="header__wrapper">
                <img src="" alt="" className="header__wrapper--logo"/>
                <a className="header__wrapper--link">Link 1</a>
                <a className="header__wrapper--link">Link 2</a>
                <a className="header__wrapper--link">Link 3</a>
                <a className="header__wrapper--link">Link 4</a>
            </div>

            <div className="header__wrapper">
                <Button type="XL" buttonText="Cadastrar" />
                <Button type="XL" buttonText="Login" />
            </div>
        </div>
    )
}

export default Header;

