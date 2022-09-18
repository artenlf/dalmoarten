import HeaderContainer from "./HeaderContainer";
import Logo from "../Logo/Logo";
import Button from "../Button/Button";
import NavMenu from "../NavMenu/NavMenu";

const Header = () => {
  return (
    <HeaderContainer>
      <Logo />
      <NavMenu />
      <Button type="button">Login</Button>
    </HeaderContainer>
  );
};

export default Header;
