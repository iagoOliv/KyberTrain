import { ReactElement } from 'react';
import { Google, Apple, InfoCircle } from 'react-bootstrap-icons';
import './Button.scss';

interface ButtonProps {
    size: string,
    buttonText: string,
    brand?: string,
    isLink?: boolean,
    redirects?: boolean,
    goTo?: string,
    info?:boolean
}

const Button = ({ size, buttonText, brand="", redirects=false, isLink=false, goTo="#", info=false}:ButtonProps) => {
    let brandIcon:ReactElement | undefined;

    if (brand != "") {
        brandIcon = brand == "apple"
            ? <Apple className="button__img"></Apple> 
            : <Google className="button__img"></Google>
    }

    size = size.toLowerCase()

    return (
        redirects
        ?
        <>
            <a 
            href={goTo}
            className={
                "button " + 
                "button--" + size + " " + 
                (brand != "" ? "button--brand " + brand : "") + 
                (isLink ? "button--link" : " ") +
                (info ? " info" : "")
                }>
                {info ? <InfoCircle /> : ""}
                { brandIcon }
                <span className="button__text">{buttonText}</span>
            </a>
        </>
        :
        <>
            <a 
            className={
                "button " + 
                "button--" + size + " " + 
                (brand != "" ? "button--brand " + brand : "") + 
                (isLink ? "button--link" : "") +
                (info ? " info" : "") 
                }>
                { brandIcon }
                {info ? <InfoCircle /> : ""}
                <span className="button__text">{buttonText}</span>
            </a>
        </>
    )
}

export default Button;