import {StyledButton, StyledLi} from "./StyledLi";
import {LIST_TYPES} from "../../const";
import {useDispatch} from "react-redux";
import {changeType} from "../../store/list";
import {useCallback} from "react";

const Item = ({ item }) => {
  const dispatch = useDispatch();
  const changeTypeToM = useCallback(()=> dispatch(changeType({name: item.name, type: LIST_TYPES.MUTATING})),[item.name]);
    const changeTypeToN = useCallback(()=> dispatch(changeType({name: item.name, type: LIST_TYPES.NON_MUTATING})),[item.name]);
  return (
    <StyledLi data-tooltip={item.name}>
      <StyledButton onClick={changeTypeToM}>
        ⇦
      </StyledButton>
      {` ${item.name} `}
      <StyledButton onClick={changeTypeToN}>
        ⇨
      </StyledButton>
    </StyledLi>
  );
};
export default Item;
