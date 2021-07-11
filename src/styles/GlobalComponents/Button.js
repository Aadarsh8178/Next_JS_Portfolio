import React from "react";

import { ButtonBack, ButtonFront } from "./index";

const Button = (props) => (
  <ButtonBack
    alt={props.alt}
    form={props.form}
    disabled={props.disabled}
    circle={props.circle}
    {...props.animate}
  >
    {props.children}
    <ButtonFront
      alt={props.alt}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </ButtonFront>
  </ButtonBack>
);

export default Button;
