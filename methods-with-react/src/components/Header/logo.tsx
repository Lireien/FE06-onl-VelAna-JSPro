import logo from "../../logo.svg";
import styled from "styled-components";

const StyledLogo = styled.img`
  height: 10vmin;
  pointer-events: none;
`;

const Logo = () => <StyledLogo src={logo} className="App-logo" alt="logo" />;
export default Logo;
