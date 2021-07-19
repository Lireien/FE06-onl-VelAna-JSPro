import styled from "styled-components";

const StyledSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.textColor};
  width: 90%;
  height: 100%;
  
`;
export default StyledSection;
