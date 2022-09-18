import Image from "next/image";
import logo from "../../assets/img/logo.png";
import LogoContainer from "./LogoContainer";

function Logo() {
  return (
    <LogoContainer>
      <Image src={logo} alt="Logo Dalmo Arten Contabilidade" />
    </LogoContainer>
  );
}

export default Logo;
