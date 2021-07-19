import {useSelector} from "react-redux";
import {StyledCountContainer, StyledSpanError, StyledSpanSuccess, StyledSpanValue} from "./StyledSpans";

const Counter = () => {
    const {value, error, success} = useSelector((state) => state.counter);
    return <StyledCountContainer>
        <h4> Total moves:  </h4>
        <StyledSpanValue>{value}</StyledSpanValue>
        <h4> Incorrect moves: </h4>
        <StyledSpanError>{error}</StyledSpanError>
        <h4> Correct moves: </h4>
        <StyledSpanSuccess> {success} </StyledSpanSuccess>
    </StyledCountContainer>

}
export default Counter;