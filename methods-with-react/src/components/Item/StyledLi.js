import styled from "styled-components";

export const StyledLi = styled.li`
  cursor: pointer;
  margin: 2px;
  padding: 10px 0;
  list-style: none;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgrey;
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
