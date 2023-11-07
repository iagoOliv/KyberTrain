import React, {ReactElement} from 'react';

type InputProps = {
    inputText: string,
    inputIcon?: ReactElement
}
const InputText = ({ inputText, inputIcon }:InputProps) => {
    return (
        <>
            <label>{ inputText }</label>
            { inputIcon != null ?  <>{ inputIcon }</> : "" }
            <input type="text" />
        </>
    )
}

export default InputText;