import React from "react";
import CustomForm from "./components/CustomForm";
import { LoginForm } from "./Data/loginForm";
import Container from "./components/Container";
export default function App() {
  return (
    <Container width="800px">
      <CustomForm props={LoginForm} />
    </Container>
  );
}
