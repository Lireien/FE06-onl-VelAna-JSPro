import React from "react";
import styled from "styled-components";

const StyledDesc = styled.p`
  color: ${(props) => props.theme.textColor};
  font-weight: bold;
  font-size: 0.8em;
`;

const HeaderTitle = ({ title }) => (
  <StyledDesc className="Header-description">{title}</StyledDesc>
);
export default HeaderTitle;
