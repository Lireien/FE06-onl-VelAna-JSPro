import styled from "styled-components";

export const StyledTooltip = styled.div`
  background-color: ${(props) => props.theme.mainBackgroundColor};
  color: ${(props) => props.theme.textColor};
  position: absolute;
  border: 2px solid ${(props) => props.theme.bordersColor};
  padding: 5px;
  border-radius: 5px;
  transform: translateY(-100%);
`;
