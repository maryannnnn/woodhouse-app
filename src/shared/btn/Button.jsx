import './button.scss'
import React from "react";

const Button = (props) => {
    return (
        <button
            type={props.type}
            className={props.className}
            onClick={props.onClick}
        >
            {props.name}
        </button>
    )

}

export default Button;