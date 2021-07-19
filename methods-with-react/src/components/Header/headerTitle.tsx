import styled from "styled-components";
import {TTitle} from "../../interfaces/TTitle";

const StyledDesc = styled.p`
  color: ${(props) => props.theme.textColor};
  font-family: Orbitron,Serif;
  font-weight: 700;
  font-size: 0.7em;
`;

interface Props {
    title :TTitle,
}

const HeaderTitle = ({ title }: Props) => (
  <StyledDesc className="Header-description">{title}</StyledDesc>
);
export default HeaderTitle;
