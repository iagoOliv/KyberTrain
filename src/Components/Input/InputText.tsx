import { ReactElement } from 'react';
import './Input.scss';

type InputProps = {
    inputIcon?: ReactElement
    inputType: string
    inputMessage: string
}

const InputText = ({ inputIcon, inputType, inputMessage }:InputProps) => {
    return (
        <>
            {
            inputIcon != null
            ?
            <div className='input__wrapper'>
                { inputIcon != null ?  <>{ inputIcon }</> : "" }
                <input type={inputType} placeholder={inputMessage}/>
            </div>
            :
            <input type={inputType} placeholder={inputMessage}/>
            }
        </>
    )
}

export default InputText;