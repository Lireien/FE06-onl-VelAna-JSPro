import React from "react";
import styled from "styled-components";

const StyledLi = styled.li`
  position: relative;
  cursor: pointer;
  margin: 2px;
  padding: 10px 0;
  list-style: none;
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.theme.liBgColor};
  border: 1px solid ${(props) => props.theme.bordersColor};
  border-radius: 4px;

  &:hover {
    color: #c168e8;
    font-weight: 500;
  }
`;
export const StyledButton = styled.button`
  margin: 0 5px;
  padding: 5px;
  &:hover {
    border: 2px solid ${(props) => props.theme.bordersColor};
  }
`;
export const StyledButtonRemove = styled(StyledButton)`
  position: absolute;
  right: -3em;
  color: red;
  font-weight: bold;
`;
export default StyledLi;