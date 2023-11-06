import PropTypes from 'prop-types';

const Input = ({ type, inputText, inputIcon = "" }) => {
    

    return (
        <input type={type}>
            { inputIcon != "" ? <img src={ inputIcon }></img> : "" }
            <label>{ inputText }</label>
        </input>
    )
}

Input.propTypes = {
    type: PropTypes.string,
    inputText: PropTypes.string,
    inputIcon: PropTypes.string
}

export default Input;