import styled from "styled-components";
import { black, golden, ltGrey } from "../../assets/styles/Colors";

const Button = styled.button`
  align-items: center;
  background-color: ${ltGrey};
  border: none;
  color: ${black};
  cursor: pointer;
  font-size: 18px;
  font-weight: 700;
  height: 56px;
  padding: 1rem 4rem;
  width: 180px;
  transition: all 0.3s ease-in-out;

  :hover {
    color: ${golden};
    transform: scale(1.05);
  }
`;

export default Button;
