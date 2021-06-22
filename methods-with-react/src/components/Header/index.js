import React from "react";
import Logo from "./logo";
import HeaderTitle from "./headerTitle";
import { TITLE_HEADER } from "../../const";
import NavLink from "../Lnk";
import {
  StyledContainer,
  StyledH1,
  StyledHeader,
  StyledRow,
} from "./StyledForHeader";

const Header = ({ title }) => {
  return (
    <StyledHeader className="App-header">
      <StyledContainer>
        <StyledH1>Methods</StyledH1>
        <Logo />
        <HeaderTitle title={TITLE_HEADER} />
      </StyledContainer>
      <StyledRow>
        <NavLink exact to="/">
          Home
        </NavLink>
        <NavLink to="/tests">Tests</NavLink>
        <NavLink to="/methods">Methods</NavLink>
      </StyledRow>
    </StyledHeader>
  );
};
export default Header;
