import HeaderContainer from "./HeaderContainer";
import Button from "../Button/Button";
import NavMenu from "../NavMenu/NavMenu";

const Header = () => {
  return (
    <HeaderContainer>
      <NavMenu />
      <Button type="button">Login</Button>
    </HeaderContainer>
  );
};

export default Header;
