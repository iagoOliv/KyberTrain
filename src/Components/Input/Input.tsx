import PropTypes from 'prop-types';

const Input = ({ inputType, inputText, inputIcon = "" }) => {

    return (
        <input type={inputType}>
            { inputIcon !== "" ? <img src={ inputIcon } alt=""></img> : "" }
            <label>{ inputText }</label>
        </input>
    )
}

Input.propTypes = {
    inputType: PropTypes.string,
    inputText: PropTypes.string,
    inputIcon: PropTypes.string
}

export default Input;