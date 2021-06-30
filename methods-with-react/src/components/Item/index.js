import {StyledButton, StyledLi} from "./StyledLi";
import {LIST_TYPES} from "../../const";
import {useDispatch} from "react-redux";
import {changeType} from "../../store/list";

const Item = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <StyledLi data-tooltip={item.name}>
      <StyledButton onClick={() => dispatch(changeType({name: item.name, type: LIST_TYPES.MUTATING}))}>
        ⇦
      </StyledButton>
      {` ${item.name} `}
      <StyledButton onClick={() => dispatch(changeType({name: item.name, type: LIST_TYPES.NON_MUTATING}))}>
        ⇨
      </StyledButton>
    </StyledLi>
  );
};
export default Item;
