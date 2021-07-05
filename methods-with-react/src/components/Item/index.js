import StyledLi, {StyledButton, StyledButtonRemove} from "./StyledForLi";
import {LIST_TYPES} from "../../const";
import {useDispatch} from "react-redux";
import {changeType} from "../../store/list";
import React, {useCallback} from "react";
import {increment} from "../../store/counter";

const Item = ({item, isMain}) => {
    const dispatch = useDispatch();
    const withCounter = (type) => () => dispatch((dispatch, getState) => {
        dispatch(increment());
        dispatch(changeType({name: item.name, type}))
    })
    const changeTypeToM = useCallback(withCounter(LIST_TYPES.MUTATING), [item.name]);
    const changeTypeToN = useCallback(withCounter(LIST_TYPES.NON_MUTATING), [item.name]);
    const changeTypeToMethods = useCallback(withCounter(LIST_TYPES.MAIN), [item.name]);
    return (
        <StyledLi
            data-tooltip={item.name}
            isMain={isMain}>
            <StyledButton onClick={changeTypeToM}>
                ⇦
            </StyledButton>
            {` ${item.name} `}
            <StyledButton onClick={changeTypeToN}>
                ⇨
            </StyledButton>
            {!isMain && <StyledButtonRemove onClick={changeTypeToMethods}>
                ⭯
                </StyledButtonRemove>}

        </StyledLi>


                );
                };
export default Item;
