import styled from "styled-components"
export const ButtonStyled = styled.button`
  width: 100%;
  padding: 0.5rem;
  background-color: #527da4;
  color: white;
  border: none;
  border-bottom: 1px solid lightgray;
  border-right: 1px solid lightgray;
  box-shadow: 2px 2px 2px rgba(124, 124, 124, 0.5);
  font-size: 1rem;
  outline: none;
  cursor: pointer;

  &:hover {
    box-shadow: inset 2px 2px rgba(234, 234, 234, 0.9);
    background-color: rgba(82, 125, 164, 0.9);
    font-size: 1.1rem;
  }
`
