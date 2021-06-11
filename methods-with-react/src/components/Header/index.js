import React from "react";
import Logo from "./logo";
import HeaderTitle from "./headerTitle";
import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: #282c34;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: #61dafb;
`

const Header = ({title}) => {
return(
    <StyledHeader className="App-header">
        <h1>Methods</h1>
        <Logo/>
        <HeaderTitle title = {title}/>
    </StyledHeader>);
};
export default Header;