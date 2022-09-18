import styled from "styled-components";
import { golden, ltGrey } from "../../assets/styles/Colors";

const NavLink = styled.a`
  color: ${ltGrey};
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
