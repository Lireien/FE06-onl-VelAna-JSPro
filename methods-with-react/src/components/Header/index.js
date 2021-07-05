import React from "react";
import Logo from "./logo";
import HeaderTitle from "./headerTitle";
import {TITLE_HEADER} from "../../const";
import {StyledH1, StyledHeader, StyledRow} from "./StyledForHeader";
import {LINK_PATH} from "../../helpers/routes";
import StyledNavLink from "../../styles/StyledNavLink";

const Header = ({ title }) => {
  return (
    <StyledHeader className="App-header">
      <StyledH1>Methods</StyledH1>
      <Logo />
      <HeaderTitle title={TITLE_HEADER} />
      <StyledRow>
        <StyledNavLink exact to={LINK_PATH.home}>
          Home
        </StyledNavLink>
        <StyledNavLink to={LINK_PATH.counter}>Counter</StyledNavLink>
        <StyledNavLink to={LINK_PATH.tests}>Tests</StyledNavLink>
        <StyledNavLink to={LINK_PATH.methods}>Methods</StyledNavLink>
      </StyledRow>
    </StyledHeader>
  );
};
export default Header;
