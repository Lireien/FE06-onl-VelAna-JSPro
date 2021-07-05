import styled from "styled-components";

const StyledMainSection = styled.section`
  background-color: ${(props) => props.theme.backgroundColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  overflow: hidden scroll;
  `;
export default StyledMainSection;
