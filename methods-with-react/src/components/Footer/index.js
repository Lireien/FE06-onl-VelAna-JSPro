import React from "react";

import styled from "styled-components";
import Counter from "../Counter";

const StyledFooter = styled.footer`
  background-color: ${(props) => props.theme.mainBackgroundColor};
  width:100%;
  position: fixed;
  bottom:0px;
  z-index:50;
  padding: 5px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2 vmin);
  color: ${(props) => props.theme.textColor};
`;

const Footer = () => {
    return <StyledFooter className="App-footer">
        <Counter/>
    </StyledFooter>;
};
export default Footer;
