import React from "react";
import { ButtonStyled } from "./style";
import Emoji from "../../Emoji";

export default function Button({ text, emoji, label, size, onClick }) {
  const handleOnClick = (evt) => {
    if (onClick) {
      evt.preventDefault();
      onClick();
    }
  };
  return (
    <ButtonStyled onClick={handleOnClick}>
      {emoji && <Emoji symbol={emoji} label={label} size={size}></Emoji>}
      {text}
    </ButtonStyled>
  );
}
