const Button = (props) => {
    let buttonClass = props.type == 'XL' ? "button--xl" : "button--m";

    switch (props.type) {
        case 'XL':
            buttonClass = "button--xl";

        case 'M':
            buttonClass = "button--m";

        case 'Brand':
            buttonClass = "button--brand";
        
        default:
            buttonClass = "button--m";
    }

    return (
        <a className={buttonClass}>
             <span className="button__text">{ props.buttonText }</span>
        </a>
    )
}

export default Button;