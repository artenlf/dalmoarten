import Button from "../components/Button/Button";
import GlobalStyle from "../assets/styles/GlobalStyle";
import Header from "../components/Header/Header";
import Logo from "../components/Logo/Logo";
import IndexPage from "../components/IndexPage/IndexPage";
import NavContainer from "../components/NavMenu/NavMenu";
function Home() {
  return (
    <>
      <IndexPage />
      <GlobalStyle />
      <Header>
        <Logo />
        <NavContainer />
        <Button type="button">Login</Button>
      </Header>
    </>
  );
}

export default Home;
