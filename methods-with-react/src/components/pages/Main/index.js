import Tests from "../Tests";
import {Route, Switch} from "react-router-dom";
import Methods from "../Methods";
import {LINK_PATH} from "../../../helpers/routes";
import Home from "../Home";
import Error from "../Error";
import Breadcrumbs from "../../Breadcrumbs";
import StyledMainSection from "./StyledMainSection";
import {CounterPage} from "../CounterPage";
import React from "react";

const Main = () => {
    return (
        <StyledMainSection>
            <Breadcrumbs/>
            <Switch>
                <Route exact path={LINK_PATH.home} component={Home}/>
                <Route path={LINK_PATH.tests} component={Tests}/>
                <Route path={LINK_PATH.methods}>
                    <Methods/>
                </Route>
                <Route path={LINK_PATH.counter} component={CounterPage}/>
                <Route path="*" component={Error}/>
            </Switch>
        </StyledMainSection>
    );
};
export default Main;
