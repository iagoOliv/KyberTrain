import React from 'react';
import { ReactElement } from 'react';
import { Google, Apple } from 'react-bootstrap-icons';
import './Button.scss';

type ButtonProps = {
    size: string,
    buttonText: string,
    brand?: string,
    isLink?: boolean,
    goTo?: string
}

const Button = ({ size, buttonText, brand="", isLink=false, goTo="#"}:ButtonProps) => {
    /*
        Os botões obrigatoriamente devem ter um tamanho XL ou Médio, um href 
        e opcionalmente ter uma logo ou ser um link
    */
    let brandIcon:ReactElement | undefined;

    if (brand != "") {
        brandIcon = brand == "apple"
            ? <Apple className="button__img"></Apple> 
            : <Google className="button__img"></Google>
    }

    const buttonClass = size == "XL" ? "button--xl" : "button--m";

    return (
        // class=" button button--XL apple button--brand "
        <a href={ goTo } className={
            "button " + buttonClass + " " + brand + " " + (brand != "" ?  "button--brand" : "") + (isLink ? "button--link" : "") 
            }>
            { brandIcon }
            <span className="button__text">{ buttonText }</span>
        </a>
    )
}

export default Button;