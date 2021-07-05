import styled from "styled-components"

export const StyledSpanValue = styled.span`
padding: 14px;
font-size: 1.5em;
color: yellow;
font-weight:bold;

`
export const StyledSpanError = styled(StyledSpanValue)`
color: red;
`
export const StyledSpanSuccess = styled(StyledSpanValue)`
color:green;`

export const StyledCountContainer = styled.div`
display:flex;
flex-direction: row;
`