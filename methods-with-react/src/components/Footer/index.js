import React from "react";

import styled from "styled-components";

const StyledFooter = styled.footer`
  background-color: #282c34;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: #61dafb;
`;

const Footer = () => {
  return <StyledFooter className="App-footer"></StyledFooter>;
};
export default Footer;
