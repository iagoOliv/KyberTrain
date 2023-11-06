import PropTypes from 'prop-types';
import { Google, Apple } from 'react-bootstrap-icons';
import './Button.scss';

const Button = ({ type, buttonText, brand = "" }) => {
    let brandIcon = "";

    if (brand != "") {
        brandIcon = brand == "apple"
            ? <Apple className="button__img"></Apple> 
            : <Google className="button__img"></Google>
    }

    const parse = () => {
        switch (type) {
        case 'XL':
            return "button--xl";
        case 'M':
            return "button--m";
        default:
            return "button--m";
        }
    }

    let buttonClass = parse();

    return (
        // class=" button button--XL apple button--brand "
        <a className={"button " + buttonClass + " " + brand + " " + (brand != "" ?  "button--brand" : "") }>
            { brandIcon }
            <span className="button__text">{ buttonText }</span>
        </a>
    )
}

Button.propTypes = {
    type: PropTypes.string,
    buttonText: PropTypes.string,
    brand: PropTypes.string
}

export default Button;