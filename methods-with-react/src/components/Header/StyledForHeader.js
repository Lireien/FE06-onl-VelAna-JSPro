import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: ${(props) => props.theme.mainBackgroundColor};
  box-shadow: 0px -10px black;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: calc(10px + 2vmin);
  color: ${(props) => props.theme.textColor};
  padding: 10px;
`;
export const StyledH1 = styled.h1`
  text-align: center;
  font-family: Orbitron, Serif;
  font-weight: 900;
  font-size: 1.3em;
`;

export const StyledRow = styled.ul`
  padding: 5px 10px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;
