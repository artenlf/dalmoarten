import NavLink from "./NavLink";
import NavContainer from "./NavContainer";

const NavMenu = () => {
  const linkLabel = ["Home", "Sobre", "Serviços", "Contato"];
  return (
    <NavContainer>
      {linkLabel.map((label, index) => (
        <NavLink key={index}>{label}</NavLink>
      ))}
    </NavContainer>
  );
};

export default NavMenu;
