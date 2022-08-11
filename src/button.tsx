import React from "react";

const Button = (props: any) => {
    return (
        <button className="button1">
            Say, {props.hello}
        </button>
    )
}

export default Button;
