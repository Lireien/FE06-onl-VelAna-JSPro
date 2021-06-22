import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: ${(props) => props.theme.mainBackgroundColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  font-size: calc(10px + 2vmin);
  color: ${(props) => props.theme.textColor};
  padding: 20px;
`;
export const StyledH1 = styled.h1`
  text-align: center;
  font-size: 24px;
`;
export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const StyledRow = styled.ul`
  padding: 5px 10px;
  width: 300px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
