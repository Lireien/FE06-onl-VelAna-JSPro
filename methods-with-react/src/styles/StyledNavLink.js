import styled from "styled-components";
import { NavLink } from "react-router-dom";

const activeClassName = "nav-item-active";

const StyledNavLink = styled(NavLink).attrs({ activeClassName })`
  margin: 5px;
  text-decoration: none;
  font-weight: 500;
  color: ${(props) => props.theme.linkColors};
  &.${activeClassName} {
    color: ${(props) => props.theme.activeLinkColor};
    font-weight: bold;
  }
`;
export default StyledNavLink;
