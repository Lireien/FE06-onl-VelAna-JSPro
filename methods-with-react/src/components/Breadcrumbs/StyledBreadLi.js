import styled from "styled-components";

const StyledBreadLi = styled.li`
  color: #ffffff;
  font-family: Orbitron, Serif;
  font-weight: bold;
  text-shadow: black 2px 2px 0, black -2px -2px 0,
    black -2px 2px 0, black 2px -2px 0;
  list-style: none;
  display: inline-block;
  padding: 5px 12px 5px 5px;
`;
export const StyledBreadUl = styled.ul`
  padding-inline-start: 0;
  text-align: center;
`;

export default StyledBreadLi;
