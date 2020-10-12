/**
 * Portfolio personnel - www.alexislcs.fr
 * Application développée par Alexis Lucas.
 *
 * Copyright © 2020 Alexis Lucas
 * Email : contact@alexislcs.fr
 */

import React, {Component} from "react";
import {withTranslation, WithTranslation} from "react-i18next";
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import "assets/styles/main.scss";
import SideBar from "components/SideBar";
import Home from "components/Home";
import NotFound from "components/NotFound";
import Projects from "components/Projects";

type AppProps = WithTranslation;

export interface AppState {
    error: string;
}

/**
 * Classe principale de l'application.
 */
class App extends Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);
        this.state = {
            error: ""
        };

        console.log(
            "Portfolio personnel - www.alexislcs.fr\n" +
                "Application développée par Alexis Lucas.\n\n" +
                "Copyright © 2020 Alexis Lucas\n" +
                "Email : contact@alexislcs.fr"
        );
    }

    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/">
                        <div className="sidebar">
                            <SideBar />
                        </div>
                        <div className="main">
                            <Home />
                        </div>
                    </Route>
                    <Route exact path="/projects">
                        <div className="sidebar">
                            <SideBar />
                        </div>
                        <div className="main">
                            <Projects />
                        </div>
                    </Route>
                    <Route exact path="/404">
                        <div className="sidebar">
                            <SideBar />
                        </div>
                        <div className="main">
                            <NotFound />
                        </div>
                    </Route>
                    <Route>
                        <Redirect to="/404" />
                    </Route>
                </Switch>
            </Router>
        );
    }
}

export default withTranslation()(App);
