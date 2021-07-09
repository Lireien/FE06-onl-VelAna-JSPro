import List from "../List";
import { LIST_TYPES } from "../../const";
import StyledSection from "./StyledSection";

const Methods = () =>
    <StyledSection>
        <List title={LIST_TYPES.MUTATING} />
        <List title={LIST_TYPES.NON_MUTATING} />
    </StyledSection>
export default Methods;
