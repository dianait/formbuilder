import React from "react";

// COMPONENTS
import LineForm from "../../components/Form/LineForm";
import ButtonStyled from "../../components/Form/Button";
import Title from "../../components/Form/Title";

// STYLES
import { Form } from "./style";

const CustomForm = ({ props, handle }) => {
  const handleForm = (evt) => {
    evt.preventDefault();
    handle();
  };

  return (
    <>
      <Form onSubmit={handleForm}>
        {props.title && (
          <Title
            text={props.title.text}
            emoji={props.title.label}
            label={props.title.labelEmoji}
            size={props.title.emojiSize}
          />
        )}

        {props.camps.map((line, idx) => (
          <LineForm key={idx} props={line} />
        ))}

        {props.button && (
          <ButtonStyled
            text={props.button.text}
            emoji={props.button.label}
            label={props.button.emojiLabel}
            size={props.button.emojiSize}
          />
        )}
      </Form>
    </>
  );
};

export default React.memo(CustomForm);
