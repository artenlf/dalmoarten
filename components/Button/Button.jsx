import styled from "styled-components";
import { black, golden, ltGrey } from "../../assets/styles/Colors";

const Button = styled.button`
  align-items: center;
  background-color: ${ltGrey};
  border: none;
  color: ${black};
  cursor: pointer;
  display: flex;
  font-size: 18px;
  font-weight: 700;
  flex-direction: row;
  justify-content: center;
  height: 56px;
  right: 3rem;
  padding: 1rem 4rem;
  position: absolute;
  width: 180px;
  top: 12.5px;
  transition: all 0.3s ease-in-out;

  :hover {
    color: ${golden};
    transform: scale(1.05);
  }
`;

export default Button;
