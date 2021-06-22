import StyledBreadLi, { StyledBreadUl } from "./StyledBreadLi";
import StyledSection from "../pages/StyledSection";
import { useLocation } from "react-router-dom";
import Lnk from "../Lnk";

const Breadcrumbs = () => {
  const { pathname } = useLocation();
  const crumbs = pathname.split("/");
  return (
    <StyledSection>
      <StyledBreadUl>
        <StyledBreadLi to="/"> ⚝ </StyledBreadLi>
        {crumbs.map((i) => (
          <StyledBreadLi key={i}>
            <Lnk to={`/${i}`}>{i}</Lnk>
          </StyledBreadLi>
        ))}
      </StyledBreadUl>
    </StyledSection>
  );
};
export default Breadcrumbs;
