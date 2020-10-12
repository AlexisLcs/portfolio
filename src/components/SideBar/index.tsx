import React from "react";
import {withTranslation, WithTranslation} from "react-i18next";
import * as Icons from "wix-ui-icons-common";
import {Sidebar, SidebarDivider, SidebarSectionItem, Box, Avatar, Text} from "wix-style-react";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";

export type AppProps = WithTranslation & RouteComponentProps;

interface SideBarState {
    redirectType: string;
    redirect: boolean;
}

class SideBar extends React.Component<AppProps, SideBarState> {
    constructor(props: AppProps) {
        super(props);
        this.state = {
            redirectType: "",
            redirect: false
        };
    }

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

    footer = () => {
        return (
            <p className="footer">
                <Box direction="vertical" align="center" marginLeft={4}>
                    <Text size="tiny" textAlign="center" secondary>
                        Copyright © 2020 Alexis Lucas
                    </Text>
                </Box>
            </p>
        );
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
                                    Alexis Lucas
                                </Text>
                                <Text textAlign="center" size="small" secondary>
                                    Elève-ingénieur en informatique à Polytech et en Maîtrise à
                                    l&apos;UdeS
                                </Text>
                            </Box>
                            <br />
                        </div>
                        {/* <Cell>
                            <span
                                className="into-notif"
                                title="Je cherche actuellement mon stage de fin d'étude pour une durée de 18 semaines minimum à partir d'Avril 2021."
                            >
                                <Notification theme="success" show>
                                    <Notification.TextLabel>
                                        En recherche de stage
                                    </Notification.TextLabel>
                                </Notification>
                            </span>
                        </Cell> */}
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
                        Accueil
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
                        Projets
                    </SidebarSectionItem>
                </Sidebar.Item>

                <SidebarDivider fullWidth />

                <Sidebar.Item itemKey="linkedin">
                    <SidebarSectionItem
                        onClick={() => {
                            window.open("https://www.linkedin.com/in/lucas-alexis/");
                        }}
                    >
                        Profil LinkedIn <Icons.ExternalLink size="17" />
                    </SidebarSectionItem>
                </Sidebar.Item>

                {this.footer()}
                {this.state.redirect === true && this.redirect()}
            </Sidebar>
        );
    }
}

export default withTranslation()(withRouter(SideBar));
