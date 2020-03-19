import React from "react";
import {HashRouter as Router, Route, Switch} from "react-router-dom"
import createHistory from "history/createBrowserHistory";
import Homepage from "../components/Homepage";
import ProjectsPage from "../components/ProjectsPage";
import ContactPage from "../components/ContactPage";

export const history = createHistory();

const AppRouter = () => (

    <Router history={history} basename="https://subnub.github.io/myportfolio-public">
        <Switch>
            <Route path="/" exact={true} component={Homepage}/>
            <Route path="/projects" component={ProjectsPage} />
            <Route path="/contact" component={ContactPage}/>
        </Switch>
    </Router>
)

export default AppRouter;