import {PureComponent} from "react";
import styled from "styled-components";

const StyledLi = styled.li`
  cursor: pointer;
  padding-top: 10px;
  list-style: none;
  &:hover {transform: skew( -8deg);}
`

class Item extends PureComponent {
    render() {
        const {item} = this.props;
        return (
            <StyledLi data-tooltip={item}>{`${item}`}</StyledLi>
        )
    }
}
export default Item;