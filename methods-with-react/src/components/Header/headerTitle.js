import React from "react";
import styled from "styled-components";

const StyledDesc = styled.p`
  color: #61dafb;
`

const HeaderTitle = ({title}) =>
    <StyledDesc className="Header-description">
        {title}
    </StyledDesc>
export default HeaderTitle;
