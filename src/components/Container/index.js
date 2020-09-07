import React from "react";
import { ContainerStyled } from "./style";

export default function Container({ children, width }) {
  return <ContainerStyled style={{ width: width }}>{children}</ContainerStyled>;
}
