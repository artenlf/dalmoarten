import styled from "styled-components";
import { lightGrey } from "../../assets/styles/colors";

const Button = styled.button`
  align-items: center;
  background-color: ${lightGrey};
  border: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 56px;
  right: 3rem;
  padding: 1rem 4rem;
  position: absolute;
  width: 180px;
  top: 22px;
`;

export default Button;
