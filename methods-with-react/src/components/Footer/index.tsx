import styled from "styled-components";
import Counter from "../Counter";

const StyledFooter = styled.footer`
  background-color: ${(props) => props.theme.mainBackgroundColor};
   
  padding: 5px 0px;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  font-family: Orbitron, Serif;
  font-weight: normal;
  font-size: calc(10px + 1vmin);
  color: ${(props) => props.theme.textColor};
`;

const Footer = () => {
    return <StyledFooter className="App-footer">
        <Counter/>
    </StyledFooter>;
};
export default Footer;
