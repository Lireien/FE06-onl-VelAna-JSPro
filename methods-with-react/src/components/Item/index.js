import { StyledButton, StyledLi } from "./StyledLi";
import { LIST_TYPES } from "../../const";

const Item = ({ item, changeType }) => (
  <StyledLi data-tooltip={item.name}>
    <StyledButton onClick={changeType(LIST_TYPES.MUTATING, item.name)}>
      -M-
    </StyledButton>
    {` ${item.name} `}
    <StyledButton onClick={changeType(LIST_TYPES.NON_MUTATING, item.name)}>
      -N-
    </StyledButton>
  </StyledLi>
);

export default Item;
