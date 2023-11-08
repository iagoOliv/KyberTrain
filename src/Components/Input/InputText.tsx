import React, {ReactElement} from 'react';
import './Input.scss';

type InputProps = {
    inputIcon?: ReactElement
    inputType: string
    inputMessage: string
}

const InputText = ({ inputIcon, inputType, inputMessage }:InputProps) => {
    return (
        <>
            {/* <label>{ inputText }</label> */}
            <input type={inputType} placeholder={inputMessage}/>
            <span className='input-icon'>{ inputIcon != null ?  <>{ inputIcon }</> : "" }</span>
        </>
    )
}

export default InputText;