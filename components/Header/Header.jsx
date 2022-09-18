import HeaderContainer from "./HeaderContainer";
import Logo from "../Logo/Logo";
import Login from "../Button/Login";
import NavMenu from "../NavMenu/NavMenu";

const Header = () => {
  return (
    <HeaderContainer>
      <Logo />
      <NavMenu />
      <Login type="button">Login</Login>
    </HeaderContainer>
  );
};

export default Header;
