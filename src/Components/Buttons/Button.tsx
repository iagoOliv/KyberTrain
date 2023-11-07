import React from 'react';
import { ReactElement } from 'react';
import { Google, Apple } from 'react-bootstrap-icons';
import './Button.scss';

type ButtonProps = {
    type: string,
    buttonText: string,
    brand?: string
}

const Button = ({ type, buttonText, brand = "" }:ButtonProps) => {
    let brandIcon:ReactElement | undefined;

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

    const buttonClass = parse();

    return (
        // class=" button button--XL apple button--brand "
        <a className={"button " + buttonClass + " " + brand + " " + (brand != "" ?  "button--brand" : "") }>
            { brandIcon }
            <span className="button__text">{ buttonText }</span>
        </a>
    )
}

export default Button;