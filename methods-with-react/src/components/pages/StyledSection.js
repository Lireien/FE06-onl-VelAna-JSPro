import styled from "styled-components";

const StyledSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: ${(props) => props.theme.mainBackgroundColor};
  color: ${(props) => props.theme.textColor};
`;
export default StyledSection;
