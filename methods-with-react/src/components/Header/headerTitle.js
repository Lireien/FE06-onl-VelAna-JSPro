import React from "react";
import styled from "styled-components";

const StyledDesc = styled.p`
  color: ${(props) => props.theme.textColor};
  font-family: Orbitron,Serif;
  font-weight: 700;
  font-size: 0.7em;
`;

const HeaderTitle = ({ title }) => (
  <StyledDesc className="Header-description">{title}</StyledDesc>
);
export default HeaderTitle;
