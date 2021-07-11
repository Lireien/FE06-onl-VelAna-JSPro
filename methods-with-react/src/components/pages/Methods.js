import List from "../List";
import {LIST_TYPES} from "../../const";
import StyledMainSection from "./Main/StyledMainSection";

const Methods = () =>
    <StyledMainSection> <List title={LIST_TYPES.MAIN} isMovable={false}/></StyledMainSection>


export default Methods;
