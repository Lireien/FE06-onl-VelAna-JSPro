import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: ${(props) => props.theme.mainBackgroundColor};
  box-shadow: 0px -10px black;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  font-size: calc(10px + 2vmin);
  color: ${(props) => props.theme.textColor};
  padding: 20px;
  //border-bottom: 2px solid lime;
`;
export const StyledH1 = styled.h1`
  text-align: center;
  font-size: 1.5em;
`;

export const StyledRow = styled.ul`
  padding: 5px 10px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;
