import StyledBreadLi, {StyledBreadUl} from "./StyledBreadLi";
import {useLocation} from "react-router-dom"
import Lnk from "../Lnk";


const Breadcrumbs = () => {
    const {pathname} = useLocation();
    const crumbs = pathname.split("/").filter((i) => i);

    return (
        <StyledBreadUl>
            <StyledBreadLi
                // @ts-ignore
                to="/"> ⏏ </StyledBreadLi>
            {crumbs.map((i, index) => (
                <StyledBreadLi key={i}>
                    <Lnk to={`/${crumbs.slice(0, index + 1).join("/")}`}>{`➮ ${i}`}</Lnk>
                </StyledBreadLi>
            ))}
        </StyledBreadUl>
    );
};
export default Breadcrumbs;
