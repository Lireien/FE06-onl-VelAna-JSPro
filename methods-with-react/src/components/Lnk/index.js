import { NavLink } from "react-router-dom";
import "./index.css";
const Lnk = ({ to, children, ...props }) => (
  <NavLink to={to} activeClassName="activeLink" {...props}>
    {children}
  </NavLink>
);
export default Lnk;
