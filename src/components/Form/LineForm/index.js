import React from "react";
import { InputText, InputCheckbox, InputItem } from "./style";
import Emoji from "../../Emoji";

export default function InputComponent({ props }) {
  return (
    <InputItem>
      {props.map((item, idx) => (
        <React.Fragment key={idx}>
          <Emoji symbol={item.label} label="name" size={item.emojiSize} />
          {item.type === "checkbox" && (
            <InputCheckbox type={item.type} id={item.name} />
          )}
          {item.type === "text" && (
            <InputText
              type={item.type}
              id={item.name}
              placeholder={item.placeholder}
            />
          )}
        </React.Fragment>
      ))}
    </InputItem>
  );
}
