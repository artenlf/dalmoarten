import NavLink from "./NavLink";
import NavMenu from "./NavMenu";

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
