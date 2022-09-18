import styled from "styled-components";
import { black } from "../../assets/styles/Colors";
import NavContainer from "../NavMenu/NavContainer";
import Button from "../Button/Button";

const HeaderContainer = styled.section`
  background-color: ${black};
  height: 80px;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <NavContainer />
      <Button type="button">Login</Button>
    </HeaderContainer>
  );
};

export default Header;
