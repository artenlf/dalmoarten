import GlobalStyle from "../assets/styles/GlobalStyle";
import Header from "../components/Header/Header";
import Logo from "../components/Logo/LogoContainer";
import IndexPage from "../components/IndexPage/IndexPage";
const Home = () => {
  return (
    <>
      <IndexPage />
      <GlobalStyle />
      <Header />
    </>
  );
};

export default Home;
