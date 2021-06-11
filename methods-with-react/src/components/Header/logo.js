import React from "react";
import logo from "../../logo.svg";
import styled from "styled-components";

const StyledLogo = styled.img`
  height: 20vmin;
  pointer-events: none;
`

const Logo = () => <StyledLogo src={logo} className="App-logo" alt="logo" />;
export default Logo;