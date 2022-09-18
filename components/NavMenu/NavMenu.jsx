import styled from "styled-components";
import NavLink from "./NavLink";

const NavMenu = styled.nav`
  left: 1200px;
  position: absolute;
  top: 30px;
`;

const NavContainer = () => {
  const linkLabel = ["Home", "Sobre", "Serviços", "Contato"];
  return (
    <NavMenu>
      {linkLabel.map((label, index) => (
        <NavLink key={index}>{label}</NavLink>
      ))}
    </NavMenu>
  );
};

export default NavContainer;
