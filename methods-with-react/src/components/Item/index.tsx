import StyledLi, {StyledA, StyledButton, StyledButtonRemove} from "./StyledForLi";
import {LIST_TYPES} from "../../const";
import {useDispatch} from "react-redux";
import {useCallback} from "react";
import {increment} from "../../store/counter";
import {checkMethod} from "../../helpers/methodsDivision";
import {COUNTERS_TYPES} from "../../helpers/counters";
import {changeType} from "../../store/list";
import {itemType, TItem} from "../../interfaces/TItem";


interface Props {
    item: TItem;
    isMain: boolean,
    isMovable: boolean,
    isLinkable: boolean,
    isConstructor: boolean,
}

const Item = ({item, isMain, isMovable = true, isLinkable = true, isConstructor}: Props) => {
    const dispatch = useDispatch();
    const withCounter = (type: itemType) => () =>
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
            // @ts-ignore
            isMain={isMain}
            isMovable={isMovable}
            isLinkable={isLinkable}
            isConstructor={isConstructor}
            data-tooltip={item.name}

        >
            {isMovable && <StyledButton onClick={changeTypeToM}>
                ⇦
            </StyledButton>}
            {isLinkable && !isConstructor ? <StyledA
                    href={`https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/${item.name}`}>
                    {` ${item.name} `}</StyledA>
                : isLinkable && isConstructor ? <StyledA
                        href={`https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/${item.name}`}>
                        {` ${item.name} `} </StyledA>
                    : ` ${item.name}`}

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
