import React from "react";
import Emoji from "../..//Emoji";

export default function Title({ text, emoji, label, size }) {
  return (
    <h1 style={{ textAlign: "center" }}>
      <Emoji symbol={emoji} label={label} size={size} />
      {text}
    </h1>
  );
}
