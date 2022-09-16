import Button from "../components/Button/Button";
import Header from "../components/Header/Header";
import Logo from "../components/Logo/Logo";
import NavMenu from "../components/NavMenu/NavMenu";

function Home() {
  return (
    <Header>
      <Logo src="."></Logo>
      <NavMenu>Links</NavMenu>
      <Button>Login</Button>
    </Header>
  );
}

export default Home;
