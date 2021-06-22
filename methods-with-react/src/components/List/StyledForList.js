import styled from "styled-components";

export const StyledRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledUl = styled.ul`
  color: ${(props) => props.theme.textColor};
  font-weight: normal;
  padding: 10px 20px;
  width: 200px;
`;
export const StyledH2 = styled.h2`
  padding-top: 20px;
  color: ${(props) => props.theme.textColor};
`;
