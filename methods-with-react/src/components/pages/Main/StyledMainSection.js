import styled from "styled-components";

const StyledMainSection = styled.section`
  background-color: ${(props) => props.theme.backgroundColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  overflow: hidden scroll;
  `;
export default StyledMainSection;
