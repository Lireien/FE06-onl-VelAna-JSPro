import styled from "styled-components";

const StyledSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.textColor};
  width: 100%;
  min-height: 390px;
`;
export default StyledSection;
