import styled from "styled-components";

const StyledMainSection = styled.section`
  background-color: ${(props) => props.theme.backgroundColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-bottom: 80px;
  overflow: hidden scroll;
  `;
export default StyledMainSection;
