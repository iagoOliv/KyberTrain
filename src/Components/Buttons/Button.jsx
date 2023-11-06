import PropTypes from 'prop-types';
import './Button.scss';

const Button = ({ type, buttonText, brand = "" }) => {

    const parse = () => {
        switch (type) {
        case 'XL':
            return "button--xl";
        case 'M':
            return "button--m";
        case 'Brand':
            return "button--brand";
        default:
            return "button--m";
        }
    }

    let buttonClass = parse();

    return (
        <a className={"button " + buttonClass + " " + brand }>
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