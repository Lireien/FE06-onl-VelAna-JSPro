import StyledBreadLi, { StyledBreadUl } from "./StyledBreadLi";
import { useLocation } from "react-router-dom";
import Lnk from "../Lnk";

const Breadcrumbs = () => {
  const { pathname } = useLocation();
  const crumbs = pathname.split("/");
  return (
    <StyledBreadUl>
      <StyledBreadLi to="/"> ⚝ </StyledBreadLi>
      {crumbs.map((i) => (
        <StyledBreadLi key={i}>
          <Lnk to={`/${i}`}> {i}</Lnk>
        </StyledBreadLi>
      ))}
    </StyledBreadUl>
  );
};
export default Breadcrumbs;
