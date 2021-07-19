import StyledLi, {StyledA, StyledButton, StyledButtonRemove} from "./StyledForLi";
import {LIST_TYPES} from "../../const";
import {useCallback} from "react";
import {increment} from "../../store/counter";
import {checkMethod} from "../../helpers/methodsDivision";
import {COUNTERS_TYPES} from "../../helpers/counters";
import {changeType} from "../../store/list";
import {itemType} from "../../interfaces/TItem";
import {Dispatch} from "@reduxjs/toolkit";
import {useAppDispatch} from "../../hooks";


interface Props {
    item: itemType;
    isMain?: boolean;
    isMovable?: boolean;
    isLinkable?: boolean;
    isConstructor?: boolean;
    name: string;
}

const Item = ({item, isMain, isMovable = true, isLinkable = true, isConstructor, name}: Props) => {
    const dispatch = useAppDispatch();


    const withCounter = (type: itemType) => () =>
        // @ts-ignore
        dispatch((dispatch: Dispatch<any>) => {

            const {name}: any = item;
            const isAllMethods = type === LIST_TYPES.MAIN;
            const isError = !isAllMethods && checkMethod(name, type);

            !isAllMethods && isError && dispatch(increment(COUNTERS_TYPES.error));
            !isAllMethods && !isError && dispatch(increment(COUNTERS_TYPES.success));
            isAllMethods && dispatch(increment(COUNTERS_TYPES.value));


            dispatch(changeType({name, type, error: isError}));
        });

    const changeTypeToM = useCallback(withCounter(LIST_TYPES.MUTATING), [name]);

    const changeTypeToN = useCallback(withCounter(LIST_TYPES.NON_MUTATING), [name]);

    const changeTypeToMethods = useCallback(withCounter(LIST_TYPES.MAIN), [name]);


    return (
        <StyledLi
            data-tooltip={name}
            isMain={isMain}
            isMovable={isMovable}
            isLinkable={isLinkable}
            isConstructor={isConstructor}

        >
            {isMovable && <StyledButton onClick={changeTypeToM}>
                ⇦
            </StyledButton>}
            {isLinkable && !isConstructor ? <StyledA
                    href={`https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/${name}`}>
                    {` ${name} `}</StyledA>
                : isLinkable && isConstructor ? <StyledA
                        href={`https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/${name}`}>
                        {` ${name} `} </StyledA>
                    : ` ${name}`}

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
