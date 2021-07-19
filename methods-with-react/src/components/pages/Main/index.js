import Game from "../Game";
import {Route, Switch} from "react-router-dom";
import Methods from "../Methods";
import {LINK_PATH} from "../../../helpers/routes";
import Home from "../Home";
import Solution from "../Solution";
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
                <Route path={LINK_PATH.game} component={Game}/>
                <Route path={LINK_PATH.methods}>
                    <Methods/>
                </Route>
                <Route path={LINK_PATH.solution} component={Solution}/>
                <Route path={LINK_PATH.counter} component={CounterPage}/>
                <Route path="*" component={Error}/>
            </Switch>
        </StyledMainSection>
    );
};
export default Main;
