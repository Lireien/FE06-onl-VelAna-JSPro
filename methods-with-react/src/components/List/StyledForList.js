import styled from "styled-components";

export const StyledRow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: center;
  width: 90%;
`;

export const StyledUl = styled.ul`
  color: ${(props) => props.theme.textColor};
  font-weight: normal;
  padding: 10px 20px;
  width: 95%;
`;
export const StyledH2 = styled.h2`
  font-family: Orbitron, serif;
  font-weight: bold ;
  padding-top: 20px;
  color: ${(props) => props.theme.textColor};
`;
