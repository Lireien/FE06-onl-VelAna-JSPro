import styled from "styled-components";

const StyledButton = styled.button`
  margin:10px  5px;
  font-family: Orbitron, Serif;
  font-size: 12px;
  font-weight: bold;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid ${(props) => props.theme.bordersColor};
 
  background-color: ${(props) => props.theme.mainBackgroundColor};
  color: ${(props) => props.theme.textColor};
`;

const Button = ({ title, onClick }) => (
  <StyledButton aria-label={`{$title} value`} onClick={onClick}>
    {title}
  </StyledButton>
);

export default Button;
