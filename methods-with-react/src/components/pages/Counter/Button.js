import styled from "styled-components";

const StyledButton = styled.button`
  margin: 5px;
`;

const Button = ({ title, onClick }) => (
  <StyledButton aria-label={`{$title} value`} onClick={onClick}>
    {title}
  </StyledButton>
);

export default Button;
