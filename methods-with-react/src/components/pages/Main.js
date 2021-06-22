import Tests from "./Tests";
import { Route, Switch } from "react-router-dom";
import Methods from "./Methods";
import { LINK_PATH } from "../../helpers/routes";
import Home from "./Home";
import Error from "./Error";

const Main = () => {
  return (
    <Switch>
      <Route exact path={LINK_PATH.home} component={Home} />
      <Route path={LINK_PATH.tests} component={Tests} />
      <Route path={LINK_PATH.methods}>
        <Methods />
      </Route>
      <Route path="*" component={Error} />
    </Switch>
  );
};
export default Main;
