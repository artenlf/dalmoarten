import Button from "../components/Button/Button";
import GlobalStyle from "../assets/styles/GlobalStyle";
import Header from "../components/Header/Header";
import Logo from "../components/Logo/Logo";
import NavMenu from "../components/NavMenu/NavMenu";
import NavLink from "../components/NavMenu/NavLink";
function Home() {
  return (
    <>
      <GlobalStyle />
      <Header>
        <Logo />
        <NavMenu>
          <NavLink>Home</NavLink>
          <NavLink>Sobre</NavLink>
          <NavLink>Serviços</NavLink>
          <NavLink>Contato</NavLink>
        </NavMenu>
        <Button>Login</Button>
      </Header>
    </>
  );
}

export default Home;
