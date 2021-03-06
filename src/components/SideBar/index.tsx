/**
 * Portfolio personnel - www.alexislcs.fr
 * Application développée par Alexis Lucas.
 *
 * Copyright © 2020 Alexis Lucas
 * Email : contact@alexislcs.fr
 */

import React from "react";
import {withTranslation, WithTranslation} from "react-i18next";
import * as Icons from "wix-ui-icons-common";
import {
    Sidebar,
    SidebarDivider,
    SidebarSectionItem,
    Box,
    Avatar,
    Text,
    Cell,
    Tooltip,
    Badge
} from "wix-style-react";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import "assets/styles/sidebar.scss";

export type AppProps = WithTranslation & RouteComponentProps;

interface SideBarState {
    redirectType: string;
    redirect: boolean;
}

/**
 * Classe concernant la barre de navigation.
 */
class SideBar extends React.Component<AppProps, SideBarState> {
    constructor(props: AppProps) {
        super(props);
        this.state = {
            redirectType: "",
            redirect: false
        };
    }

    /**
     * Gestion des redirections entre les différents composants.
     */
    redirect = () => {
        switch (this.state.redirectType) {
            case "home":
                this.setState({redirect: false, redirectType: ""});
                return <Redirect to="/" />;
            case "about":
                this.setState({redirect: false, redirectType: ""});
                return <Redirect to="/about" />;
            case "projects":
                this.setState({redirect: false, redirectType: ""});
                return <Redirect to="/projects" />;
            default:
                this.setState({redirect: false, redirectType: ""});
                return <Redirect to="/404" />;
        }
    };

    render() {
        return (
            <Sidebar selectedKey="Accueil" skin="light">
                <Sidebar.PersistentHeader>
                    <div className="profileImg">
                        <Avatar
                            customIndication={
                                <Box
                                    align="center"
                                    verticalAlign="middle"
                                    backgroundColor="#0073b1"
                                    color="white"
                                    minHeight="90%"
                                    maxHeight="90%"
                                    maxWidth="90%"
                                >
                                    <Icons.LinkedIn size="25" />
                                </Box>
                            }
                            size="size90"
                            imgProps={{
                                src: "https://cloud.alexislcs.fr/portfolio/images/profil.jpg"
                            }}
                            onClick={() => {
                                window.open("https://www.linkedin.com/in/lucas-alexis/");
                            }}
                        />
                    </div>
                    <Box direction="vertical">
                        <div className="commonDesignCenter">
                            <Box direction="vertical" align="center" marginTop={2}>
                                <Text size="medium" weight="bold">
                                    {this.props.t("sidebar.name")}
                                </Text>
                                <Text size="small" secondary>
                                    <div className="center">{this.props.t("sidebar.current")}</div>
                                </Text>
                            </Box>
                            <br />
                        </div>
                        <Cell>
                            <span className="center">
                                <Box direction="vertical" align="center">
                                    <Badge
                                        size="medium"
                                        prefixIcon={<Icons.Email />}
                                        skin="general"
                                    >
                                        <Tooltip
                                            appendTo="window"
                                            content="Vous pouvez utiliser cette adresse email pour me contacter."
                                        >
                                            {this.props.t("sidebar.email")}
                                        </Tooltip>
                                    </Badge>
                                </Box>
                            </span>
                            <br />
                        </Cell>
                        <SidebarDivider fullWidth />
                    </Box>
                </Sidebar.PersistentHeader>

                <Sidebar.Item itemKey="home">
                    <SidebarSectionItem
                        onClick={() => {
                            this.setState({redirect: true, redirectType: "home"});
                            this.redirect;
                        }}
                        selected={this.props.location.pathname === "/"}
                    >
                        {this.props.t("sidebar.home")}
                    </SidebarSectionItem>
                </Sidebar.Item>

                <Sidebar.Item itemKey="projects">
                    <SidebarSectionItem
                        onClick={() => {
                            this.setState({redirect: true, redirectType: "projects"});
                            this.redirect;
                        }}
                        selected={this.props.location.pathname === "/projects"}
                    >
                        {this.props.t("sidebar.projects")}
                    </SidebarSectionItem>
                </Sidebar.Item>

                <SidebarDivider fullWidth />

                <Sidebar.Item itemKey="linkedin">
                    <SidebarSectionItem
                        onClick={() => {
                            window.open("https://www.linkedin.com/in/lucas-alexis/");
                        }}
                    >
                        {this.props.t("sidebar.linkedIn")} <Icons.ExternalLink size="17" />
                    </SidebarSectionItem>
                </Sidebar.Item>

                <Sidebar.PersistentFooter>
                    <Box direction="vertical" align="center" marginRight={2}>
                        <Text size="tiny" secondary>
                            {this.props.t("sidebar.copyright")}
                        </Text>
                    </Box>
                </Sidebar.PersistentFooter>

                {this.state.redirect === true && this.redirect()}
            </Sidebar>
        );
    }
}

export default withTranslation()(withRouter(SideBar));
