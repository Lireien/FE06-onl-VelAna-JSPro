import {StyledButton, StyledButtonRemove, StyledLi} from "./StyledForLi";
import {LIST_TYPES} from "../../const";
import {useDispatch} from "react-redux";
import {changeType} from "../../store/list";
import {useCallback} from "react";
import {StyledMethodsContainer} from "../List/StyledForList";

const Item = ({ item }) => {
  const dispatch = useDispatch();
  const changeTypeToM = useCallback(()=> dispatch(changeType({name: item.name, type: LIST_TYPES.MUTATING})),[item.name]);
    const changeTypeToN = useCallback(()=> dispatch(changeType({name: item.name, type: LIST_TYPES.NON_MUTATING})),[item.name]);
    const changeTypeToMethods = useCallback(()=> dispatch(changeType({name: item.name, type: LIST_TYPES.MAIN})),[item.name]);
  return (
          <StyledLi data-tooltip={item.name}>
      <StyledButton onClick={changeTypeToM}>
        ⇦
      </StyledButton>
      {` ${item.name} `}
      <StyledButton onClick={changeTypeToN}>
        ⇨
      </StyledButton>
      <StyledButtonRemove onClick={changeTypeToMethods}>
                  ⭯
      </StyledButtonRemove>

    </StyledLi>


  );
};
export default Item;
