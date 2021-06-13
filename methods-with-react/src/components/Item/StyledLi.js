import styled from "styled-components";

export const StyledLi = styled.li`
  cursor: pointer;
  padding-top: 10px;
  list-style: none;
  display: flex;
  justify-content: space-between;
  &:hover {
    color: mediumspringgreen;
  }
`;
export const StyledButton = styled.button`
  margin: 0px 5px;
  padding: 5px;
  &:hover {
    border: 2px solid mediumspringgreen;
  }
`;
