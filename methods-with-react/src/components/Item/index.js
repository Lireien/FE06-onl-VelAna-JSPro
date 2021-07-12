import StyledLi, {StyledA, StyledButton, StyledButtonRemove} from "./StyledForLi";
import {LIST_TYPES} from "../../const";
import {useDispatch} from "react-redux";
import React, {useCallback} from "react";
import {increment} from "../../store/counter";
import {checkMethod} from "../../helpers/methodsDivision";
import {COUNTERS_TYPES} from "../../helpers/counters";
import {changeType} from "../../store/list";

const Item = ({item, isMain, isMovable = true, isLinkable = true}) => {
    const dispatch = useDispatch();
    const withCounter = (type) => () =>
        dispatch((dispatch) => {
            const {name} = item;
            const isAllMethods = type === LIST_TYPES.MAIN;
            const isError = !isAllMethods && checkMethod(name, type);

            !isAllMethods && isError && dispatch(increment(COUNTERS_TYPES.error));
            !isAllMethods && !isError && dispatch(increment(COUNTERS_TYPES.success));
            isAllMethods && dispatch(increment(COUNTERS_TYPES.value));

            dispatch(changeType({name: item.name, type, error: isError}));
        });
    const changeTypeToM = useCallback(withCounter(LIST_TYPES.MUTATING), [item.name]);
    const changeTypeToN = useCallback(withCounter(LIST_TYPES.NON_MUTATING), [item.name]);
    const changeTypeToMethods = useCallback(withCounter(LIST_TYPES.MAIN), [item.name]);
    return (
        <StyledLi
            data-tooltip={item.name}
            isMain={isMain}
            isMovable={isMovable}
            isLinkable={isLinkable}

        >
            {isMovable && <StyledButton onClick={changeTypeToM}>
                ⇦
            </StyledButton>}
            { isLinkable ? <StyledA
                href={`https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/${item.name}`}>
                {` ${item.name} `}</StyledA> :` ${item.name}` }

            {isMovable && <StyledButton onClick={changeTypeToN}>
                ⇨
            </StyledButton>}
            {!isMain && isMovable && <StyledButtonRemove onClick={changeTypeToMethods}>
                ⭯
            </StyledButtonRemove>}

        </StyledLi>


    );
};
export default Item;
