import React from "react";
import { SButton } from "./button.styled";

function Button(props) {
  const { children, ...res } = props;
  return <SButton {...res}>{children}</SButton>;
}

export default Button;
