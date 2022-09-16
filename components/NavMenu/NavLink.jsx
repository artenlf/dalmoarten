import styled from "styled-components";
import { golden } from "../../assets/styles/Colors";

const NavLink = styled.a`
  font-size: 18px;
  margin-right: 2em;

  :last-child {
    margin-right: 0;
  }
  :hover {
    cursor: pointer;
    color: ${golden};
    transition: all 0.3s ease-in-out;
  }
`;

export default NavLink;
